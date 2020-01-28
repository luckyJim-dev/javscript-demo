// const 仅保证初始值，如数字和对象引用改变。

const max =200;
const ok = true;
const nothing = undefined;
const nope = null;
const sam = {first:'Sam','age':2};
console.log(sam.age);
sam.age = 3;                        //allowed
console.log(sam.age);