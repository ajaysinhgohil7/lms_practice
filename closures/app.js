// let counter = function counter() {
    
//     var cnt = 0, 
//         increBtn = document.getElementById('btn1'),
//         decreBtn = document.getElementById('btn2');


//     function print() {
//         console.log(cnt);
//     }

//     function increCnt1 () {
//         cnt++;
//         print();
//     }

//     function decreCnt1 () {
//         cnt--;
//         print();
//     }

//     increBtn.onclick = increCnt1;
//     decreBtn.onclick = decreCnt1;

// };

// counter();

// ====================================

function show(msg) {
    console.log(msg);
	return function bb(nn){
		console.log( msg + nn + msg);
    };
}

// Different Closures
var tt = show('asdad');
var vvv = show('LLLLLLLLL');
tt("QQQQ");
vvv("TTTTTTT");


// Same Closures
// var tt = show('asdad');
// var vvv = tt;
// tt("QQQQ");
// vvv("TTTTTTT");
