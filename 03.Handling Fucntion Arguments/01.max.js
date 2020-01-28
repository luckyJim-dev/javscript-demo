// If we pass
// fewer arguments than the number of named parameters, the extra parameters
// turn up as undefined. If we pass more arguments than the number of parameters,
// then those are merely ignored.


const max = function(a,b){
    if(a>b){
        return a;
    }
    return b;
};
console.log(max(1,3));      // 3
console.log(max(4,2));      // 4
console.log(max(2,7,1));    // 7