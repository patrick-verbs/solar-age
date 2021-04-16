import storeMeasurement from '../src/js/storeMeasurement.js';

describe("storeMeasurement", () => {
  const measurement1 = 33;

  beforeEach(() => {
    //
  });


    // the simplest behavior... 
  test("should store a person's age in (Earth-)years and return it in Earth-years", () => {
    // 
    const yearsEarth = new storeMeasurement(measurement1);
    expect(yearsEarth.measurement).toEqual(33);
  });

  // test("should check whether an input measurement is a number", () => {
  //   // 
  //   const yearsEarth = new storeMeasurement(measurement1);
  //   console.log(`
  //   *********************
  //   *********************

  //   The argued value is: ${measurement1}
  //   The stored value is: ${yearsEarth.measurement}

  //   *********************
  //   *********************
  //   `)
  //   expect(yearsEarth.measurement).toEqual(33);
  // });

});