'use strict'
const greet = 'dude';
console.log(greet);
greet[0]='r';       // Cannot assign to read only property '0' of string 'dude'
console.log(greet); // 

//objects of string are immutable in JavaScript