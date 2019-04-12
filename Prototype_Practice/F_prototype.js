// let animal = {
//     canWalk : true
// };
// Rabbit.prototype = animal;

// let rab1 = new Rabbit('Green');
// console.log(rab1);

// let rab2 = new Rabbit('Steve');
// console.log(rab2);

// Rabbit.prototype.showname = function () {
//     console.log(this.name);
// };

// rab1.showname();
// rab2.showname();

// // ==============================
// // ********************
// // ********************
// // READ THIS ARTICALE FOR PROTOTYPE
// // ********************
// // ********************

// // http://www.javascripttutorial.net/javascript-prototype/

// let [dir, log] = [console.dir, console.log];

// function Foo(name) {
//     this.name = name;
// }

// // dir("Foo");
// // dir(Foo);
// // dir("-------------------");

// Foo.prototype.whoIm = function(){
//     return "I m " + this.name;
// };


// let a = new Foo("A");
// // dir(a);


// let b = new Foo("B");
// // dir(b);

// b.sayHi = function(){
//     log(this.whoIm());
// };

// // b.sayHi();
// // log("aaaa", a);

// // log(Foo.prototype); 
// //     // Anonymous Object having constructor pointing to
// //     // itself called func Foo(name).
// //     // and other defined methods like showName

// // log("a.constructor"); 
// // log(a.constructor); // func Foo(name){ this.name = name } -> constructor function
// // log(a.prototype); // undefined
// // log(a.constructor.prototype); // anonymous Object

// // // __proto__ is Prototype Linkage to Foo.prototype

// // log(a.__proto__ == Foo.prototype); // true
// // log(b.__proto__ == a.__proto__); // true

// log(Object.getPrototypeOf(a)); // anonymous Object inside of Foo()
// log(a.__proto__); // anonymous Object inside of Foo()
//                   // Deprecated so use upper one  
// log(a.constructor.prototype); // anonymous Object inside of Foo()


// // search whoIm in local object

// // if does not find it, 
// // than go to prototype of Foo (shared) 
// // using __proto__ (Prototype linkage) Dunder Proto

// // if finds, executes it from local obj itself

// a.whoIm = function () {
//     return "This is from " + this.name;
// };

// log(a.whoIm());

// dir(a);


// ====================================================

// *********************************
// *********************************
// READ THIS TOOOOOO
// http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
// *********************************
// // *********************************
// let [dir, log] = [console.dir, console.log];

// function Bar(name) {
//     this.name = name;
// }

// dir(Bar.prototype);

// ====================================
//  Temp Practice

// let person ={
//     fname:'asd',
//     lname:'asd',
//     getFullname : function () {
//         // Execution context will change as per callee
//         // person.getFullname -> this -> person
//         // john.getFullname -> this -> john
//         console.log(this); // referce to person
//         return this.fname + ' ' + this.lname;
//     }
// };

// let john = {
//     fname : 'John',
//     lname : 'Doe'
// };

// // Dont do this EVER !!!!!!
// john.__proto__ = person;


// console.dir(person);
// console.dir(john);
// console.log(john.getFullname());
// // THIS reference to john. because john 
// // has originated this function call

// console.log(person.getFullname());
// // THIS reference to person. because person 
// // has originated this function call

// // ================READ THIS ONLY and PROTOTYPE IS DONE==========================================
// https://www.youtube.com/watch?v=XskMWBXNbp0 -> GOOD LINK
// // ==========================================================
// // 2nd Concept

// // &&&&&&& IMPORTANT &&&&&&&

// // Prototype property

// // prototype property is given to CONSTRUCTOR FUNCTIONS only

// // when new object is created from it, the value of prototype
// // is given to the new object.__proto__

// // ------------------------------

// // __proto__ : its a Object to prototype chain 

// // this property is set whenever object is created

// // this property has a reference to its prototype 
// // in prototype chain as a value

// // this property can have 2 values : Other Object or Null

// // when object is created from new keyword, it gets value
// // of __proto__ from constuctor's prototype property as Above section

// // Prototype looks like : Dog
// // {
// //      getBreed: ƒ ()
// //      constructor: ƒ Dog()
// //      __proto__: Object
// // }

// // when object is created without new keyword or directly with
// // object litarels, 
// // it gets Object ( Core -> parent of all (main) ) object 
// // as __proto__'s value

// // Core Object looks like
// // {
// //      constructor: ƒ Object()
// //      hasOwnProperty: ƒ hasOwnProperty()
// //      isPrototypeOf: ƒ isPrototypeOf()
// //      propertyIsEnumerable: ƒ propertyIsEnumerable()
// //      toLocaleString: ƒ toLocaleString()
// //      toString: ƒ toString()
// //      valueOf: ƒ valueOf()
// //      __defineGetter__: ƒ __defineGetter__()
// //      __defineSetter__: ƒ __defineSetter__()
// //      __lookupGetter__: ƒ __lookupGetter__()
// //      __lookupSetter__: ƒ __lookupSetter__()
// //      get __proto__: ƒ __proto__()
// //      set __proto__: ƒ __proto__()
// // }

// // Common for all Instance Objects
// function Dog(){
//     this.breed = "BullDog";
// }

// // Shared for all Instance Objects
// Dog.prototype.getBreed = function(){
//     return this.breed;
// };
// // console.dir(Dog)
// // console.dir(Dog.prototype); // -> Object
// // console.dir(Object); // -> Object
// // console.dir(Dog.__proto__); // -> Object.prototype

// // console.log(Dog.prototype.__proto__ == Object.prototype); //true

// let bb = new Dog();

// // console.dir(bb.__proto__);

// // bb.breed = 'asdasd';
// console.dir(Dog);

// console.dir(Dog.prototype); // same as down
// console.dir(bb.__proto__); // same as up
// // console.log(bb.getBreed());

// console.log(Dog.prototype.isPrototypeOf(bb));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(bb))));
// Object.hasPrototype(bb, Object);
// // when creating using new keyword
// // we create object, whatever variables are set in main function
// // are assigned to individual object
// // and when we assign the values outside of that function
// // that properties are shared amongst the objects


// ============================================
// CLASS IMPLEMENTATION FOR PROTOTYPE BEHAIVOUR
// EXTENDS keyword is used for assign prototype

class Person{
    constructor(type){
        this.type = type;
    }
}

class Employee extends Person{
    constructor(name, age, type){
        super(type);
        this.name = name;
        this.age = age;
    }
    calculateNetSalary(groosSalary, pfAmount){
        return groosSalary - pfAmount;
    }
}

let ajay = new Employee('Ajay', 23, 'Developer');
console.log(ajay.calculateNetSalary(1800000, 5000));
console.log(ajay.type);
console.log(ajay instanceof Person); // true
console.log(ajay instanceof Employee); // true

// let meet = new Person('meet', 25);
// let ajay = new Person('ajay', 25);
// console.log(meet);
// console.log(ajay);

// console.log(ajay.calculateNetSalary(100000, 2000));