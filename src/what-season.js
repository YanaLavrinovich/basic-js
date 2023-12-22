const { NotImplementedError } = require("../extensions/index.js");

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

  if (checkDateIsFake(date)) {
    throw new Error("Invalid date!");
  }

  const validDate = new Date(date);
  const month = validDate.getMonth();
  let season = "Invalid date!";

  switch (month) {
    case 0:
    case 1:
    case 11: {
      season = "winter";
      break;
    }
    case 2:
    case 3:
    case 4: {
      season = "spring";
      break;
    }
    case 5:
    case 6:
    case 7: {
      season = "summer";
      break;
    }
    case 8:
    case 9:
    case 10: {
      season = "fall";
      break;
    }
  }
  return season;
}

function checkDateIsFake(date) {
  if (!(date instanceof Date)) {
    return true;
  }

  try {
    date.getDate();
  } catch {
    return true;
  }

  let year1 = date.toString().slice(11, 15);
  if (year1.startsWith(0)) {
    year1 = year1.slice(1, year1.length);
  }
  const year2 = date.getFullYear().toString();
  if (year1 !== year2) {
    return true;
  }

  return false;
}

module.exports = {
  getSeason,
};
