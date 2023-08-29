import { Fragment, useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import styled from "styled-components";
import Box from "@component/Box";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import SideNavbar from "@component/sidenav/SideNavbar";
import Section1 from "@sections/gift-shop/Section1";
import Section2 from "@sections/gift-shop/Section2";
import Section3 from "@sections/gift-shop/Section3";
import Section4 from "@sections/gift-shop/Section4";
import Section5 from "@sections/gift-shop/Section5";
import Section6 from "@sections/gift-shop/Section6";
import AppLayout from "@component/layout/AppLayout";
import { deviceSize, layoutConstant } from "@utils/constants";
import api from "@utils/__api__/gift";
// data models
import Product from "@models/product.model";
import Service from "@models/service.model";
import Category from "@models/category.model";
import { GiftCarouselItem } from "@models/carousel.model";
import CategoryNavList from "@models/categoryNavList.model";

// styled component
const StyledContainer = styled(Container)({
  gap: "1.75rem",
  display: "flex",
  marginBottom: "5rem",
  padding: "0 !important",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    [`@media (max-width:${deviceSize.md}px)`]: { display: "none" },
  },

  "& .pageContent": {
    left: "unset",
    position: "relative",
    width: `calc(100% - ${layoutConstant.grocerySidenavWidth})`,
    [`@media (max-width:${deviceSize.md}px)`]: { width: "100%", marginLeft: 0 },
  },
});

// ========================================================
type GiftShopProps = {
  allProducts: Product[];
  serviceList: Service[];
  topCategories: Category[];
  popularProducts: Product[];
  topSailedProducts: Product[];
  carouselData: GiftCarouselItem[];
  categoryNavigation: CategoryNavList[];
};
// ========================================================

const GiftShop = (props: GiftShopProps) => {
  const pageContentRef = useRef<HTMLDivElement>();
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => setSidebarHeight(pageContentRef.current.offsetHeight), []);

  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      {/* HERO CAROUSEL AREA */}
      <Section1 carouselData={props.carouselData} />

      <Container>
        <StyledContainer>
          {/* SIDEBAR NAVIGATION AREA */}
          <Box className="sidenav">
            <SideNavbar
              lineStyle="dash"
              sidebarStyle="style2"
              navList={props.categoryNavigation}
              sidebarHeight={sidebarHeight || "85vh"}
            />
          </Box>

          <div className="pageContent" ref={pageContentRef}>
            {/* SERVICES AREA */}
            <Section2 services={props.serviceList} />

            {/* DISCOUNT BANNER AREA */}
            <Section3 />

            {/* TOP CATEGORIES AREA */}
            <Section4 categoryList={props.topCategories} />
          </div>
        </StyledContainer>

        {/* POPULAR PRODUCTS AREA */}
        <Section5 products={props.popularProducts} title="Popular Items" />

        {/* TOP SALED PRODUCTS AREA */}
        <Section5 products={props.topSailedProducts} title="Top Saled Items" />

        {/* ALL PRODUCTS AREA */}
        <Section6 products={props.allProducts} />
      </Container>
    </Fragment>
  );
};

GiftShop.layout = AppLayout;

export const getStaticProps: GetStaticProps = async () => {
  const allProducts = await api.getAllProducts();
  const serviceList = await api.getServiceList();
  const topCategories = await api.getTopCategories();
  const carouselData = await api.getMainCarouselData();
  const popularProducts = await api.getPopularProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  const categoryNavigation = await api.getCategoryNavigation();

  return {
    props: {
      allProducts,
      serviceList,
      carouselData,
      topCategories,
      popularProducts,
      topSailedProducts,
      categoryNavigation,
    },
  };
};

export default GiftShop;
