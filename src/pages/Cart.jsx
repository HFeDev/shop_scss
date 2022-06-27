import Helmet from "../components/Helmet";
import productData from "../assets/data/products";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(1);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cart));
    setTotalProducts(
      productData.getCartItemsInfo(cart).reduce((pre, curr) => {
        return pre + Number(curr.quantity);
      }, 0)
    );
    setTotalPrice(
      productData.getCartItemsInfo(cart).reduce((pre, curr) => {
        return pre + Number(curr.quantity) * Number(curr.price);
      }, 0)
    );
  }, [cart]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span> <span>{Number(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Đặt hàng</Button>
            <Link to="/catalog">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
