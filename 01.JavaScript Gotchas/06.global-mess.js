const outer = function(){
    for(i=1;i<=3;i++){      // i为全局变量
        inner();            // 当第一次调用返回后，i=6,直接对出for循环
    }
};

const inner = function(){
    for(i=1;i<=5;i++){
        console.log(i)
    }
};
outer()

/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */