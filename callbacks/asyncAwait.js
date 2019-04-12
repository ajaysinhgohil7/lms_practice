
//  if we dont return explicitly
// it will return Promise.resolve implicitly
// async function aa(){
//     return 1;
// }

// aa().then((result)=>{
//     console.log(result)
// })

// ========================
// Here we are returning promise explicitly
// async function f() {
//     let proms = new Prsomise((resolve, reject)=>{
//         resolve(2);
//     });
//     return proms;
//      without constructor returning Promise resolve
//     // return Promise.resolve(1);
// }

// f().then(console.log); // 1

// ===================== 
// Await
// we have to store promise in variable and then
// return result using await
// async function bb() {
  
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('2secs is over promise');
//         }, 2000);
//     })
//     let result = await promise;
//     console.log(result);

      
//     let promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('1secs is over promise');
//         }, 1000);
//     })
//     let result2 = await promise2;
//     console.log(result2);

// }

// bb();

console.log('3333');

function aa(){
    console.log(Date.now().toString() / 1000);
};

setTimeout(aa, 5000);
setTimeout(aa, 2000);
