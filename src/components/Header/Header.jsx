import { useCart } from "../../context/cart-context";
import { NavLink } from "react-router-dom";
import "./header.css";
import siteLogo from "./img/fire-wheel.png";

export const Header = () => {
  const { itemsInCart, wishList } = useCart();
  return (
    <nav className="nav nav-dark">
      <img src={siteLogo} alt="site-logo"/>
      <span class="nav-brand">Two Tired Gears</span>
      <div class="nav-link-container">
        <NavLink className="nav-link" to="/" >Products</NavLink>
        <NavLink className="nav-link" to="/cart" >Cart | {itemsInCart.length}</NavLink>
        <NavLink className="nav-link" to="/wishlist" >Wishlist | {wishList.length}</NavLink>
      </div>
    </nav>
  )
};