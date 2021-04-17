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

  convertUnit(inputMeasurement, outputUnitsAsString) {
    const numeratorUnits = (inputMeasurement.numerator).units;
    const denominatorUnits = (inputMeasurement.denominator).units;

    const numeratorFactors = [(inputMeasurement.numerator).number];
    const denominatorFactors = [(inputMeasurement.denominator).number];

    const outputUnitsAsArray = outputUnitsAsString.split(", ");
    const increasingUnits = [];
    const decreasingUnits = [];

    let thisOutputUnit;
    let thisInputUnit;
    for (let i = 0; i < outputUnitsAsArray.length; i++) {
      thisOutputUnit = inputMeasurement.findUnit(outputUnitsAsArray[i]);
      for (let j = 0; j < numeratorUnits.length; j++) {
        thisInputUnit = inputMeasurement.findUnit(numeratorUnits[j]);
        if (thisInputUnit.paradigm === thisOutputUnit.paradigm) {
          numeratorFactors.push(thisInputUnit.factor);
          denominatorFactors.push(thisOutputUnit.factor);
          decreasingUnits.push(outputUnitsAsArray[i]);
        }
      }
      for (let j = 0; j < denominatorUnits.length; j++) {
        thisInputUnit = inputMeasurement.findUnit(denominatorUnits[j]);
        if (thisInputUnit.paradigm === thisOutputUnit.paradigm) {
          denominatorFactors.push(thisInputUnit.factor);
          numeratorFactors.push(thisOutputUnit.factor);
          increasingUnits.push(outputUnitsAsArray[i]);
        }
      }
    }

    let finalNumerator = 1;
    let finalDenominator = 1;
    for (let i = 0; i < numeratorFactors.length; i++) {
      finalNumerator *= numeratorFactors[i];
    }
    for (let i = 0; i < denominatorFactors.length; i++) {
      finalDenominator *= denominatorFactors[i];
    }

    let convertedMeasurement = new Measurement(
      [
        finalNumerator,
        increasingUnits,
        finalDenominator,
        decreasingUnits
      ]
    );

    return 10;//convertedMeasurement;
  }

}