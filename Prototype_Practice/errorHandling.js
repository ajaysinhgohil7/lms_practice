let [lg, dir] = [console.log, console.dir];
// console.log('asdasd');

// try {
//     llll;
// } catch (error) {
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
//     console.dir(error);
// }

// console.log('asdasd');

// try catch is synchronous

// try catch CANNOT identify asynchrounous task
// ex.setTimeout
// try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here, 
//     //   code will broke
//     }, 2000);
// } catch (e) {
//     alert( "won't work" );
// }

// put it into callback
// setTimeout(()=>{
//     try {
//         asdasdasd;
//     } catch (error) {
//         console.log(error.name);        
//     }
// }, 2000);

// ==========================


// let user = '{ "name":"jjajaj", "age":"34"}';
// let badJson = '{ BAD JSON }'; 

// console.log(user);
// console.log(JSON.parse(user));

// try {
//     console.log(JSON.parse(badJson));
// } catch (error) {
//     console.log(error);    
// }

// let user2 = '{ "name":"jjajaj", "age":"34"}';

// try {
    
//     let parsedJsn = JSON.parse(user2);

//     // console.log();

//     if(!parsedJsn.salary) throw new Error('Salary is undefined')

//     alert(parsedJsn.salary);    

// } catch (error) {
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
// }
 
class ValiadationError extends Error {
    constructor(message){
        super(message);
        this.name = 'ValidationError';
        this.code = 404;
    }
}

const read = function (json) {
    let user = JSON.parse(json);

    if(!user.name){
        throw new ValiadationError('Name is und');
    }

    return user;
}

const tempJSON = '{ "name" : "asdasd", "age" : 40 }';

try {
    
    let user = read(tempJSON);
    lg(user)

} catch (error) {
    if (error instanceof ValiadationError) {
        lg(error.name);
        function name(params) {
            function name(params) {
                function name(params) {
                    
                }
            }
        }
        lg(error.message);
    }else if (error instanceof Error)  {
        lg(error.name);
        lg(error.message);
    }
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.code);
}












