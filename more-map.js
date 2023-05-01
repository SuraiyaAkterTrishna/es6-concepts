const numbers = [12, 24, 53, 64, 54, 89];
const half = numbers.map(number => number / 2);
// console.log(half);
const thirds = numbers.map(number => number / 3);
// console.log(thirds);

const friends = ['Tom hanks', 'Tom cruise', 'Tom robinson', 'Tom solaiman'];
const firstLetter = friends.map(friend => friend[0]);
const nameLength = friends.map(friend => friend.length);
console.log(nameLength);

const products = [
    {id: 1, name: 'Laptop', price: 80000}, 
    {id: 2, name: 'Mobile', price: 120000}, 
    {id: 3, name: 'Watch', price: 34000}, 
    {id: 4, name: 'tablet', price: 40000},
];
const productName = products.map(product => product.name);
const price = products.map(product => product.price);
console.log(price);