import storeMeasurement from '../src/js/storeMeasurement.js';

describe("storeMeasurement", () => {
  const number = 33;
  const units = "years";

  beforeEach(() => {
    //
  });


    // the simplest behavior... 
  test("should store a person's age in (Earth-)years and return it in Earth-years", () => {
    // 
    const yearsEarth = new storeMeasurement(number);
    expect(yearsEarth.number).toEqual(33);
  });

  test("should store both a 'number' and 'units' (e.g., years) for a measurement", () => {
    // 
    const yearsEarth = new storeMeasurement(measurement1);
    console.log(`
    *********************
    *********************

    The argued value is: ${number} ${units}
    The stored value is: ${yearsEarth.number} ${yearsEarth.units} 

    *********************
    *********************
    `)
    expect(yearsEarth.number).toEqual(33);
    expect(yearsEarth.number).toEqual("years");
  });

});