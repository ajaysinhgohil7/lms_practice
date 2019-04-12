//  when we create object wothout new keyword it will return undefined
//  if we return object from function it will create new object instance
//  so in Factory function we return object so no need for new keyword
//  in Class we dont return object so we need for new keyword



let log = console.log;
// Prototype 
// Kind of Inheritance
// Closures are different they are related to function scopes
// Prototypes are related to objects
// __proto__ property is used to set prototype
// here user is prototype for admin
// prototype __proto__ is either other object or null
//  not a integer or string or other primitive

// In JavaScript, all objects have a hidden [[Prototype]] property 
// that’s either another object or null.


// If we want to read a property of obj or call a method, 
// and it doesn’t exist, then JavaScript tries to find it in the prototype. Write/delete operations work directly on the object, they don’t use the prototype (unless the property is actually a setter).

// let user = {

//     userId: 1,
//     get getId () {
//         return this.userId;
//     },
//     set setId(value){
//         this.userId = value; 
//     }
// };

// // Prototypal Inheritance
// // all the methods and variables of user 
// // are available to admin,
// // =================
// // we should not inherite from multiple user2 or use43
// // gives error

// let admin = {
//     isAdmin : true,
//     __proto__ : user 
// };

// // console.log("admin");
// // console.log(admin.isAdmin);
// // console.log(admin.getId());

// // Here we can get value of admin from getter
// // if we set value using setter, this will point to admin
// // not to user.
// //  so new property called setid will be created
// //  as a result only variables, methods are shared
// //  not the state of prototype

// console.log(admin.getId);

// // creates new property called setId with value 3
// // this will refef to object before the dot
// // so here admin, not user


// admin.setId = 3;
// console.log(admin);
// console.log(user);

//  =================================

// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach = food;
//     }
// };
  
// let speedy = {
// __proto__: hamster
// };

// let lazy = {
// __proto__: hamster
// };
  
//   // This one found the food
//   speedy.eat("apple");
//   speedy.eat("apple");
//   speedy.eat("apple");
//   speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
//   console.log( speedy ); // apple
  
//   // This one also has it, why? fix please.
//   console.log( lazy.stomach ); // apple
//   console.log( lazy ); // apple

// ======================================

// function Employee(name){
//     this.name = name;

//     // 1 way to add method
//     // this.getName = function() {
//     //     return this.name;
//     // };
// }
// // 3 way to add method
// // Employee.getName = function(){
// //         return this.name;
// // }

// let e1 = new Employee('QQQQQQ');

// // 2 way to add method
// // e1.getName = function(){
// //     return this.name;
// // }

// let e2 = new Employee('VVVVV');

// // 2 way to add method
// // e2.getName = function(){
// //     return this.name;
// // }
// log(Employee.prototype);


// // 4 way to add method to object
// Employee.prototype.getName = function(){
//     return this.name;
// }

// log(Employee.prototype);

// log(e1);

// log(e1.getName());