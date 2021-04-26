import Lifespan from '../src/js/Lifespan.js';


describe("constructor", () => {

  test("should return an array containing a 'lifespan' equal to 10 times the number of characters in an input string", () => {
    const godzilla = new Lifespan("Godzilla", 1000);
  
    expect(godzilla[0].numerator.number).toEqual(80);
  });

  test("should return an array containing a 'lifespan' followed by the difference between the lifespan and the lifeform's age", () => {
    const godzilla = new Lifespan("Godzilla", 1000);
  
    expect(godzilla[1].numerator.number).toEqual(920);
  });

  test("should return an array containing a 'lifespan', the difference between it and a lifeform's age, and a boolean set to 'true' if the lifeform has reached or exceeded its lifespan", () => {
    const godzilla = new Lifespan("Godzilla", 1000);
    const frodo = new Lifespan("Frodo Baggins", 33);
  
    // Godzilla has exceeded their life expectancy, so this returns "true"
    expect(godzilla[2]).toEqual(true);

    // Frodo has not reached his life expectancy
    expect(frodo[2]).toEqual(false);
  });
});