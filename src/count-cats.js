const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cat = "^^";
  let countCats = 0;
  matrix.forEach((line) => {
    const catsArr = line.filter((el) => {
      if (typeof el === "string" && el === cat) {
        return el;
      }
    }).length;
    countCats += catsArr;
  });

  return countCats;
}
module.exports = {
  countCats
};
