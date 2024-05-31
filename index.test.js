const sumEvenNumbers = require("./index");

test("sumEvenNumbers renvoie la somme correcte pour un tableau de nombres mixtes", () => {
  expect(sumEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
});

test("sumEvenNumbers renvoie 0 pour un tableau sans nombres pairs", () => {
  expect(sumEvenNumbers([1, 3, 5, 7])).toBe(0);
});

test("sumEvenNumbers renvoie la somme d'un tableau contenant uniquement des nombres pairs", () => {
  expect(sumEvenNumbers([2, 4, 6, 8])).toBe(20);
});

test("sumEvenNumbers renvoie 0 pour un tableau vide", () => {
  expect(sumEvenNumbers([])).toBe(0);
});
