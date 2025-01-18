const Carts = ({ product = [] }) => {

  return (
    <div className="container">
      <h1 className="title">Company Products</h1>
      <div className="grid">
        {product.length > 0 ? (
            product.map((product) => (
                <div key={product.id} className="card">
                  <img src={product.image} alt={product.title} className="card-img" />
                  <div className="card-content">
                    <h2 className="card-title">{product.title}</h2>
                    <p className="card-category">{product.category}</p>
                    <p className="card-price">${product.price}</p>
                    <div className="card-rating">
                      <span>{"⭐".repeat(Math.round(product.rating.rate))}</span>
                      <span className="reviews">({product.rating.count} reviews)</span>
                    </div>
                    <p className="card-description">{product.description}</p>
                    <div className="card-actions">
                      <button className="add-to-cart">Add to Cart</button>
                      <button className="view-more">View More</button>
                    </div>
                  </div>
                </div>
              ))
        ) : (
            <p className="text-center text-gray-600">
              There are no products available in the cart.
            </p>
          )}
      </div>
    </div>
  );
};

export default Carts;
