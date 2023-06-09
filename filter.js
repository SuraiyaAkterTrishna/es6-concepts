const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);
const tiny = numbers.filter(number => number < 10);
console.log(tiny);
const even = numbers.filter(number => number % 2 === 0);
console.log(even);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

const expensive = products.filter(product => product.price > 40000);
console.log(expensive);
const cheapest = products.filter(product => product.price < 40000);
console.log(cheapest);