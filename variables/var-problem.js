// var is function scoped, hoisting issue
var price = 100;
console.log(price);

function testVar() {
    var price = 200;
    console.log("Inside Function:", price);
}
testVar();

console.log("Outside Function:", price);
