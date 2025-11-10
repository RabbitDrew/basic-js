const { NotImplementedError } = require('../lib');

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
  const totalDomains = domains.length;
  const dnsStats = {}; 
  const domainParts = [];
  domains.forEach((domain) => {
    let keyPart = "";
    for (let i = 0; i < domain.length; i++) {
      const char = domain[i];
      if (char !== ".") {
        keyPart += char;
      } else {
        domainParts.push(keyPart);
        keyPart = "";
      }
    }
    if (keyPart) {
      domainParts.push(keyPart);
    }
  });
  const reversedParts = domainParts.reverse();
  const uniqueParts = Array.from(new Set(reversedParts));
  let dnsKey = "";
  uniqueParts.forEach((part, index) => {
    dnsKey += "." + part;
    console.log(dnsKey);
    if (index >= 0 && index <= 1) {
      dnsStats[dnsKey] = totalDomains;
    } else {
      dnsStats[dnsKey] = 1;
    }
  });

  return dnsStats;
}

module.exports = {
  getDNSStats
};
