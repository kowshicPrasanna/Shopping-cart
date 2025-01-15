import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./product";
import Cart from "./cart";
import { CartProvider } from "./CartContext"; // Import CartProvider

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
