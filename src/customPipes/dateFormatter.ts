export function dateFormatter(inputDate: string) {
  const [day, month, year] = inputDate.split('/');
  let fullYear: any;
  if (year.length === 4) {
    fullYear = year;
  } else {
    const currentYear = new Date().getFullYear();
    fullYear = parseInt(year) > currentYear % 100 ? '19' + year : '20' + year;
  }

  const transformedDate = new Date(`${fullYear}-${month}-${day}`);

  return transformedDate.toISOString();
}
