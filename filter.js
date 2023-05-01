const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);
const tiny = numbers.filter(number => number < 10);
console.log(tiny);
const even = numbers.filter(number => number % 2 === 0);
console.log(even);