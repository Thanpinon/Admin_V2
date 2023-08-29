import { Fragment } from "react";
import { GetStaticProps } from "next";
import Box from "@component/Box";
import Navbar from "@component/navbar/Navbar";
import AppLayout from "@component/layout/AppLayout";
import Section1 from "@sections/gadget-shop/Section1";
import Section2 from "@sections/gadget-shop/Section2";
import Section3 from "@sections/gadget-shop/Section3";
import Section4 from "@sections/gadget-shop/Section4";
import Section5 from "@sections/gadget-shop/Section5";
import Section6 from "@sections/gadget-shop/Section6";
import Section7 from "@sections/gadget-shop/Section7";
import api from "@utils/__api__/gadget";
// data models
import Blog from "@models/blog.model";
import Product from "@models/product.model";
import { Banner } from "@models/gadget.model";
import Category from "@models/category.model";

// ============================================================
type GadgetShopProps = {
  blogLists: Blog[];
  twoBanner: Banner[];
  topPickList: Product[];
  mostViewedList: Product[];
  newArrivalsData: Product[];
  mainCarouselData: Product[];
  featuredCategories: Category[];
};
// ============================================================

const GadgetShop = (props: GadgetShopProps) => {
  return (
    <Fragment>
      {/* NAVIGATION BAR AREA */}
      <Navbar />

      <Box my="2rem">
        {/* TOP PICKS AND NEW WINTER PRODUCTS CAROUSEL AREA */}
        <Section1 mainCarousel={props.mainCarouselData} topPickList={props.topPickList} />

        {/* FEATURED CATEGORIES AREA */}
        <Section2 categories={props.featuredCategories} />

        {/* DISCOUNT BANNERS AREA */}
        <Section3 bannerData={props.twoBanner} />

        {/* MOST VIEWWD PRODUCTS CAROUSEL AREA */}
        <Section4 products={props.mostViewedList} />

        {/* NEW ARRIVAL PRODUCTS CAROUSEL AREA */}
        <Section5 products={props.newArrivalsData} />

        {/* OFFER BANNER AREA */}
        <Section6 />

        {/* BLOGS AREA */}
        <Section7 blogs={props.blogLists} />
      </Box>
    </Fragment>
  );
};

GadgetShop.layout = AppLayout;

export const getStaticProps: GetStaticProps = async () => {
  const twoBanner = await api.getTwoBanner();
  const blogLists = await api.getBlogLists();
  const topPickList = await api.getTopPicksList();
  const newArrivalsData = await api.getNewArrival();
  const mostViewedList = await api.getMostViewedList();
  const mainCarouselData = await api.getMainCarousel();
  const featuredCategories = await api.getFeaturedCategories();

  return {
    props: {
      blogLists,
      twoBanner,
      topPickList,
      mostViewedList,
      newArrivalsData,
      mainCarouselData,
      featuredCategories,
    },
  };
};

export default GadgetShop;
