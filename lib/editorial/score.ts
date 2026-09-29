export function editorialScore(input: {
  sourceCount: number;
  averageTrust: number;
  freshness: number;
  agreement: number;
  legalRisk?: number;
}) {
  const source = Math.min(20, input.sourceCount * 5);
  const trust = Math.min(20, input.averageTrust * 0.2);
  const freshness = Math.min(15, input.freshness * 0.15);
  const agreement = Math.min(25, input.agreement * 0.25);
  const riskPenalty = Math.min(20, input.legalRisk ?? 0);
  return Math.max(0, Math.min(100, Math.round(source + trust + freshness + agreement + 20 - riskPenalty)));
}

export function publicationGate(score: number, highRisk = false) {
  if (highRisk) return "review";
  if (score >= 90) return "auto";
  if (score >= 80) return "quick_review";
  if (score >= 70) return "editor_required";
  return "hold";
}
