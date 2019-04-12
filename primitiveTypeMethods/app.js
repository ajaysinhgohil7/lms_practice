//  Primitive Types

// string, number, boolean, null, undefined, symbol
// Same, allows String methods.

//  here aa is primitive
//  when this run

// var aa = "string";

// alert(aa.toUpperCase());

// var bb = 55;

// //  Object Wrapper String
// var aaa = new String("string");
// var bbb = new Number(55);

// console.log(typeof(aa));
// console.log(typeof(bb));
// console.log(typeof(bbb));
// console.log(typeof(aaa));
// console.log(aaa);
// console.log(bbb);


// ======================

// Not recommanded
// because when  we create objects, it will return true forever.

var false1 = new Boolean(false); // return true;
var false2 = Boolean(false); // return value false;
var false3 = false; // return value false;

// alert(typeof false1);
// alert(false1);


// alert(typeof false2);
// alert(false2);

//  always true
// if(false1){
//     alert(true);
// }else{
//     alert(false);
// }

// false without new Keyword
// if(false2){
//     alert(true);
// }else{
//     alert(false);
// }

// ======================
//  can be used for conversion
// var num1 = Number("12323"); // return value false;
// alert(typeof num1);