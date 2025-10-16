class Person {
    constructor(fname, age) {
        this.fname = fname;
        this.age = age;
    }
    greet(){
        console.log("Hello "+this.fname+". Your age is "+this.age);
    }

}

const prateek = new Person("prateek", "14");
prateek.greet();