
// does not have any explicitly named parameters declared
const max = function(){ //无显示参数声明
    console.log(arguments instanceof Array) // false
    console.log(typeof arguments)           // object
    let large = arguments[0]
    for(let i=0;i<arguments.length;i++){
        if(arguments[i] > large){
            large = arguments[i];
        }
    }
    return large
};
console.log(max(2,1,7,4));
console.log(max(2,1,7,4,5,6));