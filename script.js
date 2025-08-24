// // Dom manupulation
// // build-in methods in js to do Dom manupulation.

// // to find element
// document.getElementById(goutam)
// document.querySelector(selector)

// // to change elements
// element.textContent
// element.innerText

// // Modify css properties
// element.style.propertyName

// // handle user interaction 
// // document.addEventListener(event,function,useCapture)


// const hello = () => {console.log("Hello")}
// const sayGoodBye = () => {console.log("GoodBye")}
// hello()
// sayGoodBye()


// Goodbye!! will be printed 
// then Hello fucntion will run just after 3 seconds
//  setTimeout function is setTimeout, 
// followed by parentheses. Inside the parentheses, you provide a function to execute and then the time in milliseconds to wait before executing it.

// const hello = () => {
//     setTimeout(function(){
//         console.log("Hello");
//     },3000);
// }

// const sayGoodBye = () => {
//     console.log("Goodbye!!");
// }
// hello()
// sayGoodBye()

// ---------------------------------------------------------------
// Run immediately after hello ,then that is called callback
// GoodBye fuction will be passed as an argu to hello fucntion

// const hello = (callback) => {
//         console.log("Hello");
//         callback();             // content will be printed
//         console.log(callback); // body will be printed 
        
// }

// const sayGoodBye = () => {
//     console.log("Goodbye!!");
// }

// hello(sayGoodBye)


// ----------------------------------------------------------
// fucntion --> funciton --> fucntion -- looks messy -- called as "callback Hell"
// To solve this messiness .. promises comes into the stage.
// promises --> clear from its name--> it promises the work will definetely be done in future for sure.

// const hello = () => {
//     return new Promise((resolve,reject) => {
//         console.log("Hello Bhai ...");
//         resolve(); // indicating kam ho gya 
//     });
// };
// const GoodBye = () => {
//     console.log("GoodBye bhai..");  
// };

// hello()
//       .then(GoodBye)
//       .catch((err) => {console.log("error h kuch",err);
//       });


// -------------------------------------------
// again some people can create a huge link by .then . then .then
// solution is aysn aur await
// It helps in running asynchornous fucntion synchornously.
// both works together. Meaningless if exist individually.

// callback hell  of (.then) method will be eliminated by using asyn await

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 done"), 500);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 done"), 500);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 3 done"), 500);
  });
}

step1()
  .then((value) => {
    console.log(value);
    return step2();
  })
  .then((value) => {
    console.log(value);
    return step3();
  })
  .then((value) => {
    console.log(value);
    console.log("All steps completed!");
  })
  .catch((error) => console.error("Error:", error));

// asyn - it will always return a promise to the function.

// await - it will not run the asyn function until we get a promise
// from another callable function.

// async function runSteps() {

// try {

// const value1 = await step1(); console.log(value1);

// const value2 = await step2(); console.log(value2);

// const value3 = await step3(); console.log(value3);

// console.log(" All steps completed!"); } catch (error) { console.error("X Error:", error);

// }

// }

// runSteps();