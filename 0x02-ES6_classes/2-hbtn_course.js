/* class HolbertonCourse {
  constructor(name, length, students) {
    this.setname(name);
    this.setlength(length);
    this.setstudents(students);
  }

  setname(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
    return this._name;
  }

  setlength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
    return this._length;
  }

  setstudents(students) {
    if (!Array.isArray(students) || students.some((s) => typeof s !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
    return this._students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this.i_length;
  }

  get students() {
    return this._length;
  }
}

export default HolbertonCourse;
*/

class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid input type');
    }
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid input type');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Invalid input type');
    }
    this._students = value;
  }
}

export default HolbertonCourse;
