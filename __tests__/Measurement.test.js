import Measurement from '../src/js/Measurement.js';
import UNITS from '../src/js/db_units.js';

describe("constructor", () => {
  const number = 50;
  const units = ["years"];
  const basicMeasurement = [number, units];

  const numeratorNumber = 60;
  const numeratorUnits = ["miles"];
  const denominatorNumber = 1;
  const denominatorUnits = ["hour"];
  const rateMeasurement = [numeratorNumber, numeratorUnits, denominatorNumber, denominatorUnits];

  beforeEach(() => {
    //
  });

  test("should store a person's age in (Earth-)years and return it in Earth-years", () => {
    const yearsEarth = new Measurement(basicMeasurement);
    expect((yearsEarth.numerator).number).toEqual(50);
  });

  test("should store both a 'number' and 'units' (e.g., years) for a measurement", () => {
    const yearsEarth = new Measurement(basicMeasurement);
    expect((yearsEarth.numerator).number).toEqual(50);
    expect((yearsEarth.numerator).units).toEqual(["years"]);
  });

  test("should store number/units pairs for both a 'numerator' and 'denominator' to support rate-measurements (e.g., miles per hour)", () => {
    const yearsEarth = new Measurement(rateMeasurement);
    expect((yearsEarth.numerator).number).toEqual(60);
    expect((yearsEarth.numerator).units).toEqual(["miles"]);
    expect((yearsEarth.denominator).number).toEqual(1);
    expect((yearsEarth.denominator).units).toEqual(["hour"]);
  });
});

describe("findUnit", () => {
  
  test("should match input units to a unit and its factor from the database", () => {
    const testUnit = "minutes";
    const testMeasurement = new Measurement( [10, testUnit] );
    const foundUnit = testMeasurement.findUnit(testUnit);
    expect(foundUnit.factor).toEqual(60000);
  });
});

describe("convertUnit", () => {
  const unconvertedMeasurement = new Measurement( [120, ["miles"], 1, ["hour"]] );

  test("should convert an argued measurement to the units specified in an argued string", () => {
    const convertedMeasurement = unconvertedMeasurement.convertUnit(unconvertedMeasurement, "minutes");
    console.log(`
    *********************
    *********************
  
     The original measurement is: ${(unconvertedMeasurement.numerator).number} ${(unconvertedMeasurement.numerator).units} per ${(unconvertedMeasurement.denominator).number} ${(unconvertedMeasurement.denominator).units}
    The converted measurement is: ${(convertedMeasurement.numerator).number} ${(convertedMeasurement.numerator).units} per ${(convertedMeasurement.denominator).number} ${(convertedMeasurement.denominator).units}
  
    *********************
    *********************
    `);
    expect((convertedMeasurement.numerator).number).toEqual(1);
    expect((convertedMeasurement.numerator).units).toEqual(["miles"]);
    expect((convertedMeasurement.denominator).number).toEqual(1);
    expect((convertedMeasurement.denominator).units).toEqual(["minute"]);
  });
  
});