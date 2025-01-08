export function nameSplit(author) {
  const [name, lastName] = author.split(' ');
  return { first_name: name, last_name: lastName };
}
