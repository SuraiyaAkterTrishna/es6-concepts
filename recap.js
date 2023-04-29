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
