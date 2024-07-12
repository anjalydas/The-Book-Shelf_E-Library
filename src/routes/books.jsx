import React from "react";

import BookCard from "../components/bookCard";
import { useLoaderData } from "react-router-dom";
 

  export async function loader ({params}) {
 
    const response = await fetch(`http://localhost:3000/authors/${params.authorId}`)
    const books = await response.json()

    const bookResponse = await fetch(`http://localhost:3000/books?authorName=${params.authorId}`)
    const bookList = await bookResponse.json()
    return { books, bookList};
  }
   function Books(props){ 
    const { books, bookList } = useLoaderData();
    console.log(books, bookList)
    return(
        <main>
    <section className="container">
    <h2>
            Books
        </h2>
    <div>
      {
       
          <BookCard />
        
       
      
      }
    
    </div>
    </section>
  </main>
  );
}
  
export default Books