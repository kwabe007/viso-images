import { z } from "zod";

export const specCompSchema = z.object({
  transparentBg: z.boolean(),
});
export type SpecComp = z.infer<typeof specCompSchema>;
