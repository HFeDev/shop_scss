import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { update, remove } from "../redux/shopping-cart/cartItemSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const itemRef = useRef(null);

  const [itemCart, setItemCart] = useState(item);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setItemCart(item);
    setQuantity(item.quantity);
  }, [item]);

  const updateQuantity = (type) => {
    if (type === "+") {
      console.log("+");
      dispatch(update({ ...itemCart, quantity: quantity + 1 }));
    } else {
      dispatch(
        update({
          ...item,
          quantity: quantity - 1 === 0 ? 1 : quantity - 1
        })
      );
    }
  };

  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={itemCart.product.image01} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${itemCart.slug}`}>
            {`${itemCart.product.title} - `} <span>${itemCart.color}</span> -
            <span> {itemCart.size}</span>
          </Link>
        </div>
        <div className="cart__item__info__price">{itemCart.price}</div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("-")}
            >
              -
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("+")}
            >
              +
            </div>
          </div>
        </div>
        <div
          className="cart__item__del"
          onClick={() => dispatch(remove(itemCart))}
        >
          {/* <i className="bx bx-trash" ></i> */}remove
        </div>
      </div>
    </div>
  );
};

export default CartItem;
