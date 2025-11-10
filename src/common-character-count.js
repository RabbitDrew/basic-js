const { NotImplementedError } = require('../lib');

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

function getCommonCharacterCount(str1, str2) {
  let commonCount = 0;
  const str1Arr = Array.from(str1);
  const str2Arr = Array.from(str2);
  const commonChars = [];
  const charFrequency = {
    str1Freq: [],
    str2Freq: []
  };
  str1Arr.forEach(char => {
    if (str2Arr.includes(char) && !commonChars.includes(char)) {
      commonChars.push(char);
    }
  });
  commonChars.forEach(char => {
    const countInStr1 = str1Arr.filter(c => c === char).length;
    charFrequency.str1Freq.push(countInStr1);
    const countInStr2 = str2Arr.filter(c => c === char).length;
    charFrequency.str2Freq.push(countInStr2);
  });
  charFrequency.str1Freq.forEach((countInStr1, index) => {
    const countInStr2 = charFrequency.str2Freq[index];
    commonCount += Math.min(countInStr1, countInStr2);
  });

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
