// object destructuring
// Extracting propeties of an object and assign it into a variable
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;
console.log(firstName);
console.log(lastName);

// ----------------------------------
// destructuring m missing properties ke liye default values set kr skte h
// let {firstName, lastName, city = "Seoni"} = person
console.log("next line");

// destucturing m m property ko new variable name ke sath aliase kr skta hu.
// jese firstName ko sirf name bhi kr skta hu 
let { firstName : Fname} = person
console.log(Fname);


// String destructuring
// String character ka unpacking
let MeraName = "Goutam"

//destructuring
let [m1,m2,m3,m4,m5,m6] = MeraName
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
console.log(m6);


// Array Destructuring
// Destructuring ka use krke m array ke elements ko apne variable m pick kr skta hu
// aur unko bad m apne code m use kr skta hu

const books = ["Power of now","5 am rule"]

//destructuring
let [book1, book2] = books
console.log("First book in books array will be-", book1);
console.log("Second book in books array will be-", book2);

// destructuring m comma lgakr array ke kuch ele ko skip kr skta hu
const arr = [1,2,3,4]

//destructuring - ek cooma dono ko alg krne vala h , aur baki do comma - skip ele vale h
let [first ,, ,Fourth] = arr
console.log(first);
console.log(Fourth);


// -----------------------------------------

// Array ka bhut common operation h
// kesi kash index pr jaunga aur value nikal lunga

const bulb = ["blue", "Green" , "Yellow"]

//destructuring
let {[0]:bluecolor , [1]:Greencolor } = bulb
console.log(bluecolor);

// ---------------------------------------------

// Rest property -- ek syntax h destructuring m use hota h 
// bachi hue values ko ek new Array m store krta h

const photography = ["cinematography", "animation", "GibliArt", "comicSeries"]

// destrcturing
let {cinematography, animation , ...restvalues} = photography
console.log(restvalues);

// -------------------------------------------
// usecase
// destructuring --> swap variables in js
let cat_name = "kio";
let dog_name = "kitty";

// des
[cat_name, dog_name] = [dog_name, cat_name]
console.log("swapped with cat name -- now dog name is " , dog_name);


