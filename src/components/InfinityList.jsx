import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";

const InfinityList = ({ products }) => {
  const perload = 6;
  const listRef = useRef(null);

  const [data, setData] = useState(products.slice(0, perload));

  const [load, setLoad] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setData(products.slice(0, perload));
  }, [products]);

  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {data.map((item, index) => (
          <ProductCard
            key={index}
            image01={item.image01}
            image02={item.image02}
            price={item.price}
            slug={item.slug}
            title={item.title}
          />
        ))}
      </Grid>
    </div>
  );
};

export default InfinityList;
