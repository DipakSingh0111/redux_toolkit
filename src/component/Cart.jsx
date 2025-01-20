
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart} from "../store/cartSlice"

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch()

    const removeToCart = (productId) =>{
        dispatch(removeFromCart(productId));
  
    }
  return (
    <div>
      <div className="container">
        <h1 className="title">Carts</h1>
        <div className="grid">
          {cartItems.length > 0 ? (
              cartItems.map((product) => (
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
                        <button className="add-to-cart" onClick={()=> removeToCart(product.id)}>Remove</button> 
                      </div>
                    </div>
                  </div>
                ))
          ) : (
              <p className="text-center text-gray-600">
                There are no Add Any products in the cart.
              </p>
            )}
        </div>
      </div>

    </div>
  )
}

export default Cart
