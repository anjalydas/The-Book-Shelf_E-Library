import React from "react";
import { Link, useLoaderData } from "react-router-dom";


function AuthorCard(props) {
    
    const { authors } = useLoaderData();
    return(
        
        <ul className="collectionList">{
        authors.map(authors => 
        {
        return(   
            <article className="article-card">
            <li key={authors._id} className="article">
                 <h2>{authors.authorName}</h2>
        <Link to={`/authors/${authors._id}`} className="link">
        <img src={authors.image} alt=" " className="image" />        
        </Link></li>
        <span>{authors.description}</span>
        </article>
        )
        })
        }
        </ul>
      
    )
}
export default AuthorCard