// Interplay of the Default and Rest Parameters
const  product = function(first, second=1, ...moreValues){
    console.log(first+ ',' + second + ', length:' + moreValues.length);
};

product(1,...moreValues=[1,2,3])            // 1,1, length:2
product(1,undefined,...moreValues=[1,2,3])  // 1,1, length:3