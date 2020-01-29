// Multiple Default Parameters
const fetchData = function(
    id,
    location = {host:'localhost',port:443},
    uri = 'employees'){
        console.log('Fetch data from https://'+
        location.host+':'+location.port+'/'+uri)
    }
fetchData(1, { host: 'agiledeveloper', port: 404 }, 'books');
fetchData(1, { host: 'agiledeveloper', port: 404 });
fetchData(2);

// Fetch data from https://agiledeveloper:404/books
// Fetch data from https://agiledeveloper:404/employees
// Fetch data from https://localhost:443/employees