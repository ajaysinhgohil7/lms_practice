// console.log("asdasd");
// setTimeout(function () {
//     console.log('timed out');
    
// },0);
// console.log("asdasd");

// function loadScript(src, callback) {
    
//     let scriptTag = document.createElement('script');
//     scriptTag.src = src;
//     scriptTag.onload = () => callback(scriptTag);
//     scriptTag.onerror = ()=> callback('Error in loading script');
//     document.head.append(scriptTag);
// }

// loadScript('./tempScript.js', function (err, scriptTag) {
    
//     if(err) {
//         console.log(err)
//     }else{
//         console.log(scriptTag);
        
//         callTrace();
//     }
// });

// let fs = require('fs');

// let promise1 = new Promise(function (resolve, reject) {
    
//     // let scriptTag = document.createElement('script');
//     // scriptTag.src = './tempScript.js';
//     // scriptTag.onload = () => resolve(scriptTag);
//     // scriptTag.onerror = ()=> reject(new Error('failed to load script'));
//     // document.head.append(scriptTag);
//     if( (fs.existsSync('./tempScript.js'))? true : false){
//         resolve();
//     }else{

//         class FileNotExist extends Error {
//             constructor(message){
//                 super(message);
//                 this.name = 'FileNotExistsError';
//             }
//         }
//         reject(new FileNotExist('File not Exists'));
//     }
// });


// // .then methods -> can take one or two args
// // first function for success (resolves) (if only one arg is given)
// // second function for error (rejects) (if two args are given)

// promise1.then( () => {
//     let tempScript = require('./tempScript');
//     tempScript.callTrace();
// }, (err)=>{
//     console.log(err.name);
    
// });

// ==========================

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let user = {
            name:"AJAY",
            age:24
        }
        resolve(JSON.stringify(user));
        // reject(new Error('error caught'));
    }, 1000);
});

// promise2.then(function (user) {
//     console.log(user);
//     console.log(JSON.parse(user));
// }, function (err) {
//     console.log(err.name);
//     console.log(err.message);
// })

let parseData = function(user){
    console.log(JSON.parse(user));
}

promise2.then(parseData, console.log);

const allert  = function(){
    alert('app.js');
}
