import "./header.css";

const Header = () => {
  return (
    <nav className="nav nav-dark">
      <span class="nav-brand">Two Tired Gears</span>
      <div class="nav-link-container">
        <span className="nav-link">CART</span>
        <span className="nav-link">WISHLIST</span>
      </div>
    </nav>
  )
}

export default Header;