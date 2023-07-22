import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bookList from "./Books";
import { Book } from "./Book";

const BookList = () => {
  return (
    <React.Fragment>
      <section className="booklist">
        {bookList.map((book, index) => {
          return (
            // {...book}
            <Book {...book} key={book.id} number={index} />
          );
        })}
      </section>
    </React.Fragment>
  );
};

//jsx

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
