let obj = {
    name:'asda',
    age : 33,
    sayHi: function() {
        console.log(this);
    }
};

let bon = obj.sayHi.bind(this);
bon();
obj.sayHi();