import Example from '../src/js/example.js';

describe('Example', () => {
  //declare variables
  const number1 = 2;
  const number2 = 3;

  beforeEach(() => {
    //do stuff
  });

  test ("should construct an 'Example' object with an argued number as a property", () => {
    const firstExample = new Example(number1);
    const secondExample = new Example(number2);

    console.log("The 'firstExample' object's 'number' property: " + firstExample.number);
    console.log("The 'secondExample' object's 'number' property: " + secondExample.number);

    expect(firstExample.number).toEqual(number1);
    expect(secondExample.number).toEqual(number2);
  });
});