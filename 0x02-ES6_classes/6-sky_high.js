import Building from './5-building'
class SkyHighBuilding {
  constructor(sqft, floors) {
    super(sqft)
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  excuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors'
  }

}
export default  SkyHighBuilding;

