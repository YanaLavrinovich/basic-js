const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const mapWithCountForS1 = getMapWithCount(s1);
  const mapWithCountForS2 = getMapWithCount(s2);

  return Object.values(findIntersectionMaps(mapWithCountForS1, mapWithCountForS2)).reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
}

function getMapWithCount(s) {
  let mapWithCount = {};
  [...s].forEach((symbol) => {
    if (mapWithCount[symbol] !== undefined) {
      mapWithCount[symbol]++;
    } else {
      mapWithCount[symbol] = 1;
    }
  });

  return mapWithCount;
}

function findIntersectionMaps(map1, map2) {
  let intersection = {};
  for (const value in map1) {
    if (map2[value] !== undefined) {
      intersection[value] =
        map2[value] < map1[value] ? map2[value] : map1[value];
    }
  }
  return intersection;
}

module.exports = {
  getCommonCharacterCount,
};
