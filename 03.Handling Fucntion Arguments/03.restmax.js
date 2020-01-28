const max = function(...values){
    console.log(values instanceof Array);       // true
    let large = arguments[0]
    for(let i=0;i<arguments.length;i++){
        if(arguments[i] > large){
            large = arguments[i];
        }
    }
    return large
}

const max2 = function(...values){
    return values.reduce((large,e) => large > e ? large : e ,values[0])
}

console.log(max(2,1,7,4))
console.log(max2(2,1,7,4))