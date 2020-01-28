'use strict'

const sam = Object.freeze({first:'Sam',age:2});
sam.age = 3     // Cannot assign to read only property 'age' of object '#<Object>'
// Right after we created the object, we passed it through the freeze() method of Object. 
// This returns a reference to an object that is immutable