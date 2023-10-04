export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    return new Error('not an array');
  }
  const setNew = new Set(array);
  return setNew;
}
