const greet = function(...values){
    console.log('hello '+ values.join(','))
}
const jack = 'jack';
const jill = 'jill';
const tj = ['Tom','Jerry']

greet(jack,jill);
greet(tj);
greet(...tj);