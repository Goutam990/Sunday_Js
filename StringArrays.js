// String - treet as Objects in JS
// internally treated as an object
// Array & string both are iterable objects in js

// 1. String

// .charAt() method - return element at any specific index
let str = "TiwariJii"
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));

console.log("Using for of loop to directly access the values");


for(let i of str){
    console.log(i);
}

// .concat() method

let str2 = "Aakshay";
let str3 = "Kumar";
let str4 = "Actor"
console.log(str2 + " " +  str3);

console.log(str2.concat(str3));

// combining multiple string at once 
console.log(`My name is ` + str2.concat(" ", str3 , " " , `I am a ${str4}.`))


// includes() method 
// checks string m koi specific substring exist karti h ya nhi.

let str5 = "Hello Daddy";
console.log(str5.includes("Daddy"));  // "true"


// indexOf() method kisi substring ka phla index return karta h. 
let str6 = "Goutam Tiwari Name H "  // "7" = T
console.log(str6.indexOf("Tiwari"));  // "7" 

// replace() phli occurance ko replace krne ke liye
// replaceAll() sari occurance ko replace krne ke liye

let str7 = "I like to play Karate & Karate";
let newStr7 = str7.replace("Karate","Vollyball");
console.log(newStr7);

// replaceAll()
let str8 = "I like to play Karate & Karate";
let newStr8 = str8.replaceAll("Karate","Vollyball"); 
console.log(newStr8);


// slice() method -- return a substring - (startingIndexIncluded, endingIndexExcluded)
let str9 = "iceCream";
console.log(str9.slice(0,3));


// split () method
console.log(str9.split("e"));  // [ 'ic' ,  'Cr' , 'am' ] array m convert / split krdeti h 

// Har character ko bhi split kr skte h
console.log("HYYEveryone".split(""));


// toUpperCase() aur toLowerCase()
console.log("hello".toUpperCase());
console.log("HELLO".toLowerCase());


// ==========================================

// 2. Array
// To Store multiple values.
// values can be of any type

let arr = [ 1,"GT" , [90,99] ];

// push() - method -> add element at end
arr.push(100);
console.log(arr);  // [1,"GT",[90,99],100]

// pop() - remove last element
let arr2 = [1,2,3,[2,3,4]];
arr2.pop();
console.log(arr2);   // [1,2,3]

// shift() - remvoes 1st element
let arr3 = ["hello","Bhaiya"];
arr3.shift();
console.log(arr3);   // ['Bhaiya']

// unshift() - add element to starting of array
let arr4 = [ [1,2] , {address : "vijayChowk"} ];
arr4.unshift(["Goutam"]);
console.log(arr4);    // "Goutam" will be added in 1st block - 0th index

// slice() - extract a portion of an array.
let arr5 = ["Lamborghini", "Jaguar" , "BMW"]
console.log(arr5.slice(1));   // 2nd block and also further blocks
console.log(arr5.slice(0,1));  // 0 - included and 1 - excluded


// splice() - Add and remove element from an array.
// 2 argu lega 
// phla argu - konse block s delete krna start krna h - index number of that block
// dusra argu - us block s age ke further kitne element htane h (1 ya 2)
let arr6 = [1,2,34,4,5,6];
arr6.splice(2,1);
console.log(arr6);  //[ 1, 2, 4, 5, 6 ]


// Splice() method ka use karke m array m elements add bhi kar sakta hu.
let arr7 = ["Potato", "Tomato" , "Chilly", "Garlic"];

// now agr mujhe Chilly ke bad ladyfinger insert krna h aur kuch remove bhi ni krna
// then
arr7.splice(3,0,"ladyfinger");   // 4th block new element added , without deleting any other element
console.log(arr7);





