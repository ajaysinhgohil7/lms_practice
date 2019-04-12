// Supports all primitive data types as key
//  including functions, objects as well

// let newMap = new Map();

// newMap.set(1, 'first');

// newMap.set(2, 'SSSS');

// newMap.set('3', 'TTTTT');

// newMap.set(function () { 
//     console.log('inside func');
//     return 1;
//  } , 'function');

// console.log(newMap);
// let a =  newMap.keys();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next().value());

// OUTPUT
// /Map(4) {1 => "first", 2 => "SSSS", "3" => "TTTTT", ƒ => "function"}
// size: (...)
// __proto__: Map
// [[Entries]]: Array(4)
// 0: {1 => "first"}
// key: 1
// value: "first"
// 1: {2 => "SSSS"}
// key: 2
// value: "SSSS"
// 2: {"3" => "TTTTT"}
// key: "3"
// value: "TTTTT"
// 3: {function () { console.log('inside func'); return 1; } => "function"}
// key: ƒ ()
// value: "function"
// length: 4

// =================================

// Support only strings and integers as keys

// let obj = {
//     a: 'asda',
//     b:'asdads'
// };

// console.log(obj);

// OUTPUT
// {a: "asda", b: "asdads"}
// a: "asda"
// b: "asdads"


// ====================



// ...rest operator 
// let myArr = ['a', 'b', 'c'];

// let b = [...myArr];

// console.log(b.entries());

// for (const asd of b) {
//     console.log(asd);
        
// }

// =========================
//  Custom user defined objects does not have
//  iterator method
//  and obj.values() obj.keys() obj.entries() can not be used
//  so we have to use it like
// Object.values(obj) Object.keys(obj) Object.entries(obj)

// let user = {
//     name: "John",
//     age: 30
// };
// console.log(user);
// // loop over values
// for (let value of Object.values(user)) {
//     console.log(value);   
// }

// // =============================

// //  Maps and Sets are by defualt iterables
// //  so obj.values() obj.keys() obj.entries() can be used
// let map1 = new Map([['a','1', 'asd'], ['b','1'],['c','1']]);

// console.log(map1);

// console.log(map1.keys());
// console.log(map1.values());

// =============================== 

// Destructuring Assignments

// // we have an array with the name and surname
// let arr = ["Ilya", "Kantor", 'asdasdasd', 'asdasdaa']

// // destructuring assignment
// let [firstName, surname, asdsd, asdasdadsasd] = arr;

// console.log(firstName);
// console.log(surname);
// console.log(asdsd);
// console.log(asdasdadsasd);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// console.log(Object.entries(salaries));


// for(const [name, salary] of Object.entries(salaries)) {
//     // if (max < salary) {
//     //   max = salary;
//     //   maxName = name;
//     // }
//     console.log(name,salary); 
// }
