import React from "react";
import { Link, Outlet } from "react-router-dom";

function Root(props){
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chic Couture Haven</title>
  
  <header>
    <div className="container">
      <div>
        <a href="#">
          <span className="material-symbols-outlined">menu</span>
        </a>
      </div>
      <div id="center">
        <div id="headerlogo">
        <span className="material-symbols-outlined">auto_stories</span>
          <h1 id="name">The Book Shelf</h1>
        </div>
        <div id="headerlogo">
          <input type="text" placeholder="Search.." id="search" />
          <a href="#">
            <span className="material-symbols-outlined">search</span>
          </a>
        </div>
      </div>
      <div className="navlistlink">
        <nav>
          <ul id="navlistitems">
            <li className="navlist">
            <Link to={'/'} className="link">Home</Link>
            </li>
            <li className="navlist">
            <Link to={'/category'} className="link">Collections</Link>
            </li>
            <li className="navlist">
            <Link to={'/cart'} className="link">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navlogo">
        <a href="#">
          <span className="material-symbols-outlined">account_circle</span>
        </a>
        <a href="#">
          <span className="material-symbols-outlined">shopping_bag</span>
        </a>
      </div>
    </div>
  </header>
  <Outlet />
  <footer></footer>
</>
    )
   
}
export default Root;