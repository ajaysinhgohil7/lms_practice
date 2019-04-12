// var a = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];

// console.time("over");
// a.unshift("vvv");// slow
// console.timeEnd("over");

// console.time("over");
// a.push("vvv");// fast
// console.timeEnd("over");

// for Of // for objects
// console.time("over");
// for (let abc of a) {
//     console.log(abc);
// }
// console.timeEnd("over");

// for // use it 
// console.time("over");
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// console.timeEnd("over");

// For IN // dont use often // for objects
// for (const i in a) {
//     if (a.hasOwnProperty(i)) {
//         console.log(a[i]); 
//     }
// }

// ===================================
// Iterables
// Arrays, Sets, WeakSets, Maps, WeakMaps
// Strings like 'hello' => array of chars ['h','e','l','l','o']
//  These all are iterables.
//  Because keys are interabels, 0,1,2,3,4
//  These all contains Symbol(Symbol.iterator) in __proto__
//  The Objects on which we can iterate over

// let log = console.log;

// let names = ['aa', 'bb', 'cc', 'dd'];

// Object.defineProperty(names, names.length, 
//                 { value: 'ee', enumerable: true});


// // For Of loop is for Iterables
// for (const name of names) {
//     log(name);
// }

// log("");

// // For In loop is enumerables
// // allow to access the value by the key
// for (const key in names) {
//     if (names.hasOwnProperty(key)) {
//         log(key);
//     }
// }



// ===================================

// Sets
// Unique values

// For of loop can be used with iterables only

// let set1 = new Set([1,2,2,2,2,4]);

// console.log(set1); // [1, 2, 4];

// for (const item of set1) {
//     console.log(item);
// }

// // Simple objects are not iterables by default
//  keys are name, age. these are not iterable
//  we can not loop through by for of
//  Use for in

let user = {
    name:'asda',
    age: 20
};

// ERROR
// for (const key of user) {
//     console.log(user[key]);
// }

// KEYS
// for (const key in user) {
//     console.log(key);        
// }
    
    
