import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
          <ToastContainer />
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail" element={<ProductDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
