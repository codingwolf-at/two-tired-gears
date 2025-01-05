import './App.css';
import { Routes, Route } from "react-router-dom";
import {ProductListing, Header, Cart, Wishlist} from "./components"

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
