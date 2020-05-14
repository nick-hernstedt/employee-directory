import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-info mb-4 custom-nav">
      <div className="container">
        <h1 classname="navbar-brand text-light display-4" href="/">
          Employee Directory
        </h1>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="coming soon..."
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
