import React from "react";
import "./index.css";
import Button from "../../../../components/Button";

function HomeIntro() {
  return (
    <div className="home-wrapper">
      <div className="home-inner">
        <div className="home-content">
          <h1 className="home-title">Find Recipies and Сreate Your Favourite Сookbooks</h1>
          <form className="home-search">
            <input
              className="home-search__input"
              type="text"
              placeholder="Find Best Recipies..."
              // value={props.searchValue}
              // onChange={props.onSearchInput}
            />
            <svg className="home-search__icon" height="16" version="1.1" viewBox="0 0 16 16" width="16">
              <path fillRule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" />
            </svg>
            <Button inputHome>SEARCH</Button>
        </form>
        <nav className="home-nav">
          <a href="#" className="home-nav__element">Vegeterian</a>
          <a href="#" className="home-nav__element">Mexican</a>
          <a href="#" className="home-nav__element">Greece Kithcen</a>
          <a href="#" className="home-nav__element">Italy Pizza</a>
          <a href="#" className="home-nav__element">Philippines</a>
          <a href="#" className="home-nav__element">Japan Sushi</a>
        </nav>
        </div>
      </div>
    </div>
  )
}

export default HomeIntro;
