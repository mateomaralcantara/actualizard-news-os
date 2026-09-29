import OpenAI from "openai";

import type {
  EditorialDraft,
  LiveCluster,
  LiveStory
} from "@/lib/discovery/types";

import {
  loadClustersSync,
  loadStoriesSync,
  saveDraftSync,
  findDraftByClusterSync
} from "@/lib/discovery/repository";

function cleanJson(
  value: string
) {

  return value
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function fallbackDraft(
  cluster: LiveCluster,
  stories: LiveStory[]
): EditorialDraft {

  const primary =
    stories[0];

  const paragraphs =
    stories
      .map(
        story =>
          story.summary ||
          story.body.slice(
            0,
            700
          )
      )
      .filter(Boolean)
      .slice(0, 5);

  const bullets =
    Array.from(
      new Set(
        stories.map(
          story =>
            story.title
        )
      )
    )
      .slice(0, 5);

  return {

    id:
      `draft-${cluster.id}`,

    clusterId:
      cluster.id,

    title:
      cluster.title,

    dek:
      primary?.summary ||
      `Historia respaldada por ${cluster.sourceCount} fuente(s).`,

    paragraphs,

    bullets,

    tags:
      cluster.facts.entities
        .slice(0, 6),

    sources:
      stories.map(
        story => ({
          name:
            story.sourceName,

          url:
            story.canonicalUrl
        })
      ),

    confidence:
      cluster.confidence,

    generatedBy:
      "fallback",

    createdAt:
      new Date().toISOString()
  };
}

export async function createEditorialDraft(
  clusterId: string
) {

  const clusters =
    loadClustersSync();

  const cluster =
    clusters.find(
      item =>
        item.id === clusterId
    );

  if (!cluster) {

    throw new Error(
      "Cluster no encontrado."
    );
  }

  const allStories =
    loadStoriesSync();

  const stories =
    allStories.filter(
      story =>
        cluster.storyIds.includes(
          story.id
        )
    );

  if (!stories.length) {

    throw new Error(
      "El cluster no tiene evidencia."
    );
  }

  const apiKey =
    process.env.OPENAI_API_KEY;

  if (!apiKey) {

    const fallback =
      fallbackDraft(
        cluster,
        stories
      );

    saveDraftSync(
      fallback
    );

    return fallback;
  }

  const client =
    new OpenAI({
      apiKey
    });

  const evidence =
    stories.map(
      (
        story,
        index
      ) => ({

        evidenceId:
          index + 1,

        source:
          story.sourceName,

        official:
          story.officialSource,

        url:
          story.canonicalUrl,

        title:
          story.title,

        summary:
          story.summary,

        body:
          story.body.slice(
            0,
            5000
          ),

        publishedAt:
          story.publishedAt
      })
    );

  const prompt =
    JSON.stringify(
      {
        instructions: [
          "Actúa como redactor de Actualizard.",
          "Usa exclusivamente la evidencia proporcionada.",
          "No inventes cifras, nombres, declaraciones ni causalidades.",
          "Si las fuentes discrepan, expresa la discrepancia.",
          "No copies párrafos extensos de las fuentes.",
          "Escribe una pieza editorial nueva.",
          "Devuelve SOLO JSON válido."
        ],

        requiredShape: {
          title: "string",
          dek: "string",
          paragraphs: [
            "string"
          ],
          bullets: [
            "string"
          ],
          tags: [
            "string"
          ]
        },

        cluster: {
          title:
            cluster.title,

          confidence:
            cluster.confidence,

          officialConfirmation:
            cluster.officialConfirmation,

          extractedFacts:
            cluster.facts
        },

        evidence
      },
      null,
      2
    );

  try {

    const response =
      await client.responses.create({
        model:
          process.env.OPENAI_MODEL ||
          "gpt-5.6-luna",

        input: [
          {
            role: "system",
            content:
              "Eres un sistema editorial verificable. Nunca agregues hechos no presentes en las evidencias."
          },
          {
            role: "user",
            content:
              prompt
          }
        ]
      });

    const parsed =
      JSON.parse(
        cleanJson(
          response.output_text
        )
      ) as {
        title?: string;
        dek?: string;
        paragraphs?: string[];
        bullets?: string[];
        tags?: string[];
      };

    const fallback =
      fallbackDraft(
        cluster,
        stories
      );

    const draft:
      EditorialDraft = {

      ...fallback,

      title:
        parsed.title ||
        fallback.title,

      dek:
        parsed.dek ||
        fallback.dek,

      paragraphs:
        Array.isArray(
          parsed.paragraphs
        )
          ? parsed.paragraphs
              .filter(Boolean)
              .slice(0, 12)
          : fallback.paragraphs,

      bullets:
        Array.isArray(
          parsed.bullets
        )
          ? parsed.bullets
              .filter(Boolean)
              .slice(0, 8)
          : fallback.bullets,

      tags:
        Array.isArray(
          parsed.tags
        )
          ? parsed.tags
              .filter(Boolean)
              .slice(0, 10)
          : fallback.tags,

      generatedBy:
        "ai",

      createdAt:
        new Date().toISOString()
    };

    saveDraftSync(
      draft
    );

    return draft;

  } catch {

    const fallback =
      fallbackDraft(
        cluster,
        stories
      );

    saveDraftSync(
      fallback
    );

    return fallback;
  }
}

export function getDraftForCluster(
  clusterId: string
) {

  return findDraftByClusterSync(
    clusterId
  );
}
