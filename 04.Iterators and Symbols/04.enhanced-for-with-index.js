// Instead of specifying only the name, we include the index variable i as well

const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];
for(const [i, name] of names.entries()) {
console.log(i + '--' + name);
}