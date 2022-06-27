import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";

import { set } from "../redux/product-modal/productModalSlice";

const ProductCard = ({
  title,
  price,
  image01,
  image02,
  slug,
  colors,
  categorySlug,
  size
}) => {
  const { value } = useSelector((state) => state.productModal);
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <Link to={`/catalog/${slug}`}>
        <div className="product-card__img">
          <img src={image01} alt="" />
          <img src={image02} alt="" />
        </div>

        <h3 className="product-card__name">{title}</h3>
        <div className="product-card__price">
          {price}
          <span className="product-card__price__old">
            <del>9999</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          icon={true}
          animate={true}
          handeClick={() => dispatch(set(slug))}
        >
          Chọn mua
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
