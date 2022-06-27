import { Routes, Route } from "react-router-dom";
import { Cart, Catalog, Home, Product } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:slug" element={<Product />} />
    </Routes>
  );
};

export default Routers;
