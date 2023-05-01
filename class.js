// class declaration
class Instructor{
    name;
    designation = 'Web Instructor';
    team = 'Web Team';
    location;
    //constructor
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    //methods
    supportSession(time){
        console.log(`Start the support session at: ${time}`);
    };
    createQuiz(module){
        console.log(`Create quiz for the module: ${module}`);
    }
};
const aamir = new Instructor('Aamir', 'Mumbai'); //create object
console.log(aamir);
aamir.supportSession('9.00 am');
aamir.createQuiz(61);

const solaiman = new Instructor('Solaiman', 'Dhaka');
console.log(solaiman);