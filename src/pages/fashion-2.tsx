import { Fragment } from "react";
import { GetStaticProps } from "next";
import Box from "@component/Box";
import Navbar from "@component/navbar/Navbar";
import AppLayout from "@component/layout/AppLayout";
import Section1 from "@sections/fashion-2/Section1";
import Section2 from "@sections/fashion-2/Section2";
import Section3 from "@sections/fashion-2/Section3";
import Section4 from "@sections/fashion-2/Section4";
import Section5 from "@sections/fashion-2/Section5";
import Section6 from "@sections/fashion-2/Section6";
import Section7 from "@sections/fashion-2/Section7";
import Section8 from "@sections/fashion-2/Section8";
import Section9 from "@sections/fashion-2/Section9";
import Section10 from "@sections/fashion-2/Section10";
import api from "@utils/__api__/fashion-2";
// data-models
import Blog from "@models/blog.model";
import Brand from "@models/Brand.model";
import Product from "@models/product.model";
import Service from "@models/service.model";
import Category from "@models/category.model";
import MainCarouselItem from "models/market-1.model";

// =======================================================
type Props = {
  blogs: Blog[];
  brands: Brand[];
  products: Product[];
  categories: Category[];
  serviceList: Service[];
  saleProducts: Product[];
  latestProducts: Product[];
  featureProducts: Product[];
  popularProducts: Product[];
  bestWeekProducts: Product[];
  mainCarouselData: MainCarouselItem[];
};
// =======================================================

const FashionTwo = (props: Props) => {
  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      <Box bg="white">
        {/* HERO CAROUSEL AREA */}
        <Section1 data={props.mainCarouselData} />

        {/* SERVICES AREA */}
        <Section2 serviceList={props.serviceList} />

        {/* BEST SELLING CATEGORIES AREA */}
        <Section3 categories={props.categories} />

        {/* BEST SELLING PRODUCTS AREA */}
        <Section4 products={props.products} />

        {/* DISCOUNT OFFER BANNERS AREA */}
        <Section5 />

        {/* FEATURED PRODUCTS AREA */}
        <Section6 products={props.featureProducts} />

        {/* SUMMER SALE OFFER AREA */}
        <Section7 />

        {/* LATEST ARTICLES AREA */}
        <Section8 blogs={props.blogs} />

        {/* CLIENTS CAROUSEL AREA */}
        <Section9 brands={props.brands} />

        {/* SALE, LATEST, POPULAR PRODUCTS AREA */}
        <Section10
          saleProducts={props.saleProducts}
          latestProducts={props.latestProducts}
          popularProducts={props.popularProducts}
          bestWeekProducts={props.bestWeekProducts}
        />
      </Box>
    </Fragment>
  );
};

FashionTwo.layout = AppLayout;

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await api.getBlogs();
  const brands = await api.getBrands();
  const products = await api.getProducts();
  const serviceList = await api.getServices();
  const categories = await api.getCategories();
  const saleProducts = await api.getSaleProducts();
  const latestProducts = await api.getLatestProducts();
  const popularProducts = await api.getPopularProducts();
  const featureProducts = await api.getFeatureProducts();
  const bestWeekProducts = await api.getBestWeekProducts();
  const mainCarouselData = await api.getMainCarouselData();

  return {
    props: {
      blogs,
      brands,
      products,
      categories,
      serviceList,
      saleProducts,
      latestProducts,
      popularProducts,
      featureProducts,
      bestWeekProducts,
      mainCarouselData,
    },
  };
};

export default FashionTwo;
