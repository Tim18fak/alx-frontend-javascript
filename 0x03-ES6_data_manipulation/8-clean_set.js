export default function cleanSet(set, startString) {
  const string = [];
  let returnValue;
  if (!startString) {
    return '';
  }
  for (const val of set) {
    if (val.startsWith(startString)) {
      string.push(val.slice(startString.length));
      returnValue = string.join('-');
    }
  }
  return returnValue;
}
