const sam = { name: 'Sam', age: 2 };
console.log(sam);
//make a copy of the object while replacing the age field with a new value of 3
console.log({...sam, age: 3});
console.log({...sam, age: 4, height: 100 });
console.log(sam);