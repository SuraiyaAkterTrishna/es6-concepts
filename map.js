const numbers = [10, 20, 30, 40, 50, 60];

function getDouble(numbers){
    const output = [];
    for (const number of numbers) {
        const doubled = number * 2;
        output.push(doubled);
    }
    return output;
}


const getTriple = numbers => {
    const output = [];
    for (const number of numbers) {
        const tripled = number * 3;
        output.push(tripled);
    }
    return output;
}

const getQuadruple = numbers => numbers.map(number => number * 4);

const result = getQuadruple(numbers);
console.log(result);
