const oops = function(){
    haha =2;        //未声名，默认为全局变量
    let deda =2
     console.log(haha);
};

oops();
//console.log(haha)
console.log(deda)          // deda is not defined
/** output
 * 2
 * 2
 */