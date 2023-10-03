export default function updateUniqueItems(map){
  if(!map.constructor === Map) {
    return new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if(map.get(key) === 1) {
      map.set(key, 100)
    }
    })
  return map;
}
