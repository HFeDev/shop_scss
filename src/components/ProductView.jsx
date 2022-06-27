import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Button from "./Button";

import { AiOutlineMinus } from "react-icons/ai";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addCart } from "../redux/shopping-cart/cartItemSlice";

const ProductView = ({ product, handClose }) => {
  const dispatch = useDispatch();

  const navi = useNavigate();

  const [previewImg, setPreviewImg] = useState(product?.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    setSize(undefined);
    setColor(undefined);
    setQuantity(1);
    setDescriptionExpand(false);
    setPreviewImg(product?.image01);
  }, [product]);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const check = () => {
    if (color === undefined) {
      alert("hãy chọn size và màu");
      return false;
    }
    if (size === undefined) {
      alert("hãy chọn size và màu");
      return false;
    }

    return true;
  };

  const addCartProduct = () => {
    if (check()) {
      dispatch(
        addCart({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price
        })
      );
    }
    alert("thêm thành công");
  };

  return (
    <div className="product">
      {/* product images */}
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product?.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product?.image02} alt="" />
          </div>
        </div>

        <div className="product__images__main">
          <img src={previewImg} alt="previewImg" />
        </div>

        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
          <div className="product-description__toggle">
            <Button handeClick={() => setDescriptionExpand(!descriptionExpand)}>
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>

      {/* product__info */}
      <div className="product__info">
        <h1 className="product__info__title">{product?.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {product?.price} VNĐ
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product?.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kích cỡ</div>
          <div className="product__info__item__list">
            {product?.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <AiOutlineMinus />
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <HiOutlinePlusSm />
            </div>
          </div>
        </div>

        <div className="product__info__item">
          <button onClick={() => addCartProduct()}>thêm vào giỏ</button>
          <button onClick={handClose}>mua ngay</button>
        </div>
      </div>

      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Chi tiết sản phẩm</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product?.description }}
        />
        <div className="product-description__toggle">
          <button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </button>
        </div>
      </div>
    </div>
  );
};

ProductView.PropTypes = {
  product: PropTypes.object.isRequired
};

export default ProductView;
