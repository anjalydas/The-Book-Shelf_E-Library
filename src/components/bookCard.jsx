import React from "react";
import Books from "../routes/books";
import { useLoaderData } from "react-router-dom";
function BookCard(props) {
    
    const { bookList } = useLoaderData();
    return(
        
       bookList.map (book =>
        {
            return(
            <article className="article-card">
                 <li key={book._id} className="article">
            <h2>{book.title}</h2>
            <img src={book.image} alt=" " className="image" /> 
            <div id="rating">
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>☆</span>
</div>
<span>Price:{book.price}</span></li>
        </article>
            )}
    )
        
    )
}
export default BookCard