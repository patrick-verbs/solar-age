import Measurement from './Measurement.js';
export default

class Lifespan {

  constructor (lifeform, age) {
    const lifespan = lifeform.length * 10;
    console.log(`
    *****
    Measurement numerator is: ${lifespan} years
    *****
    `);
    const ageIsJustANumber = age;
    if (lifespan > ageIsJustANumber) {
      const differential = new Measurement ( [ (lifespan - ageIsJustANumber), ["earth years"] ] );
      return differential;
    } else if (ageIsJustANumber >= lifespan) {
      const differential = new Measurement ( [ (ageIsJustANumber - lifespan), ["earth years"] ] );
      return differential;
    }
  }
}