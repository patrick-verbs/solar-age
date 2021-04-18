const UNITS = [
  // TIME UNITS
  {
    name: {
      singular: "millisecond",
      plural: "milliseconds",
      synonyms: ["ms", "millisecond", "milliseconds"],
    },
    factor: 1,
    paradigm: "time",
  },
  {
    name: {
      singular: "second",
      plural: "seconds",
      synonyms: ["s", "sec", "secs", "second", "seconds"],
    },
    factor: 1000,
    paradigm: "time",
  },
  {
    name: {
      singular: "minute",
      plural: "minutes",
      synonyms: ["min", "mins", "minute", "minutes"],
    },
    factor: 60 * 1000,
    paradigm: "time",
  },
  {
    name: {
      singular: "hour",
      plural: "hours",
      synonyms: ["h", "hr", "hrs", "hour", "hours"],
    },
    factor: 60 * 60 * 1000,
    paradigm: "time",
  },
  {
    name: {
      singular: "day",
      plural: "days",
      synonyms: ["day", "days"],
    },
    factor: 24 * 60 * 60 * 1000,
    paradigm: "time",
  },
  {
    name: {
      singular: "week",
      plural: "weeks",
      synonyms: ["wk", "week", "weeks"],
    },
    factor: 7 * 24 * 60 * 60 * 1000,
    paradigm: "time",
  },
  {
    name: {
      singular: "year",
      plural: "years",
      synonyms: ["yr", "yrs", "year", "years"],
    },
    factor: 365 * 24 * 60 * 60 * 1000,
    paradigm: "time",
  },
  {
    name: {
      singular: "average year",
      plural: "average years",
      synonyms: ["Gaussian yr", "Gaussian yrs", "Gaussian year", "Gaussian years", "gaussian yr", "gaussian yrs", "gaussian year", "gaussian years"],
    },
    factor: (365 * 24 * 60 * 60 * 1000) + 22196000,// an additional 6 hours, 9 minutes, 56 seconds
    paradigm: "time",
  },
  {
    name: {
      singular: "Julian year",
      plural: "Julian years",
      synonyms: ["Julian yr", "Julian yrs", "Julian year", "Julian years", "julian yr", "julian yrs", "julian year", "julian years", "astronomical year", "astronomical years", "astronomical yr", "astronomical yrs", "Earth-year", "Earth-years", "Earth year", "earth-year", "earth year", "Earth years", "earth years", "Earth yr", "earth yr", "avg yr", "avg year", "average yr", "average year"],
    },
    factor: 36525 * (24 * 60 * 60 * 10),// this is used in astronomy, e.g. light-years
    paradigm: "time",
  },
  {
    name: {
      singular: "Mercury-year",
      plural: "Mercury-years",
      synonyms: ["Mercury year", "Mercury years", "Mercury-year", "Mercury-years", "Mercurial year", "Mercurial years"],
    },
    factor: 87969 * (24 * 60 * 60), // 87.969 Earth-days = (87,969/1,000) * 1,000 * 24 * 60 * 60
    paradigm: "time",
  },
  {
    name: {
      singular: "Jupiter-year",
      plural: "Jupiter-years",
      synonyms: ["Jupiter year", "Jupiter years", "Jupiter-year", "Jupiter-years", "Jovian year", "Jovian years"],
    },
    factor: 11862 * (36525 * 24 * 6 * 6),
    paradigm: "time",
  },
  // DISTANCE UNITS
  {
    name: {
      singular: "inch",
      plural: "inches",
      synonyms: ["inch", "inch", "in"],
    },
    factor: 1,
    paradigm: "distance (United States)"
  },
  {
    name: {
      singular: "foot",
      plural: "feet",
      synonyms: ["foot", "feet", "ft"],
    },
    factor: 12,
    paradigm: "distance (United States)"
  },
  {
    name: {
      singular: "mile",
      plural: "miles",
      synonyms: ["mile", "miles", "mi"],
    },
    factor: 5280 * 12,
    paradigm: "distance (United States)"
  },
  // CURRENCY UNITS
  {
    name: {
      singular: "cent",
      plural: "cents",
      synonyms: ["cent", "cents"],
    },
    factor: 1,
    paradigm: "currency (United States)",
  },
  {
    name: {
      singular: "USD",
      plural: "USD",
      synonyms: ["USD", "dollar", "dollars", "$"],
    },
    factor: 100,
    paradigm: "currency (United States)",
  }
]

export default UNITS;