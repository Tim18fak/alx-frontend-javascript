export default function hasValueFromArray(set, array) {
  let val;
  if (array.length === 1) {
    for (const element of array) {
      if (!set.has(element)) {
        val = false;
        return false;
      }
      val = true;
      return true;
    }
  } else {
    val = false;
  }
  return val;
}
