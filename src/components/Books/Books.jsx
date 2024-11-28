import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4 text-center">Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
