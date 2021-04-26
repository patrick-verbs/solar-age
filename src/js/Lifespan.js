import Measurement from './Measurement.js';
export default

function lifespan(lifeform, age) {
  let lifespan = lifeform.length * 10;
  const ageIsJustANumber = age;
  let difference = lifespan - ageIsJustANumber;
  let exceedsLifespan = false;

  // The difference between the two values (age and expected lifespan) is always the number we're looking for
  // It's only a matter of which number is higher, resulting in a negative number
  if (difference < 0) {
    difference *= -1;
    exceedsLifespan = true;
  }
  lifespan = new Measurement( [ lifespan, ["earth years"] ] );
  const differential = new Measurement ( [ difference, ["earth years"] ] );
  
  // returns the individual's projected lifespan ("lifespan"), the difference between that and their current age ("differential"),
  // and whether that difference indicates the years remaining or the years exceeded (boolean "exceedsLifespan")
  return [lifespan, differential, exceedsLifespan];
}