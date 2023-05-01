const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const five = numbers.find(number => number % 5 === 0);
const allFive = numbers.filter(number => number % 5 === 0);
console.log(five);
console.log(allFive);

const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 30000 },
    { id: 4, name: 'tablet', price: 23000 },
];
const cheapest = products.find(product => product.price < 40000);
console.log(cheapest);