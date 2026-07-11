/**
 * Service slugs, in the same order as `strings.whatWeDo.items`.
 * Each maps to a detail page at /services/<slug>.
 */
export const serviceSlugs = [
  "robot-kits",
  "learning-platform",
  "project-services",
  "research",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
