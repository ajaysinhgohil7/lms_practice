const _ = require('lodash');



const [log, dir] = [console.log, console.dir];

const headers  = [ 'x-web-a', 'x-web-b','x-web-c','x-web-d' ];

const reqHeaders = {
    'x-web-a':'asd',
    'x-web-b':'asasd',
    'x-web-c':'asdasd',
    'x-web-d':'asdasd',
    'sada':'asdasd',
    'sadaasda':'asdasd'
}

// =====================lodash====================
// log(_.isEqual(headers, Object.keys(reqHeaders)));
// ===============Not working====================

// function customizer(objValue, othValue) {
//     log(objValue, othValue)
//     if ( objValue == othValue ) {
//       return true;
//     }
// }

// =============================================

log(_.isEqual(headers, Object.keys(_.pick(reqHeaders, headers))));

// ===========================================
//   var array = ['hello', 'goodbye'];
//   var other = ['hi', 'goodbye'];
   
//   log(_.isEqualWith(headers, Object.keys(reqHeaders), customizer));

// ================WORKING=========================
// let propertyCounter = 0;

// for (const key in reqHeaders) {
//     if(reqHeaders.hasOwnProperty(key)) propertyCounter++;
// }

// const check = function (headers, reqHeaders) {
 
//     // if( propertyCounter != headers.length ) return false;
//     // else {
//         let equalityCounter = 0;
//         for (const key in reqHeaders) {
//             for (let j = 0; j < headers.length; j++) {
//                 if( key.toString() == headers[j].toString()) {
//                     equalityCounter++;
//                 }
//             }
//         }
//         // return (equalityCounter == propertyCounter &&  equalityCounter == headers.length) ? true : false;
//         return ( equalityCounter == headers.length ) ? true : false;
//     // }
// }
// let equal = check(headers, reqHeaders);
// console.log(equal);



