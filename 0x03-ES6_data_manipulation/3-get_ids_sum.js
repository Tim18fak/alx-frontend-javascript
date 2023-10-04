export default function getStudentIdSum(students) {
  const IdResults = students.reduce((Initial, Id) => { 
	  return Initial + Id.id;
  }
  , 0);
  return IdResults;
}
