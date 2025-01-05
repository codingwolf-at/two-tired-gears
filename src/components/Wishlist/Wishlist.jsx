import "./wishlist.css"
import { useCart } from "../../context/cart-context";

export const Wishlist = () => {

  const { wishList, dispatch } = useCart();

  return (
    <div className="wishlist">
      {
        wishList.map(product => (
          <div className="card">
              <img src={product.url} class="card-img-top" alt=""></img>
              <div class="card-body">
                  <div className="card-body-text">
                    <h2>{product.name}</h2>
                    <h4>Price: {product.price}/-</h4>
                  </div>
                  <button onClick={() => dispatch({type: "REMOVE_FROM_WISHLIST", payload: product})} class="btn btn-secondary btn-block">REMOVE</button>
              </div>
          </div>
        ))
      }
    </div>
  )
}