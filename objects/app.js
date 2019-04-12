// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };
  
//   console.log(user.age);

// =================================
//  multi word property
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };

// user["likes birds"] = false;

// ==================================
//  SHORTHAND

// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age
//       // ...other properties
//     };
//   }
  
//   let user = makeUser("John", 30);
//   alert(user.name); // John

//  CAN BE WRITTEN AS

// function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age   // same as age: age
//       // ...
//     };
//   }

//   let user = makeUser('asdad', 50);
//   alert(user.age);
//   alert(user.name);

//   if("name1" in user){
//       alert('present')
//   }else{
//     alert('not present')
//   }

// ====================================
//  If value of property is undefined, then its 
//  present but empty;
// ===================================
//  FOR IN
// let user = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
// };
// for (const key in user) {
//     if (user.hasOwnProperty(key)) {
//         alert(key);
//         alert(user[key]);
//     }
// }
// ===============================
// Auto Sorted

// let codes = {
//     49: "Germany",
//     41: "Switzerland",
//     44: "Great Britain",
//     1: "USA"
//   };
  
// let codes2 = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA"
//   };
  
//   for (let code in codes) {
//     alert(codes[code]);
// }

// ===================================
// Copy Reference
// Poiniting to same object

// let user = { name: 'John' };
// alert(user.name); // 'Pete', changes are seen from the "user" reference

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// alert(user.name); // 'Pete', changes are seen from the "user" reference

// =========================
//  Cloning
//  But It will be cloned by reference
// let user = {
//     name: "John",
//     age: 30
//   };
  
// let clone = Object.assign({}, user);
// alert(clone.age);