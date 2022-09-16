/**
 * Convert Hour (string) to Minutes (number).
 *
 * "18:30" -> [18, 30] -> 18 * 60 + 30 -> 1110
 *
 * @param time
 */

export const hourStringToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":")

  // Convert string to number and return minutes
  return +hours * 60 + +minutes
}
