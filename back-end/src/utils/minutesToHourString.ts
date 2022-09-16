/**
 * Convert Minutes (number) to Hour (string).
 *
 * 1110 -> "18:30"
 *
 * @param time
 */

export const minutesToHourString = (time: number) => {
  const hours = time / 60
  const minutes = time % 60

  return `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`
}
