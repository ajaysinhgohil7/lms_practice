
//  Constructor Functions

// Named with Capital Initial
//  and created with new keyword

//             Default Params
function User(fname="asdas", lname="hhhhh") {
    let _User = this;
    _User.fname = fname;
    _User.lname = lname;

    _User.giveFullname = function () {
        return _User.fname + " " + _User.lname;
    };

    _User.show = function () {

        console.log(this);
        console.log(_User.giveFullname());
    }.bind(_User);

}

//  and created with new keyword
var tim = new User('tim ', 88);
tim.show();

// All Things Javascript
// Five Important Concepts for Understanding JavaScript Constructors