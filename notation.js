const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
};
const math = student.marks.math; //dot notation
const chemistry = student["marks"]["chemistry"]; //bracket notation
const subject = "physics";
const physics = student.marks[subject];
console.log(physics);