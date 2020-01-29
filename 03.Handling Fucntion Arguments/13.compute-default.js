const computeTax = function(amount,
    stateTax = 15, 
    localTax = stateTax * .10){
        console.log('stateTax: '+ stateTax + 'localTax: ' + localTax)
    };

computeTax(100, 10, 2);
computeTax(100, 10);
computeTax(100);    