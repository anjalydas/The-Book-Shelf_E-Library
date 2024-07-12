import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import Authors , {loader as authorsLoader} from './routes/authors';
import Books, {loader as booksLoader} from './routes/books';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
      path:"/",
      element: <Home />
      },
  
    {
      path:"/authors",
      element: <Authors />,
      loader: authorsLoader
    },
    {
      path:"/authors/:authorId",
      element: <Books />,
      loader:booksLoader
    },
  ],
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
