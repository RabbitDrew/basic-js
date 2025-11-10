const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let result = 0;
  const modernActivity = 15;
  const halfLifePeriod = 5730;
  let value = undefined;
  if (typeof sampleActivity === "string") {
    value = Number(sampleActivity);
  }
  if (isNaN(value) || value <= 0 || value > modernActivity) {
    return false;
  } else {
    let k = 0;
    k = 0.6931471805599453 / halfLifePeriod;
    const lnValue = Math.log(modernActivity / value);
    result = Math.ceil(lnValue / k);
  }
  return result;
}

module.exports = {
  dateSample
};
