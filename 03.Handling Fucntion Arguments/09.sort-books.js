// The slice() function makes a copy of the given array and the sort() function then
// sorts the copy,


const sortByTitle = function(books){
    const byTitle = function(book1,book2){
        return book1.title.localeCompare(book2.title)
    };
    return books.slice().sort(byTitle);
};

const sortByTitle2= function(books,ascending=true){
    const multiplier = ascending ? 1 : -1;
    const byTitle = function(book1,book2){
        return book1.title.localeCompare(book2.title)*multiplier;
    };
    return books.slice().sort(byTitle);
}


const books = [
    { title: 'Who Moved My Cheese' },
    { title: 'Great Expectations' },
    { title: 'The Power of Positive Thinking' }
    ];
console.log(sortByTitle(books));
console.log(sortByTitle2(books));
console.log(sortByTitle2(books,false));