// // let cn = require('./logDir')
// let lg = console.log;
// let dr = console.dir;


// class Animal{
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed){
//         this.speed += speed;
//     }

//     stop(){
//         this.speed = 0;
//         lg(`${this.name} stopped`);
//     }
// }

// class Rabbit extends Animal{
    
//     // constructor overriding
//     // when  we defining our own constructor
//     // we have to call super to create reference of this
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }

//     // Method Overriding
//     stop(){
//         super.stop();
//     }

//     hide(){
//         lg(`${this.name} hides`);
//     }
// }



// let rb1 = new Rabbit('WhiteMe', 3);
// // rb1.run(3);
// // rb1.run(3);
// // rb1.run(3);
// // rb1.run(3);
// // lg(rb1.speed);
// // rb1.hide();
// // rb1.stop();
// // lg(rb1.speed);
// // lg(rb1.earLength);

// // dr(Animal);
// // dr(Rabbit);
// // dr(rb1);
// // ====================================

// // INSTANCEOF

// lg(rb1 instanceof Animal); // true 
// lg(rb1 instanceof Rabbit); // true 
// lg(rb1);
// lg(rb1.toString());

// let aa = [];

// lg(aa);

// lg(aa instanceof Array); // true
// lg(aa instanceof Object); // true

// let bb = Object.prototype.toString // getting toString method
//                                    // from Object Prototype
// lg(bb.call(aa)); // [object Array]
// lg(bb.call(rb1)); // [object Object]
// lg(bb.call(123)); // [object Number]
// lg(bb.call("asd")); // [object String]
// lg(bb.call(null)); // [object Null]
// lg(bb.call(undefined)); // [object Undefined]




// =========================
// MIXINS

// to extends the class without using extends keyword

let byeMixin = {
    sayBye(){
        console.log(`${this.name} is saying Bye !!`);
    }
};

let afterNoonMixin = {
    sayGoodAfterNoon(){
        console.log(`${this.name} is saying Good AfterNoon !!`);
    }
};

class User{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log(`${this.name} is saying Hiiii !!`);
    }
}

// Use of Mixins
console.dir(User);
Object.assign(User.prototype, byeMixin);
Object.assign(User.prototype, afterNoonMixin);
console.dir(User.prototype);

// now User.prototype contains 
// sayHi() and sayBye() and sayGoodAfterNoon() as well
// assigned from mixins

let meet = new User('Meet');
meet.sayHi();
meet.sayGoodAfterNoon();
meet.sayBye();
