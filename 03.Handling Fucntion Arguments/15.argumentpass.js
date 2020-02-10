function addTen(num){// pass by value
    num += 10;
    return num;
}
let count = 20;
let result = addTen(count);
console.log(count);//20
console.log(result)//30

function setName(obj){  // person copied into obj, obj and persion point to the same object
    obj.name = "Nicker";
}

let person = new Object();
setName(person);
console.log(person.name);//Nicker