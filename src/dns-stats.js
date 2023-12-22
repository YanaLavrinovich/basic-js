const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let mapDNS = {};
  domains.forEach((domain) => {
    unionDNSInMap(mapDNS, getListDomain(domain));
  });
  return mapDNS;
}

function getListDomain(domain) {
  let reverseDomain = String(domain).split(".").reverse();
  let result = {};
  while (reverseDomain.length > 0) {
    let tempDomain = "." + reverseDomain.join(".");
    result[tempDomain] = 1;
    reverseDomain.pop();
  }
  return result;
}

function unionDNSInMap(mapDNS, newListDomain) {
  for (let value in newListDomain) {
    if (mapDNS[value] !== undefined) {
      mapDNS[value] = mapDNS[value] + 1;
    } else {
      mapDNS[value] = 1;
    }
  }
}

module.exports = {
  getDNSStats,
};
