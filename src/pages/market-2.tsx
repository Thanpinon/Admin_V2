import { Fragment } from "react";
import { GetStaticProps } from "next";
import Box from "@component/Box";
import Navbar from "@component/navbar/Navbar";
import AppLayout from "@component/layout/AppLayout";
import Section1 from "@sections/market-2/Section1";
import Section2 from "@sections/market-2/Section2";
import Section3 from "@sections/market-2/Section3";
import Section4 from "@sections/market-2/Section4";
import Section5 from "@sections/market-2/Section5";
import Section6 from "@sections/market-2/Section6";
import Section7 from "@sections/market-2/Section7";
import Section8 from "@sections/market-2/Section8";
import Section9 from "@sections/market-2/Section9";
import Section10 from "@sections/market-2/Section10";
// api utils
import api from "@utils/__api__/market-2";
// data models
import Brand from "@models/Brand.model";
import Service from "@models/service.model";
import Product from "@models/product.model";
import Category from "@models/category.model";
import {
  CategoryBasedProducts,
  MainCarouselItem,
} from "@models/market-2.model";

// =======================================================
type Props = {
  brands: Brand[];
  products: Product[];
  categories: Category[];
  serviceList: Service[];
  mainCarouselData: MainCarouselItem[];
  menFashionProducts: CategoryBasedProducts;
  electronicsProducts: CategoryBasedProducts;
  womenFashionProducts: CategoryBasedProducts;
};
// =======================================================

const MarketTwo = (props: Props) => {
  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      <Box bg="#F6F6F6">
        {/* HERO CAROUSEL AREA */}
        <Section1 carouselData={props.mainCarouselData} />

        {/* SERVICE LIST AREA */}
        <Section2 serviceList={props.serviceList} />

        {/* TOP CATEGORIES AREA */}
        <Section3 categories={props.categories} />

        {/* DEAL OF THE DAY PRODUCTS AREA */}
        <Section4 products={props.products} />

        {/* NEW ARRIVALS AND BEST SELLER OFFER BANNER AREA */}
        <Section5 />

        {/* ELETRONICS CATEGORY BASED PRODUCTS AREA */}
        <Section6 data={props.electronicsProducts} />

        {/* SALES OFFER BANNERS AREA */}
        <Section7 />

        {/* MEN'S CATEGORY BASED PRODUCTS AREA */}
        <Section6 data={props.menFashionProducts} />

        {/* DISCOUNT OFFER BANNER AREA */}
        <Section8 />

        {/* WOMEN'S CATEGORY BASED PRODUCTS AREA */}
        <Section6 data={props.womenFashionProducts} />

        {/* FEATURES BRAND LIST AREA */}
        <Section9 brands={props.brands} />

        {/* SELECTED PRODUCTS AREA */}
        <Section10 />
      </Box>
    </Fragment>
  );
};

MarketTwo.layout = AppLayout;

// ==============================================================

export const getStaticProps: GetStaticProps = async () => {
  const brands = await api.getBrands();
  const products = await api.getProducts();
  const serviceList = await api.getServices();
  const categories = await api.getCategories();
  const mainCarouselData = await api.getMainCarouselData();
  const menFashionProducts = await api.getMenFashionProducts();
  const electronicsProducts = await api.getElectronicsProducts();
  const womenFashionProducts = await api.getWomenFashionProducts();

  return {
    props: {
      brands,
      products,
      categories,
      serviceList,
      mainCarouselData,
      menFashionProducts,
      electronicsProducts,
      womenFashionProducts,
    },
  };
};

export default MarketTwo;
