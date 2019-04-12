let log = console.log;
// 1 Object Litaral
// when we need to create many object same => no use full
// let obj = {
//     pro1:'vvv',
//     pro2: function(){
//         console.log(this.pro1);
//     }
// };
// obj.pro2();

// ================================
//  Object.create //////

// let proto = {
//     prop3: function () {
//         console.log(this.prop1);
//     }
// }

// // if {} as prototype, obj.proto3() gives undefined
// // let obj = Object.create({}, {

// // if proto as prototype, obj.proto3() gives console log prop1
// let obj = Object.create(proto, {
//         prop1:{
//             configurable:true,
//             writable:true,
//             enumerable:true,
//             value:'valllll'
//         },
//         prop2:{
//             configurable:true,
//             writable:true,
//             enumerable:true,
//             value:'asdasdasd'
//         },
// });

// obj.prop3();
// ==================================
// //  3. new keyword with function
// //  if no new keyword, it will be undefined
// //  new ketword calls constructor
// let Obj = function(f1, f2){
//     this.prop1 = f1;
//     this.prop2 = f2;
//     this.prop3 = function(){
//         log(this.prop1);
//         log(this.prop2);
//     };
//     // no return statements 
//     // then it will return undefined
// };

// // this is a function call with new keyword
// // it will pass back Instance of function
// // whole function instance is passed back 
// let aa = new Obj(123,321);
// let aaa = new Obj(12,21); // reuse

// aa.prop3();
// aaa.prop3();

// =================================
// Facory Function
// Creating closure

// let Obj = function(f1, f2){
//     // private with _ underscore
//     let _prop1 = f1;
//     let _prop2 = f2;
    
//     // return statements
//     return {
//         prop1: _prop1,
//         prop2: _prop2,
//         prop3: function(){
//             log(_prop1);
//             log(_prop2);
//         }
//     };
// };

// // No need of new because we are returning object 
// // Factory function

// let aa = Obj(12333,321);
// aa.prop3();

// ==============================================
// Javascript Classes ES6
// Constructor
// class Obj{
//     constructor(v1, v2){
//         this.prop1 = v1;
//         this.prop2 = v2;
//     }
//     prop3(){
//         log(this.prop1);
//         log(this.prop2);
//     }
// }

// let obj1 = new Obj(123,32131);
// obj1.prop3()
// =========================================================
// =========================================================
// =========================================================
// =========================================================
// =========================================================

// TECHSITH
// YOUTUBE
// LINK : JavaScript object creation patterns tutorial - factory , constructor pattern, prototype pattern

// 1. Constructor Pattern -> new keyword // Redundent

// 2. Factory pattern -> return object // Redundent

// 3. Prototype pattern -> shared prototype //shared
// when we create the prototype and add property to it
// cannot be done in one line so thats the problem

// to solve the problem, we have dynamic prototype pattern

// 4. Dynamic prototype pattern
