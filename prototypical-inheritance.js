class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    //method
    provideFeedback(){
        console.log(`${this.name} Thank you for your precious feedback`);
    }
}
class Instructor extends TeamMember{
    designation = 'Web Instructor';
    team = 'Web Team';
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`Start the support session at: ${time}`);
    };
    createQuiz(module){
        console.log(`Create quiz for the module: ${module}`);
    }
};
class Developer extends TeamMember{
    designation = 'App Developer';
    team = 'Developer Team';
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the: ${feature}`);
    };
    release(version){
        console.log(`Please release the version: ${version}`);
    }
};
class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos';
    team = 'Job Placement';
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(resume){
        console.log(`Please provide the: ${resume}`);
    };
    prepareStudent(prepare){
        console.log(`Please prepare the student: ${prepare}`);
    }
};

const alia = new Instructor('Alio Bhatt', 'Mumbai');
console.log(alia);

const bipasha = new Developer('Bipasha Bashu', 'Delhi', 'React');
console.log(bipasha);

const katrina = new JobPlacement('Katrina Kaif', 'Hydrabad', 'Western');
console.log(katrina);
katrina.provideFeedback();