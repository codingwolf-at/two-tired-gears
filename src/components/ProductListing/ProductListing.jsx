import { useReducer } from "react";
import { useCart } from "../../context/cart-context";
import "./product-listing.css";

export const ProductListing = () => {

  const {products, dispatch: cartDispatch } = useCart();

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SORT":
  //       return {
  //         ...state,
  //         sortBy: action.payload
  //       };
  //     default: return state;
  // }

  // const [{ sortBy }, dispatch] = useReducer(reducer, { sortBy: null })

  return (
    <div>
      {/* <fieldset>
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          ></input>{" "}
          Price - Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          ></input>{" "}
          Price - High to Low
        </label>
      </fieldset> */}
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
                  <button onClick={() => cartDispatch({type: "ADD_TO_CART", payload: product})} class="btn btn-primary btn-block">ADD TO CART</button>
                  <button onClick={() => cartDispatch({type: "ADD_TO_WISHLIST", payload: product})} class="btn btn-secondary btn-block">ADD TO WISHLIST</button>
              </div>
            </div>
          ))
        }
      </main>
    </div>
  )
}