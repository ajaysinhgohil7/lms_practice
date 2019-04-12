// let  [log, dir] = [console.log, console.dir];
// let cn = require('./logDir');
let lg = console.log;
let dr = console.dir;
class User {

    // if we dont specify any constructor
    // default constructor is created pointing to this class itself

    constructor(name, age){
        this.name = name;
        this.age = age;
     }
    sayHi(){
        lg(this.name);
    }
}

// // when class User created, javascript engine creates 
// // function called User (Same name as class name) and 
// // adds constructor (pointing to itself) and 
// // functions like sayHi() to its prototype object.
// // Internally its doing the same process of creating function
// // and assignment to prototype.


// dr(typeof User); // class is also kind of function only
// dr(User.prototype); // Object

let user1 = new User('Me', 24);
user1.sayHi();
dr(user1.age);

// // by default methods in classes are non-enumarables
// // methods wont be shown in loop
// // here sayHi() method is non-enumarble for class User's prototype object
// //  sayHi() is not part of user1 object.

// for (const key in user1) {
//     if (user1.hasOwnProperty(key)) {
//         lg(user1[key]);
//     }
// }

let descriptor = Object.getOwnPropertyDescriptor(User.prototype, 'sayHi');

lg( JSON.stringify(descriptor, null, 2 ));
// {
//   "writable": true,
//   "enumerable": false,
//   "configurable": true
// }

// dr(typeof user1); // object

// ================================

// Getter/Setter are also implemented by class syntax inside prototype

// ==============================

// // Class conpuuted properties very usefull

// function f() { return "sayHi"; }

// class User {
//   [f()]() {
//     alert("Hello");
//   }

// }

// new User().sayHi();

// ==================================================

// NATIVE PROTOTYPES
// In modern programming, there is only one case when 
// modifying native prototypes is approved. That’s polyfilling.

// Polyfilling is a term for making a substitute for a method that 
// exists in JavaScript specification, 
// but not yet supported by current JavaScript engine.