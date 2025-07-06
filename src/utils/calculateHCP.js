export function calculatePlayingHcp(index, slope, courseRating, gender) {
  const exact = index * slope / 113 + (courseRating - 72);
  return Math.round(exact);
}