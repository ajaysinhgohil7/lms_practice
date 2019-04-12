'use strict';
// // Obj Methods
// let user = { 
//     name: 'asd',
//     age: 20,
//     sayhi:function() {
//         alert(user.name);
//         alert(this.name);
//     }
// };

// user.sayhi()

// // ==============================
// // Use always THIS keyword

// let user = { 
//     name: 'asd',
//     age: 20,
//     sayhi:function() {
//         // alert(user.name); // Error
//         alert(this.name); // Referencing usr2
//         alert(usr2.name);
//     }
// };

// let usr2 = user;
// user = null;

// usr2.sayhi();

// ===========================

// let user = { name: 'user' };
// let admin = { name: 'admin' };

// function sayhi () { 
//     alert(this);
// }

// user.func = sayhi;  // pointing to user
// admin.func = sayhi; // pointing to admin

// user.func();
// admin.func();

// sayhi(); // For thie function, this is pointing 
//          // Global object (Window)

// =====================================
// Error for immediately called ()
// let user = { name: 'user',
//     hi(){ alert("hi")},
//     bye(){ alert("bye")},
//     aaa: this,
//     ref() {return this}
// };

// ==call 1 success
// (user.name == "user1" ? user.hi : user.bye)();

// ==call 2 success
// user.hi();

// ==call 3 success
// let aa;
// (aa = user.hi)();

// ==call 4 success
// (user.fff || user.hi)();

// console.log(user.aaa); // here this is pointing to 
//                         // Global obj Window
//                         // because user is belong to 
//                         // window.
//                         // because its outside of functions

// console.log(user.ref()); // here this is pointing to
//                         //  user obj, not windows
//                         //  becaue its inside of function

// ===========================
// Chaining
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this; // here this => ladder is
                    // everytime when previous call
                    /// gets finished 
    },
    down() {
      this.step--;
      return this; // here this => ladder is
                    // everytime when previous call
                    /// gets finished 

    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this; // here this => ladder is
                    // everytime when previous call
                    /// gets finished 

    }
  };

ladder.up(); // here we are explicitly calling ladder
ladder.up(); // here we are explicitly calling ladder
ladder.up(); // here we are explicitly calling ladder
ladder.up(); // here we are explicitly calling ladder
ladder.down(); // here we are explicitly calling ladder
ladder.showStep(); // here we are explicitly calling ladder

// Chaining
ladder.up().up().up()
    .up().down().showStep();// we have
                            // to return
                            // this => ladder obj 