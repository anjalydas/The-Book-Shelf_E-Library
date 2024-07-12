import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AuthorCard from "../components/authorCard";
export async function loader (params) {
 
    const response = await fetch(`http://localhost:3000/authors`)
    const authors = await response.json()

   return { authors}
    
}
function Authors(props){
  const { authors } = useLoaderData();
  console.log(authors)
    return(
      <main className="container">
        <div >
          <h1>Shop By Authors</h1>
        <AuthorCard />
     </div>
    </main>
    )
}
export default Authors