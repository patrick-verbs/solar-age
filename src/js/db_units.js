const UNITS = [
  // TIME UNITS
  {
    synonyms: ["ms", "millisecond", "milliseconds"],
    factor: 1,
    paradigm: "time",
  },
  {
    synonyms: ["s", "sec", "secs", "second", "seconds"],
    factor: 1000,
    paradigm: "time",
  },
  {
    synonyms: ["min", "mins", "minute", "minutes"],
    factor: 60 * 1000,
    paradigm: "time",
  },
  {
    synonyms: ["h", "hr", "hrs", "hour", "hours"],
    factor: 60 * 60 * 1000,
    paradigm: "time",
  },
  {
    synonyms: ["day", "days"],
    factor: 24 * 60 * 60 * 1000,
    paradigm: "time",
  },
  {
    synonyms: ["wk", "week", "weeks"],
    factor: 7 * 24 * 60 * 60 * 1000,
    paradigm: "time",
  },
  {
    synonyms: ["yr", "yrs", "year", "years", "Earth-year", "earth-year"],
    factor: 365 * 24 * 60 * 60 * 1000,
    paradigm: "time",
  },
  {
    synonyms: ["Gaussian yr", "Gaussian yrs", "Gaussian year", "Gaussian years", "gaussian yr", "gaussian yrs", "gaussian year", "gaussian years", "Earth-year", "Earth year", "earth-year", "earth year", "Earth years", "earth years", "Earth yr", "earth yr", "avg yr", "avg year", "average yr", "average year"],
    factor: (365 * 24 * 60 * 60 * 1000) + 22196000,// an additional 6 hours, 9 minutes, 56 seconds
    paradigm: "time",
  },
  {
    synonyms: ["Mercury year", "Mercury years", "Mercury-year", "Mercury-years", "Mercurial year", "Mercurial years"],
    factor: 87969 * (24 * 60 * 60) // 87.969 Earth-days = (87,969/1,000) * 1,000 * 24 * 60 * 60
    paradigm: "time",
  }
  // CURRENCY UNITS
  {
    synonyms: ["cent", "cents"],
    factor: 1,
    paradigm: "currency (United States)",
  },
  {
    synonyms: ["USD", "dollar", "dollars", "$"],
    factor: 100,
    paradigm: "currency (United States)",
  }
]

export default UNITS;