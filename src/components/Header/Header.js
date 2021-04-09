import "./header.css";
import siteLogo from "./img/fire-wheel.png";

const Header = () => {
  return (
    <nav className="nav nav-dark">
      <img src={siteLogo} alt="site-logo"/>
      <span class="nav-brand">Two Tired Gears</span>
      <div class="nav-link-container">
        <span className="nav-link">CART</span>
        <span className="nav-link">WISHLIST</span>
      </div>
    </nav>
  )
}

export default Header;