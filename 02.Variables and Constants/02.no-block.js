'use strict'

console.log(message);           // undefined
console.log('Entering Loop');
for(var i=0;i<3;i++){
    console.log(message);       //此处可见，但未定义
    var message = 'spill' + i   // spill0 ->spill1
}
console.log('Exiting Loop');
console.log(message);           // spill1
/**
 * var, the variable spills over loop,var has the scope of the entire function
 * 
 * 
 * **/