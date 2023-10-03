export default function getStudentByLocation(students, locate) {
  const result = students.filter((student) => student.location === locate);
  return result;
}
