function getListStudentIds(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((student) => student.id);
}

export default getListStudentIds;
