const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//sample book data
let books = [
  {
    bookName: "Rudest",
    bookAuthor: "Shwetabh Gangwar",
    bookPages:200,
    bookPrice:240,
    bookState: "Available"
  },
  {
    bookName: "Do Epic Shit",
    bookAuthor: "Ankur Wariko",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available"
  }
];

//Middleware
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Home Route - display books
app.get("/", (req,res)=>{
  res.render("home",{data:books});
});

//Add book route
app.post("/", (req,res)=>{
  const newBook ={
    bookName: req.body.bookName,
    bookAuthor: req.body.bookAuthor,
    bookPages: req.body.bookPages,
    bookPrice: req.body.bookPrice,
    bookState: "Available"
  };
  books.push(newBook);
  res.render("home", {data: books});
});

//Issue book route
app.post("/issue",(req, res)=>{
  const requestedBookName= req.body.bookName;
  books.forEach(book=>{
    if(book.bookName === requestedBookName){
      book.bookState = "Issued";
    }
  });
  res.render("home", {data: books});
});

//Return Book Route
app.post("/return", (req, res)=>{
  const requestedBookName = req.body.bookName;
  books.forEach(book =>{
    books.bookState = "Available";
  });
  res.render("home", {data: books});
});

//Delete Book Route
app.post("/delete", (req, res)=>{
  const requestedBookName = req.body.bookName;
  books = books.filter(book=>book.book.bookName !== requestedBookName);
  res.render("home", {data: books});
});

//start server
app.listen(port, ()=>{
  console.log(`App is running on port ${port}`);
});
