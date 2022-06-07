const express = require("express");
const {getListBook,getBook,updateBook,deleteBook,createBook,  getBookByAuthor,getBookByCategoryBook,getBookByPublisher,getBookByBookshelf,createBorrowBook,createBorrowDetaildBook
} =require("../controllers/sach.controllers");

const sachRouter = express.Router();
sachRouter.post("/create" ,createBook);
sachRouter.get("/get-list-book" ,getListBook);
sachRouter.get("/:id" ,getBook);
sachRouter.put("/:id" ,updateBook);
sachRouter.delete("/:id" ,deleteBook);
sachRouter.get("/get-book-by-author/:id" ,getBookByAuthor);
sachRouter.get("/get-book-by-category-book/:id" ,getBookByCategoryBook);
sachRouter.get("/get-book-by-publisher/:id" ,getBookByPublisher);
sachRouter.get("/get-book-by-bookshelf/:id" ,getBookByBookshelf);
sachRouter.post("/create-borrow-books" ,createBorrowBook);
sachRouter.post("/create-borrow-detaild" ,createBorrowDetaildBook);


module.exports = {
  sachRouter,
    
  };
  