import React from "react";
import Filter from "./components/Filter";
import BooksResult from "./components/BooksResult";
import "./index.css"

function Search() {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="sidebar">
          <Filter></Filter>
        </div>
        <div className="content">
          <div className="search-nav">
            <a href="#">Recepies</a>
            <a href="#">Cookbooks</a>
          </div>
          <BooksResult></BooksResult>
        </div>
      </div>
    </div>
  )
}

export default Search;