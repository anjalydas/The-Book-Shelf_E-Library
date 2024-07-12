import React from "react";
import { Link } from "react-router-dom";

function Home(props){
  
    return(
        <main>
    <section className="container">
     <h1>Shop by </h1>
     <div className="categoryList">
     <Link to={'./authors'} className="link"><h2>Author</h2>
     </Link>
     <Link to={'./authors/:authorsId'} className="link"><h2>Book</h2>
     </Link>
     </div>
     <img src="https://cdn.hswstatic.com/gif/books-world.jpg" alt="books image" className="image" />
    </section>
  </main>
  )}
export default Home