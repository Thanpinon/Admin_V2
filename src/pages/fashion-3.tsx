import { Fragment } from "react";
import { GetStaticProps } from "next";
import Box from "@component/Box";
import Navbar from "@component/navbar/Navbar";
import AppLayout from "@component/layout/AppLayout";
import Section1 from "@sections/fashion-3/Section1";
import Section2 from "@sections/fashion-3/Section2";
import Section3 from "@sections/fashion-3/Section3";
import Section4 from "@sections/fashion-3/Section4";
import Section5 from "@sections/fashion-3/Section5";
import Section6 from "@sections/fashion-3/Section6";
import Section7 from "@sections/fashion-3/Section7";
import Section8 from "@sections/fashion-3/Section8";
import api from "@utils/__api__/fashion-3";
// data models
import Blog from "@models/blog.model";
import Service from "@models/service.model";
import Product from "@models/product.model";
import { MainCarouselItem } from "@models/market-2.model";

// =======================================================
type FashionShop3Props = {
  blogs: Blog[];
  services: Service[];
  products: Product[];
  featureProducts: Product[];
  mainCarouselData: MainCarouselItem[];
};
// =======================================================

const FashionThree = (props: FashionShop3Props) => {
  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      <Box bg="white" pb="4rem">
        {/* HERO CAROUSEL AREA */}
        <Section1 carouselData={props.mainCarouselData} />

        {/* MEN AND WOMEN OFFERS AREA */}
        <Section2 />

        {/* BEST SELLING PRODUCTS AREA */}
        <Section3 products={props.products} />

        {/* TOP CATEGORIES AREA */}
        <Section4 />

        {/* SALE OFFER BANNERS AREA */}
        <Section5 />

        {/* FEATURED PRODUCTS AREA */}
        <Section6 products={props.featureProducts} />

        {/* SERVICE LIST AREA */}
        <Section7 services={props.services} />

        {/* BLOG LIST AREA */}
        <Section8 blogs={props.blogs} />
      </Box>
    </Fragment>
  );
};

FashionThree.layout = AppLayout;

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await api.getBlogs();
  const products = await api.getProducts();
  const services = await api.getServices();
  const featureProducts = await api.getFeatureProducts();
  const mainCarouselData = await api.getMainCarouselData();

  return { props: { blogs, products, featureProducts, mainCarouselData, services } };
};

export default FashionThree;
