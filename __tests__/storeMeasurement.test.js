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
    expect(storeMeasurement.measurement).toEqual(33);
  });

});