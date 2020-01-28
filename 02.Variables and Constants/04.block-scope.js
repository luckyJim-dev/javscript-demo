//variables declared using let have block scope
'use strict';
console.log(message)            //ReferenceError: message is not defined
console.log('Entering loop');
for(let i=0;i<3;i++){
    let message = 'spill' +1
}
console.log('Exiting loop')

console.log(message)