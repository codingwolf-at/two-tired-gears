import { useCart } from "../../context/cart-context";
import "./cart.css";

export const Cart = () => {

  const { itemsInCart, dispatch } = useCart();

  const calculateTotal = (acc, num) => acc + num.price * num.quantity;
  const totalAmount = itemsInCart.reduce(calculateTotal, 0);
  
  return (
    <div className="cart">
      <h2>Total Cart Amount: Rs {totalAmount}/-</h2>
      <div className="cart-listing">
        {
          itemsInCart.map(product => (
            <div className="card">
              <img src={product.url} class="card-img-top" alt=""></img>
              <div class="card-body">
                  <div className="card-body-text">
                    <h2>{product.name}</h2>
                    <h4>Price: {product.price}/-</h4>
                  </div>
                  <button onClick={() => dispatch({ type: "INCREMENT", payload: product })} className="btn btn-block">+</button>
                  <span className="qty-text">{product.quantity}</span>
                  <button onClick={() => dispatch({ type: "DECREMENT", payload: product })} className="btn btn-block">-</button>
                  <button onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: product})} class="btn btn-secondary btn-block">REMOVE</button>
              </div>
            </div>
            ))
          }
      </div>
    </div>
  )
}