export default function 

storeMeasurement(measurement) {
  this.numerator = {
    number: measurement[0],
    units: measurement[1],
  }
  if (measurement.length === 4) {
    this.denominator = {
      number: measurement[2],
      units: measurement[3],
    }
  }
}