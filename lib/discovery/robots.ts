import { normalizeUrl } from "./normalize";

interface RobotsRule {
  type: "allow" | "disallow";
  value: string;
}

interface RobotsPolicy {
  rules: RobotsRule[];
  crawlDelay?: number;
}

const robotsCache = new Map<
  string,
  RobotsPolicy
>();

function patternMatches(
  pathname: string,
  rule: string
) {

  if (!rule) {
    return false;
  }

  const escaped = rule
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\*/g, ".*");

  const ending =
    escaped.endsWith("$")
      ? ""
      : ".*";

  try {

    const regex =
      new RegExp(
        `^${escaped}${ending}`
      );

    return regex.test(pathname);

  } catch {

    return pathname.startsWith(rule);
  }
}

function parseRobots(
  text: string,
  userAgent: string
): RobotsPolicy {

  const lines =
    text.split(/\r?\n/);

  const genericRules: RobotsRule[] = [];
  const specificRules: RobotsRule[] = [];

  let genericDelay: number | undefined;
  let specificDelay: number | undefined;

  let activeAgents: string[] = [];

  for (const rawLine of lines) {

    const line =
      rawLine
        .replace(/#.*$/, "")
        .trim();

    if (!line) {
      continue;
    }

    const separator =
      line.indexOf(":");

    if (separator === -1) {
      continue;
    }

    const key =
      line
        .slice(0, separator)
        .trim()
        .toLowerCase();

    const value =
      line
        .slice(separator + 1)
        .trim();

    if (key === "user-agent") {

      activeAgents = [
        value.toLowerCase()
      ];

      continue;
    }

    const isSpecific =
      activeAgents.some(
        agent =>
          userAgent
            .toLowerCase()
            .includes(agent) &&
          agent !== "*"
      );

    const isGeneric =
      activeAgents.includes("*");

    if (
      key === "allow" ||
      key === "disallow"
    ) {

      const rule: RobotsRule = {
        type: key,
        value
      };

      if (isSpecific) {

        specificRules.push(rule);

      } else if (isGeneric) {

        genericRules.push(rule);
      }

      continue;
    }

    if (key === "crawl-delay") {

      const delay =
        Number(value);

      if (!Number.isFinite(delay)) {
        continue;
      }

      if (isSpecific) {

        specificDelay = delay;

      } else if (isGeneric) {

        genericDelay = delay;
      }
    }
  }

  return {
    rules:
      specificRules.length
        ? specificRules
        : genericRules,

    crawlDelay:
      specificDelay ??
      genericDelay
  };
}

export async function getRobotsPolicy(
  targetUrl: string
): Promise<RobotsPolicy> {

  const target =
    new URL(targetUrl);

  const origin =
    target.origin;

  const cached =
    robotsCache.get(origin);

  if (cached) {
    return cached;
  }

  const userAgent =
    process.env.ACTUALIZARD_USER_AGENT ||
    "ActualizardBot/1.0";

  const robotsUrl =
    `${origin}/robots.txt`;

  try {

    const response =
      await fetch(
        robotsUrl,
        {
          headers: {
            "user-agent": userAgent
          },

          signal:
            AbortSignal.timeout(10000),

          cache: "no-store"
        }
      );

    if (!response.ok) {

      const openPolicy: RobotsPolicy = {
        rules: []
      };

      robotsCache.set(
        origin,
        openPolicy
      );

      return openPolicy;
    }

    const text =
      await response.text();

    const policy =
      parseRobots(
        text,
        userAgent
      );

    robotsCache.set(
      origin,
      policy
    );

    return policy;

  } catch {

    const fallback: RobotsPolicy = {
      rules: []
    };

    robotsCache.set(
      origin,
      fallback
    );

    return fallback;
  }
}

export async function isRobotsAllowed(
  value: string
) {

  const url =
    new URL(
      normalizeUrl(value)
    );

  const policy =
    await getRobotsPolicy(
      url.toString()
    );

  const matches =
    policy.rules
      .filter(
        rule =>
          patternMatches(
            url.pathname,
            rule.value
          )
      )
      .sort(
        (a, b) =>
          b.value.length -
          a.value.length
      );

  if (!matches.length) {
    return true;
  }

  return matches[0].type === "allow";
}

export async function getRobotsDelayMs(
  value: string
) {

  const policy =
    await getRobotsPolicy(value);

  if (!policy.crawlDelay) {
    return 0;
  }

  return Math.min(
    policy.crawlDelay * 1000,
    30000
  );
}
