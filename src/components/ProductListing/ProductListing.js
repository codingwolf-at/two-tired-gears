import { useCart } from "../../context/cart-context";
import "./product-listing.css";

export const ProductListing = () => {
  const {products, dispatch} = useCart();
  return (
    <div>
      <main className="product-listing">
        {
          products.map(product => (
            <div className="card">
              <img src={product.url} class="card-img-top" alt=""></img>
              <div class="card-body">
                  <div className="card-body-text">
                    <h2>{product.name}</h2>
                    <h4>Price: {product.price}/-</h4>
                  </div>
                  <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})} class="btn btn-primary btn-block">ADD TO CART</button>
                  <button onClick={() => dispatch({type: "ADD_TO_WISHLIST", payload: product})} class="btn btn-secondary btn-block">ADD TO WISHLIST</button>
              </div>
            </div>
          ))
        }
      </main>
    </div>
  )
}