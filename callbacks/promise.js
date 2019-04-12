// fetch('tempJson.json')
//     .then(data => data.json())
//     .then(json => console.log(json))
//     .catch( err => console.log(err));


// ============================

// function getPromise(){
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, 1000); 
//     });
// }
// function conLogA(){
//     console.log("Log a");
//     return new Promise(function (resolve, reject){
//         fetch('tempJson.json')
//             .then(function (data) {
//                 resolve(data.json());
//             })
//             .catch(function (err) {
//                 reject(err);
//             })
//     })
// }

// function conLogB(){
//     console.log("log B");
// }

// function conLogC(){
//     console.log("log C");
//     throw new Error('Error !!!!!!');
// }

// function logError(err){
//     console.log(logError.caller);
    
//     console.log("errrrrr" + err.message);
// }
  
// getPromise()
//     .then(conLogA)
//     .then((data)=>{
//         console.log(data);
//         conLogB()
//     })
//     .then(conLogC)
//     .catch(logError)

// =================================

// fetch('https://api.github.com/users/tylermcginnis')
// .then((response)=> response.json())
// .then((data)=> data )
// .then((data)=> {
//     let loc = data.location;
//     // // fetch(`https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${loc}`)
//     // fetch("https://weather-ydn-yql.media.yahoo.com/forecastrss?location="+ loc +"&format=json")
//     // .then((response)=> response.json())
//     // .then((dataWeather) => {
//     //     console.log(dataWeather)
//     // })
// })
// .catch(err => console.log(err));


// ======================================

// function loadScriptTemp(src) {
//     return new Promise((resolve)=>{
//         let script = document.createElement('script');
//         script.src = src;
//         document.head.append(script);
//         resolve(script);
//     })
// }

// loadScriptTemp("./app.js")
// .then(() => {
//     return loadScriptTemp("./tempScript.js");
// })
// .then(() => {
//     setTimeout(()=>{
//         callTrace()
//     }, 1000)
// });
// ===========================================
setTimeout(() => {
    alert('Loaded javascript');
}, 5000);
