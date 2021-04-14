import { useCart } from "../../context/cart-context";
import "./header.css";
import siteLogo from "./img/fire-wheel.png";

export const Header = () => {
  const { dispatch, itemsInCart, wishList } = useCart();
  return (
    <nav className="nav nav-dark">
      <img src={siteLogo} alt="site-logo"/>
      <span class="nav-brand">Two Tired Gears</span>
      <div class="nav-link-container">
        <span onClick={() => dispatch({type: "ROUTE", payload: "products"})} className="nav-link">PRODUCTS</span>
        <span onClick={() => dispatch({type: "ROUTE", payload: "cart"})} className="nav-link">CART | {itemsInCart.length}</span>
        <span onClick={() => dispatch({type: "ROUTE", payload: "wishlist"})}  className="nav-link">WISHLIST | {wishList.length}</span>
      </div>
    </nav>
  )
};