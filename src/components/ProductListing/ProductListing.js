import { useCart } from "../../context/cart-context";
import Header from "../Header/Header"
import "./product-listing.css";

const ProductListing = () => {
  const {products, dispatch} = useCart();
  return (
    <div>
      <Header />  
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
              </div>
            </div>
          ))
        }
      </main>
    </div>
  )
}

export default ProductListing;