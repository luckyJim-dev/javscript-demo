// var does not have block scope and, in the past, that led developers to use a
// JavaScript design pattern known as Immediately Invoked Function Expression
// (IIFE) or the Self-Executing Anonymous Function.
// There’s a reduced need for this pattern in ES6 and beyond. That’s because
// let and const have block scope
/** no block scope

'use strict'

var result = 0;

for(var i =0; i<5;i++){
    var sqrt = Math.sqrt(i);
    result +=sqrt;
}

console.log(result)         // 6.146264369941973
console.log(sqrt)           // 2
*/

'use strict'
var result = (function(){
    var result = 0;
    for(var i =0;i<5;i++){
        var sqrt = Math.sqrt(i);
        result += sqrt;
    }
    return result;
})();
console.log(result);
console.log(sqrt);          // ReferenceError: sqrt is not defined
