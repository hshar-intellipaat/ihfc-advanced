const person = {
    
    fname: "John",
    age: "14",

     greet(){
        console.log("Hello "+this.fname+". Your age is "+this.age);
    }
}

person.greet();

const car = {
    color: "red",

    brake(){
        console.log("The car is braking");
    },

    start(){
        console.log("The car has started");
    },

    getColor(){
        console.log("the car color is "+this.color);
    }
}

car.start();
car.getColor();
