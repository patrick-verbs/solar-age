import Measurement from './Measurement.js';
export default

class Lifespan {

  constructor (lifeform, age) {
    let lifespan = lifeform.length * 10;
    const ageIsJustANumber = age;
    let difference = lifespan - ageIsJustANumber;
    let darWinner = false;
    if (difference < 0) {
      difference *= -1;
      darWinner = true;
    }
    lifespan = new Measurement( [ lifespan, ["earth years"] ] );
    const differential = new Measurement ( [ difference, ["earth years"] ] );
    return [lifespan, differential, darWinner];
  }
}