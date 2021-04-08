import { createContext, useContext, useReducer } from "react";
import { mockServer } from "../api/mock-server";
mockServer();

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { itemsInCart });
  return (
    <CartContext.Provider
      value={{ products, itemsInCart: state.itemsInCart, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

const itemsInCart = [];

// reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item.id !== action.payload.id
        )
      };

    case "INCREMENT":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREMENT":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    default:
      return state;
  }
};

// initial value
const products = [
  {
    id: 1,
    name: "SCORPION EXO-490 TOUR",
    price: 13999,
    category: "helmet",
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/49-326-74-04_1024x1024_bea86405-ecf1-4cf7-8840-8d81e63dae12_400x400.png?v=1617879667",
    quantity: 1
  },
  {
    id: 2,
    name: "SCORPION EXO-1400 AIR CARBON",
    price: 37999,
    category: "helmet",
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/a_scorpionexo1400carba_beaux_whineoyel_getstung_1024x1024_2aef7437-ae25-4641-ac95-3049952460b1_400x400.png?v=1610709500",
    quantity: 1
  },
  {
    id: 3,
    name: "Adventure MIPS Dash Helmet",
    category: "helmet",
    price: 24000,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/Untitled-4_copy_1024x1024_605e3c6b-3e8e-4a55-8405-6a4f57bb98b6_400x400.jpg?v=1614526256",
    quantity: 1
  },
  {
    id: 4,
    name: "Gloss White Black Motocross Helmet",
    category: "helmet",
    price: 14999,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/Fly-Racing-Toxin-MIPS-Embargo-Gloss-White-Black-Motocross-Helmet_400x400.jpg?v=1598963952",
    quantity: 1
  },
  {
    id: 5,
    name: "Shima STX Gloves",
    category: "gloves",
    price: 4499,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/stx_fluo_double_400x400.jpg?v=1578648469",
    quantity: 1
  },
  {
    id: 6,
    name: "Rev'it Chevron 2 Gloves",
    category: "gloves",
    price: 9000,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/0002225_revit-chevron-2-gloves_400x400.jpeg?v=1536740560",
    quantity: 1
  },
  {
    id: 7,
    name: "Rev'it Sand 3 Gloves",
    category: "gloves",
    price: 8599,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/7962f8bd-e9be-4188-82fb-25306137303c_400x400.jpg?v=1574264406",
    quantity: 1
  },
  {
    id: 8,
    name: "RYNOX TORNADO PRO 3 GLOVES",
    category: "gloves",
    price: 3250,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/Rynox_Tornado_Pro_3_Gloves_Black_Blue_1_4000x_2x.progressive_751dddb2-d016-4a54-8a4c-d300917b39a1_400x400.jpg?v=1579789701",
    quantity: 1
  },
  {
    id: 9,
    name: "HELD TROPIC 3.0 SUMMER JACKET",
    category: "jacket",
    price: 12999,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/X01X06203000072_600x600_2x_1024x1024_4eef8b64-ddf0-459c-9669-c0a7db699fc4_400x400.jpg?v=1616403553",
    quantity: 1
  },
  {
    id: 10,
    name: "Rev'it Vertex Air Jacket",
    category: "jacket",
    price: 17300,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/Untitled-2_copy_compact_2x_2f9a94ea-ad98-450d-aee5-6ffadd4ea7ee_400x400.jpg?v=1607387669",
    quantity: 1
  },
  {
    id: 11,
    name: "Alpinestars Durango Air Jacket",
    category: "jacket",
    price: 16499,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/3305318-1015-fr_durango-air-jacket_web_400x400.jpg?v=1554717232",
    quantity: 1
  },
  {
    id: 12,
    name: "Alpinestars T-Gp Plus Jacket",
    category: "jacket",
    price: 18700,
    url: "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/0002163_alpinestars-t-gp-plus-r-v2-air-jacket-blackwhiteyellow_400x400.jpeg?v=1542178895",
    quantity: 1
  }
];