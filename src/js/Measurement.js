import UNITS from './js/db_units.js';
export default 

class Measurement {

  constructor(measurement) {
    this.numerator = {
      number: measurement[0],
      units: measurement[1],
    }
    if (measurement.length === 4) {
      this.denominator = {
        number: measurement[2],
        units: measurement[3],
      }
    }
  }

  findUnit(unit) {
    // loop through the database and match the unit's string to a synonym
    // return the entire unit object from the database
  }

}