import './App.css';
import {ProductListing, Header, Cart, Wishlist} from "./components"
import { useCart } from './context/cart-context';

function App() {

  const { route } = useCart();

  return (
    <div className="App">
      <Header />
      {route === "products" && <ProductListing />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <Wishlist />}
    </div>
  );
}

export default App;
