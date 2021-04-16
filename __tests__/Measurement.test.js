import Measurement from '../src/js/Measurement.js';
import UNITS from '../src/js/db_units.js';

describe("constructor", () => {
  const number = 33;
  const units = "years";
  const basicMeasurement = [number, units];

  const numeratorNumber = 60;
  const numeratorUnits = "miles";
  const denominatorNumber = 1;
  const denominatorUnits = "hour";
  const rateMeasurement = [numeratorNumber, numeratorUnits, denominatorNumber, denominatorUnits];

  beforeEach(() => {
    //
  });

  test("should store a person's age in (Earth-)years and return it in Earth-years", () => {
    const yearsEarth = new Measurement(basicMeasurement);
    expect((yearsEarth.numerator).number).toEqual(33);
  });

  test("should store both a 'number' and 'units' (e.g., years) for a measurement", () => {
    const yearsEarth = new Measurement(basicMeasurement);
    expect((yearsEarth.numerator).number).toEqual(33);
    expect((yearsEarth.numerator).units).toEqual("years");
  });

  test("should store number/units pairs for both a 'numerator' and 'denominator' to support rate-measurements (e.g., miles per hour)", () => {
    const yearsEarth = new Measurement(rateMeasurement);
    expect((yearsEarth.numerator).number).toEqual(60);
    expect((yearsEarth.numerator).units).toEqual("miles");
    expect((yearsEarth.denominator).number).toEqual(1);
    expect((yearsEarth.denominator).units).toEqual("hour");
  });
});

describe("findUnit", () => {
  const testUnit = "minutes";

  test("should match input units to a unit and its factor from the database", () => {
    const testMeasurement = new Measurement( [10, testUnit] )
    const foundUnit = testMeasurement.findUnit(testUnit);
    console.log(`
    *********************
    *********************
  
    The searched unit-type is: ${testUnit}
       The found unit-type is: ${foundUnit}, with a multiplication factor of ${foundUnit.factor}
  
    *********************
    *********************
    `);
    expect(foundUnit.factor).toEqual(60000);
  });
  
});