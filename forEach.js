const friends = ['Tom hanks', 'Tom cruise', 'Tom robinson', 'Tom solaiman'];
friends.forEach(friend => console.log(friend));

const products = [
    {id: 1, name: 'Laptop', price: 80000}, 
    {id: 2, name: 'Mobile', price: 120000}, 
    {id: 3, name: 'Watch', price: 34000}, 
    {id: 4, name: 'tablet', price: 40000},
];
products.forEach(product => console.log(product.name));
products.forEach(product => console.log(product.price));