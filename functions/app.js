
//  if function takes argument and return value
//  and it is not depended on outer environment
//  then its PURE Function


// const a = function (a) {
//     alert(a)
// };

// const b = a;

// // alert(a('asd'))
// alert(b('aaa'))

//==============================

// // Callbacks
// function askQue(ques, yes, no) {
//     (confirm(ques)? yes(): no());
// }

// function showYes() {
//     alert('yes yes')
// }


// function showNo() {
//     alert('no no no')    
// }

// // askQue('check calls ?', showYes, showNo);


// //==============================

// setTimeout(function () {
//     askQue('hey yu', showYes, showNo)
// }, 1000)

// =======================================

// FUNCTIONS DECLARATION
// functions delcarations are hoisted to the top

// functions delcarations are initialized by javascript
// earlier


// showMsg('showing the msg');

// function showMsg(msg) {
//     alert(msg);
// }

// =========================
// FUNCTION EXPRESSIONS

// Function declaration by expression.
// Here by = sign

// Here function is as a value, just like number, or string

// functions expressions are not hoisted to the top

// functions expressions are not initialized earlier

// they are initialized at when execution reaches to that line


// showMsg2('asdasd'); ==> Error

// let showMsg2 = function (msg) {
//     alert(msg)
// };


// ======================

//  func declarations are only available to
//  block of code or inside the block only


// if(true){
//     function temp(tempArg1) {
//         alert(tempArg1);
//     }
//     temp("asda");
// }

// temp("asda12323");
// function temp(asd) {
//     alert(asd)
// }

//  if we want to use that code outside
//  block of code then we can use fun  expressions

// const age = 16; // take 16 as an example

// if (age < 18) {
//   welcome("1");              
  
//   const welcome = function (prm) {
//     console.log(prm)
//   }
  
//   welcome("2");               

// } else {

// }


// welcome("3");

//console.log(welcome);

// ==============================

// let addAB = (a, b) => a+b;
// let addAB2 = (a, b) => { return a+b };
// let addAB3 = a => a*a;

// alert(addAB2(33,2));
// alert(addAB3(3));

// let a = 5;
// alert(typeof a);
// a = 2.2;
// alert(typeof a);



// ==================================

// Higher Order Functions

//  Functions that take other function as arguments 
//  or return a function as return

// necessary for use of Callbacks, Closures


