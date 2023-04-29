// 1. var, let, const 
// breakup with var 
const numbers = [10, 20, 30, 40, 50];
let salary = 12000;
salary = 15000;

// 2. default parameter for function
function calculateSalary(salary, tax = 0.25, bonus = 2000){
    const remaining = salary - salary * tax;
    const totalSalary = remaining + bonus; 
    return totalSalary;
}

//default parameter for arrow function
const income = (s, t, b = 1000) => {
    const remainingSalary = s - s * t;
    const total = remainingSalary + b;
    return total;
}
const myIncome = income(10000, 0);
console.log(myIncome);

// 3. template string
const elementHTML = `
    <div>
        <h1>Name: </h1>
        <p>Address: </p>
        <p>Salary: ${calculateSalary(5000, 0, 1000)}</p>
        <p>Others: ${numbers[2]}</p>
    </div>
`;

// 4. Arrow function 
const doubleIt = x => x * 2;
const calculateSalary2 = (salary , tax , bonus) => salary - salary * tax + bonus;

// 5. spread operator
const friendsAge = [11, 22, 33, 44, 55, 66];
const newAges = [...friendsAge, 77, 88, 99];

// 6. destructuring 
const {x, y, z} = {x: 45, y: 12, z: 53, name: 'Abul'};
const [a, b, c, ...r] = [12, 34, 53, 64, 76];