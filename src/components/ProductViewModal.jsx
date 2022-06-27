import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productData from "../assets/data/products";
import ProductView from "../components/ProductView";
import { remove } from "../redux/product-modal/productModalSlice";

const ProductViewModal = () => {
  const modalCloseRef = useRef(null);
  const navi = useNavigate();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.productModal);
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(value));
  }, [value]);

  const handClose = () => {
    modalCloseRef.current.classList.remove("active");
    navi("/cart");
  };
  return (
    <div
      ref={modalCloseRef}
      className={`product-view__modal ${
        value === product?.slug ? "active" : ""
      }`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} handClose={handClose} />
        <div
          className="product-view__modal__content__close"
          onClick={() => dispatch(remove())}
        >
          Đóng
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
