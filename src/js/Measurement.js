import UNITS from './db_units';
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
    for (let i = 0; i < UNITS.length; i++) {
      let synonyms = UNITS[i].synonyms;
      for (let j = 0; j < synonyms.length; j++) {
        if (unit === synonyms[j]) {
          return UNITS[i];
        }
      }
    }
  }

  convertUnit(measurement, stringOfUnits) {
    return measurement;
  }

}