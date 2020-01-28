const outer = function(){
    for(let i=1;i<=3;i++){   //局部变量   
        inner();            
    }
};

const inner = function(){
    for(i=1;i<=5;i++){      //全局变量
        console.log(i)
    }
};
outer()
// output
// 1
// 2
// 3
// 4
// 5
// 1
// 2
// 3
// 4
// 5
// 1
// 2
// 3
// 4
// 5