import ClassRoom from './0-classroom';

function initializeRooms() {
  const rooms = [];
  rooms[0] = new ClassRoom(19);
  rooms[1] = new ClassRoom(20);
  rooms[2] = new ClassRoom(34);
  return rooms;
}

export default initializeRooms;
