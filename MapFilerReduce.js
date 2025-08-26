// Map() method
// to create new array
// passing a fucntion as an argu --> individually hr ele m fucntion chlta h  aur new values return krta h 
// function will return new values for each element. 

let arr1 = [4,3,4,5,54,4];
let result = arr1.map( (element) => {   
      return element * 3;
});
console.log(result);

// Filter() method
// similar to map() method
// callback Fucntion ek condition dega jo element usko satisfy krengi chi new array m ayenge.

let arr2 = [23,24,80,83];
let result2 = arr2.filter( (element) => {
    return element % 2 === 0;
});
console.log(result2);      // even numbers [24,80]

// Reduce() method
// Reduce an array into single value.
// here fun have two argu
// 1. argu - accumulator -- hold intermediate values.
// 2. argu - current value --> used in every iteration
// function will be called on every element, nd finally returns a single value.

let arr3 = [1,2,3,4,5];
let result3 = arr3.reduce((sum, curr) => {    // sum - accumulator & curr - current value --> used in every interation.
     return sum + curr;
},0);
console.log(result3);    // 15



