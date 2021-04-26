import UNITS from './db_units';
export default 

class Measurement {

  // The parameter will be an array consisting of 1 or 2 number-unit pairs
  constructor(measurement) {
    // Every "measurement" (in reality) consists of a numerator and a denominator, sometimes with multiple units for each
    this.numerator = {
      number: measurement[0],
      units: measurement[1],
    };
    if (measurement.length === 4) {
      this.denominator = {
        number: measurement[2],
        units: measurement[3],
      };
    }
  }

  // Search the "UNITS" database by matching an input unit to one of the stored synonyms
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

  // Converts any supported measurement to the units specified (in a string)
  convertUnit(outputUnitsAsString) {
    const numeratorUnits = this.numerator.units;
    const numeratorFactors = [this.numerator.number];
    
    // There won't always be a denominator (for simple, non-rate measurements), so these initialize empty
    let denominatorUnits = [];
    let denominatorFactors = [];
    if (this.hasOwnProperty("denominator")) {
      denominatorUnits = this.denominator.units;
      denominatorFactors = [this.denominator.number];
    }

    const outputUnitsAsArray = outputUnitsAsString.split(", ");
    // We need to track which units are "increasing" in value (e.g., in the numerator) and vice versa
    const increasingUnits = [];
    const decreasingUnits = [];

    let thisInputUnit;
    let thisOutputUnit;
    // Loop through any number of units we'd like to convert our measurement to...
    for (let i = 0; i < outputUnitsAsArray.length; i++) {
      thisOutputUnit = this.findUnit(outputUnitsAsArray[i]);
      // Then loop through any number of units in the numerator...
      for (let j = 0; j < numeratorUnits.length; j++) {
        thisInputUnit = this.findUnit(numeratorUnits[j]);
        // ...and if the "paradigms" (e.g., what the units measure) match, we will do a conversion
        if (thisInputUnit.paradigm === thisOutputUnit.paradigm) {
          // To accomplish this, we have to sort our factors (from the database) and divide them later
          numeratorFactors.push(thisInputUnit.factor);
          denominatorFactors.push(thisOutputUnit.factor);
          // We also store our new units for the final output
          increasingUnits.push(thisOutputUnit.name.plural);
        } else {
          increasingUnits.push(thisInputUnit.name.plural);
        }
      }
      // Repeat the numerator units/factors sorting process for the denominator, if present
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
    // Now we multiply ALL of our factors together before dividing them for the final quotient
    for (let i = 0; i < numeratorFactors.length; i++) {
      finalNumerator *= numeratorFactors[i];
    }
    for (let i = 0; i < denominatorFactors.length; i++) {
      finalDenominator *= denominatorFactors[i];
    }

    finalNumerator /= finalDenominator;
    finalDenominator = 1;// It's rare to have a number other than "1" in the denominator so currently it's all that's supported

    const convertedMeasurement = {
      numerator: {
        number: finalNumerator,
        units: increasingUnits
      },
      denominator: {
        number: finalDenominator,
        units: decreasingUnits
      }
    };

    return convertedMeasurement;
  }
}