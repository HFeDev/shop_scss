import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";

import { IoMdClose } from "react-icons/io";

import ProductData from "../assets/data/products";
import category from "../assets/data/category";
import colors from "../assets/data/product-colors";
import size from "../assets/data/product-size";
import Button from "../components/Button";
import { useCallback, useEffect, useRef, useState } from "react";
import InfinityList from "../components/InfinityList";

const Catalog = () => {
  const filterRef = useRef(null);
  const initFilter = {
    size: [],
    colors: [],
    category: []
  };

  const productList = ProductData.getAllProducts();

  const [filter, setFilter] = useState(initFilter);
  const [products, setProducst] = useState(productList);

  const filterSelect = (checked, type, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug]
          });
          break;
        case "COLORS":
          setFilter({
            ...filter,
            colors: [...filter.colors, item.color]
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size]
          });
          break;
        default:
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (val) => val !== item.categorySlug
          );
          setFilter({
            ...filter,
            category: newCategory
          });
          break;
        case "COLORS":
          const newColors = filter.colors.filter((val) => val !== item.color);
          setFilter({
            ...filter,
            colors: newColors
          });

          break;
        case "SIZE":
          const newSize = filter.size.filter((val) => val !== item.size);
          setFilter({
            ...filter,
            size: newSize
          });

          break;
        default:
          return;
      }
    }
  };

  const updateProducts = useCallback(() => {
    let productUpdate = productList;

    if (filter.category.length > 0) {
      productUpdate = productUpdate.filter(({ categorySlug }) =>
        filter.category.includes(categorySlug)
      );
    }

    if (filter.colors.length > 0) {
      productUpdate = productUpdate.filter((item) => {
        const check = item.colors.find((color) =>
          filter.colors.includes(color)
        );
        return check !== undefined;
      });
    }

    if (filter.size.length > 0) {
      productUpdate = productUpdate.filter((item) => {
        const check = item.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProducst(productUpdate);
  }, [productList, filter]);

  const clear__filter = () => {
    setFilter(initFilter);
  };

  useEffect(() => {
    updateProducts();
  }, [filter, updateProducts]);

  const handeToggleShowHiden = () => {
    filterRef.current.classList.toggle("active");
  };

  return (
    <Helmet title="Mục lục">
      <div className="catalog">
        {/* filter */}
        <div className="catalog__filter" ref={filterRef}>
          <IoMdClose
            className="catalog__filter__icon"
            onClick={handeToggleShowHiden}
          />
          {/* filter category */}
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Danh mục sản phẩm
            </div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(inputRef) =>
                      filterSelect(inputRef.checked, "CATEGORY", item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* filter colors */}
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Màu sắc</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(inputRef) =>
                      filterSelect(inputRef.checked, "COLORS", item)
                    }
                    checked={filter.colors.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* filter size */}
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Kích cỡ</div>
            <div className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <div
                  key={index}
                  className="catalog__filter__widget__content__item"
                >
                  <CheckBox
                    label={item.display}
                    onChange={(inputRef) =>
                      filterSelect(inputRef.checked, "SIZE", item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* filter btn */}
          <div className="catalog__filter__widget">
            <div className="atalog__filter__widget__content">
              <Button handeClick={clear__filter}>Xóa bộ lọc</Button>
            </div>
          </div>

          {/* end filter */}
        </div>

        {/* show hiden tablet */}
        <div className="catalog__show">
          <Button handeClick={handeToggleShowHiden}>Bộ lọc</Button>
        </div>

        {/* content card filter */}
        <div className="catalog__content">
          <InfinityList products={products} />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
