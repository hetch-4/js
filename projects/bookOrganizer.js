const books = [
  {title: "Atomic Habits",authorName: "James Clear",releaseYear: 2001},
  {title: "48 laws of power",authorName:"Robert Greene", releaseYear: 2011},
  {title:"Theory of Estimation", authorName:"Pradip Kuma",releaseYear: 2012}
];

const sortByYear = (book1,book2) =>{
  let bk1 = book1.releaseYear;
  let bk2 = book2.releaseYear;

  if(bk1<bk2){
    return -1;
  }else if(bk1 === bk2){
    return 0;
  }else{
    return 1;
  }
}

console.log(sortByYear(books[1],books[0]))

const filteredBooks = books.filter( book => book.releaseYear > 2005);

//console.log(filteredBooks)

filteredBooks.sort(sortByYear)
console.log(filteredBooks)
