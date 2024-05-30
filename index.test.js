const sumEvenNumbers = require("./index");

test("sumEvenNumbers returns correct sum for an array of mixed numbers", () => {
  expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
});

test("sumEvenNumbers returns 0 for an array with no even numbers", () => {
  expect(sumEvenNumbers([1, 3, 5, 7])).toBe(0);
});

test("sumEvenNumbers returns the sum for an array with only even numbers", () => {
  expect(sumEvenNumbers([2, 4, 6, 8])).toBe(20);
});

test("sumEvenNumbers returns 0 for an empty array", () => {
  expect(sumEvenNumbers([])).toBe(0);
});
