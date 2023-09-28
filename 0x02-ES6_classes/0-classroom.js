process.on('uncaughtExpectation',(err) => {
	console.log(err)
})
class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}

export default ClassRoom;
