const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let comapreArr = [];
  let numArr = Array.from(n.toString());
  for (let i = 0; i < numArr.length; i++) {
    let tempArr = numArr.slice();
    tempArr.splice(i, 1);
    comapreArr.push(parseInt(tempArr.join("")));
  }

  result = Math.max(...comapreArr);
  return result;
}


module.exports = {
  deleteDigit
};
