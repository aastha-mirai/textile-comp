/**
 * Generates a unique identifier (UUID v4) with optional prefix.
 *
 * - Uses the secure `crypto.randomUUID()` if available.
 * - Falls back to a manual UUID v4 generator if needed (less secure).
 * - Optionally prepends a string prefix for easier identification (e.g., "user-", "order-").
 *
 * @param prefix Optional string to prepend to the UUID.
 * @returns A unique identifier string.
 */
export const generateUUID = (prefix?: string): string => {
  const uuid =
    // Attempt to use the native Web Crypto API UUID function
    globalThis.crypto?.randomUUID?.() ??
    // Fallback to manual UUID v4 generation
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      // Generate a random integer between 0 and 15 (hexadecimal digit)
      const r = (Math.random() * 16) | 0;

      /**
       * Determine the value for this character:
       * - If 'x', use the random number `r` (0–15)
       * - If 'y', use `(r & 0x3) | 0x8` to ensure the first hex digit is 8, 9, a, or b
       *   - `r & 0x3` masks the last 2 bits of `r` (0–3)
       *   - `| 0x8` ensures the first 2 bits are 10 (binary), giving values 8–11 in hex
       */
      const v = c === "x" ? r : (r & 0x3) | 0x8;

      // Convert the number to a hexadecimal string and return it
      return v.toString(16);
    });

  // Prepend prefix if provided
  return prefix ? `${prefix}-${uuid}` : uuid;
};
