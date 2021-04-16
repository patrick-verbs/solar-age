import Measurement from '../src/js/Measurement.js';

describe("Measurement", () => {
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

// test("should match input units to a unit from the database", () => {
//   const yearsEarth = new Measurement(rateMeasurement);
//   console.log(`
//   *********************
//   *********************

//   The argued value is: ${rateMeasurement[0]} ${rateMeasurement[1]} per ${rateMeasurement[2]} ${rateMeasurement[3]}
//   The stored value is: ${(yearsEarth.numerator).number} ${(yearsEarth.numerator).units} per ${(yearsEarth.denominator).number} ${(yearsEarth.denominator).units}

//   *********************
//   *********************
//   `)
//   expect((yearsEarth.numerator).number).toEqual(60);
//   expect((yearsEarth.numerator).units).toEqual("miles");
//   expect((yearsEarth.denominator).number).toEqual(1);
//   expect((yearsEarth.denominator).units).toEqual("hour");
// });

});