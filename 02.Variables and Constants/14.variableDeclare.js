/***
 * 使用var声明变量时，该变量会自动添加至可用的直接上下文中
 * - 在函数中，为函数的执行环境(a)
 * - with语句中，函数上下文(b)
 * 如果变量非声明，且被使用，则会自动添加至全局上下文中(c) node v12.4.1 and Chrome没有实现
 * 1. 使用var声明带来函数或者全局作用域之上
 * 2. 使用let声明块级作用域
 * 3. const声明在任何声明周期内，不能修改其值
 */

function add (num1,num2){
    var sum = num1+num2;
    return sum;
}
let result = add(10,20);    // 30
//console.log(sum)            // sum is not defined


function add1(num1,num2){
    sum1 = num1+num2;
    return sum1;
}
console.log(sum1)           // sum1 is not defined 