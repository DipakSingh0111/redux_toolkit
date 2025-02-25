import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const Products = ({ product = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();

  const addToCarts = (product) => {
    dispatch(addToCart(product));
  };

  // Extract unique categories
  const categories = ["all", ...new Set(product.map((p) => p.category))];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? product
      : product.filter((p) => p.category === selectedCategory);

  return (
    <div className="container">
      <h1 className="title">Company Products</h1>
      <div className="filter-container">
        <label htmlFor="category">Filter by Category:</label>
        <div>
          <select
            id="category"
            className="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img
                src={product.image}
                alt={product.title}
                className="card-img"
              />
              <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-category">{product.category}</p>
                <p className="card-price">${product.price}</p>
                <div className="card-rating">
                  <span>{"⭐".repeat(Math.round(product.rating.rate))}</span>
                  <span className="reviews">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <p className="card-description">{product.description}</p>
                <div className="card-actions">
                  <button
                    className="add-to-cart"
                    onClick={() => addToCarts(product)}
                  >
                    Add to Cart
                  </button>
                  <button className="view-more">View More</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No products available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
