import { bringTheFirmExamples } from "./new-program";

export type { BringTheFirmExample, BringTheFirmExamples } from "./types";
export {
  bringTheFirmExamples,
  ecosystemSignalsExamples,
  establishedProgramExamples,
  newProgramExamples,
  pursuitExpansionExamples,
  salesLifecycleExamples,
} from "./new-program";

export function listBringTheFirmExamples() {
  return [...bringTheFirmExamples];
}

export function getBringTheFirmExamples(slug: string) {
  return (
    bringTheFirmExamples.find((examples) => examples.slug === slug) ?? null
  );
}

export function listBringTheFirmDraftExamples(examplesSlug: string) {
  return getBringTheFirmExamples(examplesSlug)?.examples ?? [];
}
