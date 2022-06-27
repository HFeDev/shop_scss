import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import heroSliderData from "../assets/data/hero-slide";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import policy from "../assets/data/policy";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";
import productData from "../assets/data/products";
import ProductCard from "../components/ProductCard";
import { banner } from "../assets/images/imgOut";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* slide Hero */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map(({ name, description, icon }, index) => (
              <Link key={index} to="/policy">
                <PolicyCard name={name} description={description} icon={icon} />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>

      {/* best selling products
       */}
      <Section>
        <SectionTitle>Top sản phẩm bán chạy trong tuần.</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProductsRandom(4).map((item, index) => (
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

      {/* new Product */}
      <Section>
        <SectionTitle>Sản phẩm mới.</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProductsRandom(8).map((item, index) => (
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

      <Section>
        <SectionBody>
          <img src={banner} alt="banner" />
        </SectionBody>
      </Section>

      {/* popular product */}
      <Section>
        <SectionTitle>Sản phẩm có lượt tìm kiếm nhiều.</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProductsRandom(12).map((item, index) => (
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

export default Home;
