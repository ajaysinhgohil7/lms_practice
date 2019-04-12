console.log('temoScript loaded');

const PI = 3.14;

const callTrace = function() {
    console.log('Function called ' + "PI = " + PI);
};

exports = { 
    callTrace
}