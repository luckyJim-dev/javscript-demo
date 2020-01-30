const age = Symbol('ageValue'); // using symbol() function to define a Symbol
const email = 'emailValue';     // defined as a string

const sam = {
    first: 'Sam',
    [email]: 'Sam@example.com', // define the property name as emailValue
    [age]: 2                    // the property itself is of Symbol type, hidden from normal iteration.
};


console.log('iterating over properties:');
for(const property in sam) {
    console.log(property + ' : ' + sam[property]);
}
console.log('list of property names:');
console.log(Object.getOwnPropertyNames(sam));           // [ 'first', 'emailValue' ]

console.log('list of symbol properties');
console.log(Object.getOwnPropertySymbols(sam));         // [ Symbol(ageValue) ]
console.log('accessing a symbol property:');
console.log(sam[age]);                                  // 2                                  
console.log('changing value...');
sam[age] = 3;
console.log(sam[age]);                                 // 3