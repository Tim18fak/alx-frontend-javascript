/* export default function taskBlock(trueOrFalse) {
  const task = false;
 i const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
} */

export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;
  }

  return [task, task2];
}
