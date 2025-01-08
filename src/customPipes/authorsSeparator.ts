export function authorsSeparator(str: string) {
  const arr = str.split(',');
  const array = arr.map((el) => el.trim());
  if (array.length <= 1) {
    return [];
  }
  return array;
}
