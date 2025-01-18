// import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        MyShop
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Products
        </Link>
        <Link to="/cart" className="navbar-cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
