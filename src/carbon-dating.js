const { NotImplementedError } = require("../extensions/index.js");

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

// ln(N/N0) / k = t
// t1/2=0.693 / k
function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string") {
    return false;
  }

  let activity = sampleActivity.includes(".")
    ? Number.parseFloat(sampleActivity)
    : Number.parseInt(sampleActivity);

  if (
    typeof activity != "number" ||
    Number.isNaN(activity) ||
    Math.sign(activity) == -1 ||
    activity <= 0 ||
    activity >= 15
  ) {
    return false;
  }

  if (activity >= MODERN_ACTIVITY) {
    return false;
  }

  const time =
    Math.log(activity / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD);

  return Math.ceil(Math.abs(time));
}

module.exports = {
  dateSample,
};
