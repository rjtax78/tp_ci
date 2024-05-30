function sumEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}

module.exports = sumEvenNumbers;
