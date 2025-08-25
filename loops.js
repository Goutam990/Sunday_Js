const animal = {
    Nam : "kiioo",
    breed : () => {console.log("Unique breed dog")},
    Population : 132323123

};


// Yeh loop object ke har property name ke liye ek baar chalta h.


for(let i in animal){
    console.log("Property name :- ",i);
}

for(let j in animal){
    console.log("key ki help s value access :- " + animal[j] );
}


// Note -  for in loop us object ki apni properties ko hi bss iterate nahi krta,
// balki uske prototype chain mein jitni bhi properties available hain, 
// un sabhi ko bhi include karta h. Iska matlab yeh hai ki m
// inherited properties ko bhi access kar sakte hain
/*
const Human = {
    Nam : "Goutam",
    Kaam : () => {
        console.log("Software developer");
    }
};
let person = {};
person = Object.setPrototypeOf(person,Human);  //person obj inherits the property of Human obj. person Human s inherit kr rha property

for(let i in person){
    console.log("property name -",i);   //"Nam" aur "kaam" both property name will be printed.
    
}
*/

// ----------------------
// for of loop - iterable objects(jese - array aur string) ki values ko directly access krne ke liye without need of index.
let arr = [12,13,14,15,16,17,18,19];
for(let i of arr){
    console.log(i);
}

let str = "Goutam"
for(let character of str){
    console.log(character);
}

