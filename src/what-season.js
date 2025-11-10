const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (date[Symbol.toStringTag] === "Date") {
    throw new Error("Invalid date!");
  }
  if (
    !(date instanceof Date) ||
    Object.prototype.toString.call(date) !== "[object Date]" ||
    isNaN(date.getTime())
  ) {
    throw new Error("Invalid date!");
  }
  const month = date.getMonth();
  const seasons = ["winter", "spring", "summer", "autumn"];
  const seasonMapping = [
    [11, 0, 1],
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
  ];
  for (let i = 0; i < seasonMapping.length; i++) {
    if (seasonMapping[i].includes(month)) {
      return seasons[i];
    }
  }
  return "Unable to determine the time of year!";
}

module.exports = {
  getSeason
};
