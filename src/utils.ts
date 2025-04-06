export function makeImagePath(
  id: string | number,
  format: string = "original"
) {
  return `https://image.tmdb.org/t/p/${format}/${id}`;
}
export function makeImagePathWithSize(
  id: string | number,
  format: string = "original",
  size: number = 300
) {
  return `https://image.tmdb.org/t/p/${format}/${size}/${id}`;
}
