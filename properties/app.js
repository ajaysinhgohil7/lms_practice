// let user  = {
//     name : 'app',
//     age:5
// };
// // defining configurable
// //  false => can not be deleted and 
// // other properties can not be modified


// // default is all false
// //  One way road, once set to false, can be changed to true
// Object.defineProperty(user, 'name', {configurable: false});
// // console.log(user);
// // console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// // name can be changed
// // name='asdasd';

// // name can not be deleted
// // delete name;

// //  value can be overwritten if true
// Object.defineProperty(user, 'name', {writable : false});

// // user.name= "sdada";

// // enumarables => will be shown in loops
// // Non enuerables => won't be shown in loops
// // console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// // if configurable is false => can not be changed to false
// // Object.defineProperty(user, 'name', {enumerable: false});

// // name will not be shown
// for (const aa in user) {
//     console.log(aa);
// }

// ============================
// ERROR can not change attribute again once configurable is false
// let user={};

// Object.defineProperty(user, "name", {
//     value: "John",
//     writable: false,
//     configurable: false
//   });

// Object.defineProperty(user, "name", {writable: true});  
  
// All Properties Descriptors
// console.log(Object.getOwnPropertyDescriptors(user));

// Object.preventExtensions(obj)
// Forbids to add properties to the object.
// Object.seal(obj)
// Forbids to add/remove properties, sets for all existing properties configurable: false.
// Object.freeze(obj)
// Forbids to add/remove/change properties, sets for all existing properties configurable: false, writable: false.
// And also there are tests for them:

// Object.isExtensible(obj)
// Returns false if adding properties is forbidden, otherwise true.
// Object.isSealed(obj)
// Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.



// =============================

// Getter Setter

let user = {

    fname: 'asdad',
    lname: 'adasdasdasd',
    get fullname(){
        return this.fname + " " + this.lname;
    },
    set fullname(name){
        [this.fname, this.lname] = name.split(' ');
        
    }
};

console.log(user.fullname);
user.fullname = "meka almadd";
console.log(user.fullname);

console.dir();