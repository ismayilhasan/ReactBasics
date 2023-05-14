import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'


const bookList = [
  {
    title:"The Covenant of Water Hardcover  May 2, 2023",
    imageSrc:"https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg",
    author:"Abraham Vershave"
  },
  {
    title:"This Is How You Lose the Time War",
    imageSrc:"https://m.media-amazon.com/images/I/51B7kuFwQFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    author:"Amal El-Mohtar"
  },
  {
    title:"Tell Me Your Life Story, Mom",
    imageSrc:"https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg",
    author:"Questions About me"
  }
]
const title = 'The Covenant of Water Hardcover  May 2, 2023'
const imageSrc = 'https://m.media-amazon.com/images/I/518+jXvFO6L._SY344_BO1,204,203,200_.jpg'
const author = "Abraham Vershave"

const BookList = () => {
  return <section className="booklist">
    {bookList.map((book) => {
      return (
        <Book {...book} key={book.id}/>
      )
    })}

  </section>;
};

const Book = (props) => {
  const {src,title,author} = props
  return <article className="book">
     <img src={imageSrc}  alt={title} />
     <h2>{title}</h2>
     <h2>{author}</h2>    
  </article>;
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList/>);
