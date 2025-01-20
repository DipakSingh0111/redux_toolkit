import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);

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
          <div className="cart-icon-container">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {cartProducts.length > 0 && (
              <span className="cart-count">{cartProducts.length}</span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
