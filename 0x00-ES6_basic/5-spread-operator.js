export default function concatArrays(array1, array2, string) {
  const Array = [...array1, ...array2, ...string];
  return Array;
}
