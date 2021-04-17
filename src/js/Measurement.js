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
      let synonyms = UNITS[i].name.synonyms;
      for (let j = 0; j < synonyms.length; j++) {
        if (unit === synonyms[j]) {
          return UNITS[i];
        }
      }
    }
  }

  convertUnit(outputUnitsAsString) {
    const numeratorUnits = (this.numerator).units;
    const denominatorUnits = (this.denominator).units;

    const numeratorFactors = [(this.numerator).number];
    const denominatorFactors = [(this.denominator).number];

    const outputUnitsAsArray = outputUnitsAsString.split(", ");
    const increasingUnits = [];
    const decreasingUnits = [];

    let thisOutputUnit;
    let thisInputUnit;
    for (let i = 0; i < outputUnitsAsArray.length; i++) {
      thisOutputUnit = this.findUnit(outputUnitsAsArray[i]);
      console.log("***** Output unit paradigm: " + thisOutputUnit.paradigm + " *****")
      for (let j = 0; j < numeratorUnits.length; j++) {
        thisInputUnit = this.findUnit(numeratorUnits[j]);
        if (thisInputUnit.paradigm === thisOutputUnit.paradigm) {
          numeratorFactors.push(thisInputUnit.factor);
          denominatorFactors.push(thisOutputUnit.factor);
          increasingUnits.push(outputUnitsAsArray[i]);
        } else {
          increasingUnits.push(thisInputUnit.name.plural);
        }
      }
      for (let k = 0; k < denominatorUnits.length; k++) {
        thisInputUnit = this.findUnit(denominatorUnits[k]);
        if (thisInputUnit.paradigm === thisOutputUnit.paradigm) {
          denominatorFactors.push(thisInputUnit.factor);
          numeratorFactors.push(thisOutputUnit.factor);
          decreasingUnits.push(thisOutputUnit.name.singular);
        } else {
          decreasingUnits.push(thisInputUnit.name.singular);
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

    finalNumerator /= finalDenominator;
    finalDenominator = 1;

    let convertedMeasurement = new Measurement(
      [
        finalNumerator,
        increasingUnits,
        finalDenominator,
        decreasingUnits
      ]
    );

    return convertedMeasurement;
  }

}