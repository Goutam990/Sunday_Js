// polymorphism
// Same methods in diffrent obj behaves diffrently
const obj1 = {
    printMyName : () => {
        console.log("hello i am obj1");
    }
}

const obj2 = {
    printMyName : () => {
        console.log("hello i am obj2");
    }
}

// Method behavior will depends on the object's context it is executing with.x
obj1.printMyName()
obj2.printMyName()

// -----------------------------

// Prototype based Inheritance
const Human = {
    Nam : "Goutam",
    Kaam : () => {
        console.log("Software developer");
    }
};
let person = {};
person = Object.setPrototypeOf(person,Human);  //person obj inherits the property of Human obj. person Human s inherit kr rha property

console.log(person.Nam);
person.Kaam();

