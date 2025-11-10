const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let frequencies = [];
  let currentCount = 1; 
  let uniqueChars = ""; 

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let nextChar = str[i + 1];

    if (currentChar === nextChar) {
      currentCount++; 
    } else {
      frequencies.push(currentCount); 
      currentCount = 1; 
      uniqueChars += currentChar;  
    }
  }
  let result = Array.from(uniqueChars)
    .map((char, index) => {
      if (frequencies[index] > 1) {
        return frequencies[index].toString() + char;
      } else {
        return char;
      }
    })
    .join("");

  return result;
}

module.exports = {
  encodeLine
};
