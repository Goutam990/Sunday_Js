// call()
// Build-in method h. allows me to run a function immediately. allow to use "this" value
// nd set arguments too.
/*
const person = {
    Nam : "Mr.John From America",
    greetings : function () {
        console.log( `Greeting from my company ${this.Nam}`);
    }
};
person.greetings();
person.greetings.call(person);
*/
// Note : - Arrow fucntion --> "this" value refers to the surronding's "this" value.
// surronding "this" value means -> undefined(in strict mode)
//  window (in browser)

// ==============Basic Example======================================
/*
const person1 = {
    FullName : function()  {
        return this.firstName + " " + this.LastName; //call() method ki vjh s ab "this" refers to 2nd object.
    }
};

const person2 = {
    firstName : "Goutam",
    LastName :  "Tiwari"
};

console.log( person1.FullName.call(person2) ); //call(Jo_secondObjpassKiya) "this" will now point to second object.
*/
// =========================How this Works==============

//  Without call() - this refers to the owner object. in which method is acutally exists
// Normal case - this will refer to owner object
/*
const person3 = {
    firstName : "Vawan Putra",
    LastName  : "Hanuman",
    FulllName : function()  {
        return this.firstName + " " + this.LastName; //call() method ki vjh s ab "this" refers to 2nd object.
    }
};

console.log(person3.FulllName());    //Vawan Putra Hanuman


const person4 = {
    firstName : "Maruti",
    LastName :  "Nandan"
};
// With call() - we can change what 'this' refers to
console.log( person3.FulllName.call(person4) ); // Maruti Nandan
/*
/*
*/

// ===================Using call() with Arguments======================

const Customer = {
    CustomerName : function(BestMovie){
        return this.fName + " " + this.LName + " " + BestMovie;
    }
};

const Customer2 = {
    fName : "Chandu",
    LName  : "Champion"
}

console.log(Customer.CustomerName.call(Customer2, "BestMovie"));  //call() method with additional argu

// ===========================================================

function sayHii(msg){
    return msg + " " + this.name;
}

const p1 = {name : "poorush"};
const p2 = {name : "Hritik"};

// using same fucntion with diffrent objects
console.log(sayHii.call(p1, "Hello"));
console.log(sayHii.call(p2, "Hello"));




