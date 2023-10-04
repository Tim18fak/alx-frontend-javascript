/* export default function updateStudentGradeByCity(StudentList, city, newGrades) {
  const filteredStudentList = StudentList.filter((student) => student.location === city);
  const UpdatedStudentList = filteredStudentList.map((student) => {
  let id = student.id
  let Id = id.forEach((x) => {
    return x
  }
  return Id
 const Grade = newGrades.find((grade) => grade.id === student.id);
  return student.id
 if(!Grade){
   student.grade = 'N/A';
 }
 student.grade = Grade.grade;
 return student;
 })
 return UpdatedStudentList
} */

export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const filteredStudentList = studentList.filter((student) => student.location === city);
  const updatedStudentList = filteredStudentList.map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);

    // Check if grade is found
    if (grade) {
      student.grade = grade.grade;
    } else {
      student.grade = 'N/A';
    }

    return student;
  });

  return updatedStudentList;
}
