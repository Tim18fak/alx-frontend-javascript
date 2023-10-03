/* export default function updateUniqueItems(map){
  if(!map.constructor === Map) {
    return new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if(map.get(key) === 1) {
      map.set(key, 100)
    }
    })
  return map;
} */

export default function updateUniqueItems(items) {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of items) {
    if (value === 1) {
      items.set(key, 100);
    }
  }
  return items;
}
