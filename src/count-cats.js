module.exports = function countCats(matrix) {
  return matrix.reduce((acc, arr) => {
    return acc + arr.reduce((acc, el) => {
      if (el === '^^') acc++;
      return acc;
    }, 0);
  }, 0)
};
