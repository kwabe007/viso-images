import { z } from "zod";

export const specCompSchema = z.object({
  transparentBg: z.boolean(),
});
export type SpecComp = z.infer<typeof specCompSchema>;

/**
 * Splits an array into smaller arrays ("chunks") of a given size.
 *
 * @template T - The type of elements in the input array.
 * @param arr - The input array to be chunked.
 * @param size - The maximum size of each chunk (must be greater than 0).
 * @returns A new array where each element is an array (a chunk) containing up to `size` items.
 *
 * @example
 * ```ts
 * const input = [1, 2, 3, 4, 5, 6, 7];
 * const result = chunkArray(input, 3);
 * // result = [[1, 2, 3], [4, 5, 6], [7]]
 * ```
 *
 * @throws Will throw an error if `size` is less than or equal to 0.
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Size must be greater than 0");
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
