import Lifespan from '../src/js/Lifespan.js';


describe("constructor", () => {

  // test("should create a lifespan equal to 10 times the number of characters in an input string", () => {
  //   const lifespan = new Lifespan("Godzilla");
  //   expect((lifespan.numerator).number).toEqual(80);
  // });

  test("should create a lifespan equal to 10 times the number of characters in an input string", () => {
    const lifespan = new Lifespan("Godzilla", 1000);
  
    expect(lifespan.numerator.number).toEqual(920);
  });
});