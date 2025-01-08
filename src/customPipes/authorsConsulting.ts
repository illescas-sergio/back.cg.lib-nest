import { nameSplit } from './fullNameSplitter';
export function manyAuthorsSeparator(full: string[]) {
  const authors = [];
  full.forEach((el) => {
    authors.push(nameSplit(el));
  });
  return authors;
}
