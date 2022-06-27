import Helmet from "../components/Helmet";
import ProductData from "../assets/data/products";
import Section, { SectionTitle, SectionBody } from "../components/Section";

import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Grid from "../components/Grid";
import { useEffect } from "react";
import ProductView from "../components/ProductView";

const Product = () => {
  const { slug } = useParams();
  const product = ProductData.getProductBySlug(slug);
  const relatedProducts = ProductData.getProductsRandom(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Sản phẩm">
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                image01={item.image01}
                image02={item.image02}
                price={item.price}
                slug={item.slug}
                categorySlug={item.categorySlug}
                colors={item.colors}
                size={item.size}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
