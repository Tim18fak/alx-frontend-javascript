export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }
  const Arr = new ArrayBuffer(length);
  let Message = new DataView(Arr);
  Message.setInt8(position, value);
  return Message;
}
