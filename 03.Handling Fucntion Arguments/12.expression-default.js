// The value of the expression used for the default value is evaluated at the time
// of the call.

const fileTax = function(papers,dateofFiling=new Date()){
    console.log('dateofFiling: ' + dateofFiling.getFullYear());
};

fileTax('stuff', new Date('2016-12-31'));
fileTax('stuff');       // dateofFiling: 2020