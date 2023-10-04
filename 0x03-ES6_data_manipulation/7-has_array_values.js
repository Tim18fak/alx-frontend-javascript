export default function hasValueFromArray(set, array) {
  if (array.length === 1) {
    for (const element of array) {
      if (!set.has(element)) {
        return false;
      }
      return true;
    }
  } else {
    return false;
  }
 
}
