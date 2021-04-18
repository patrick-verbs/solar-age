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
  
  test("should convert a simple measurement to the units specified in an argued string", () => {
    const mercuryAge = new Measurement( [1, ["Mercurial year"]] );
    const venusAge = new Measurement( [1, ["Venus year"]] );
    const marsAge = new Measurement( [1, ["Martian year"]] );
    const jupiterAge = new Measurement( [1, ["Jupiter year"]] );

    expect(mercuryAge.convertUnit("Julian years").numerator.number).toEqual(0.2408459958932238);
    expect(venusAge.convertUnit("Julian years").numerator.number).toEqual(0.6151900000000001);
    expect(marsAge.convertUnit("Julian years").numerator.number).toEqual(1.8808240930869267);
    expect(jupiterAge.convertUnit("Julian years").numerator.number).toEqual(11.862);
  });

  test("should convert a rate-measurement to the units specified in an argued string", () => {
    const unconvertedMeasurement = new Measurement( [120, ["miles"], 1, ["hour"]] );
    const convertedMeasurement = unconvertedMeasurement.convertUnit("minutes");
    
    expect((convertedMeasurement.numerator).number).toEqual(2);
    expect((convertedMeasurement.numerator).units).toEqual(["miles"]);
    expect((convertedMeasurement.denominator).number).toEqual(1);
    expect((convertedMeasurement.denominator).units).toEqual(["minute"]);
  });
  
});