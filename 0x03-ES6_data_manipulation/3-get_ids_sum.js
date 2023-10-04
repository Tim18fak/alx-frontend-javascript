export default function getStudentIdSum(students) {
  const IdResults = students.reduce((Initial, Id) => Initial + Id.id, 0);
  return IdResults;
}
