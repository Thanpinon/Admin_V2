import { Fragment, useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import styled from "styled-components";
import Box from "@component/Box";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import AppLayout from "@component/layout/AppLayout";
import SideNavbar from "@component/sidenav/SideNavbar";
import Section1 from "@sections/furniture-shop/Section1";
import Section2 from "@sections/furniture-shop/Section2";
import Section3 from "@sections/furniture-shop/Section3";
import Section4 from "@sections/furniture-shop/Section4";
import { deviceSize, layoutConstant } from "@utils/constants";
import api from "@utils/__api__/furniture";
// data models
import Product from "@models/product.model";
import CategoryNavList from "@models/categoryNavList.model";
import { FurnitureCarouselItem } from "@models/carousel.model";

// styled component
const StyledContainer = styled(Container)({
  gap: "1.75rem",
  display: "flex",
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

// ======================================================================
type FurnitureShopProps = {
  topNewProducts: Product[];
  furnitureProducts: Product[];
  topSellingProducts: Product[];
  sidebarNavList: CategoryNavList[];
  mainCarouselData: FurnitureCarouselItem[];
};
// ======================================================================

const FurnitureShop = (props: FurnitureShopProps) => {
  const pageContentRef = useRef<HTMLDivElement>();
  const [sidebarHeight, setSidebarHeight] = useState(0);

  useEffect(() => setSidebarHeight(pageContentRef.current.offsetHeight), []);

  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      {/* HERO CAROUSEL AREA */}
      <Section1 mainCarouselData={props.mainCarouselData} />

      <Container>
        <StyledContainer>
          {/* SIDBAR NAVIGATION AREA */}
          <Box className="sidenav">
            <SideNavbar
              lineStyle="dash"
              sidebarStyle="style2"
              navList={props.sidebarNavList}
              sidebarHeight={sidebarHeight || "85vh"}
            />
          </Box>

          {/* DISCOUNT BANNER AREA */}
          <div className="pageContent" ref={pageContentRef}>
            <Section2 />
          </div>
        </StyledContainer>

        {/* TOP NEW PRODUCTS AREA */}
        <Section3 products={props.topNewProducts} title="Top New Product" />

        {/* TOP SELLING PRODUCTS AREA */}
        <Section3 products={props.topSellingProducts} title="Top Selling Product" />

        {/* ALL PRODUCTS AREA  */}
        <Section4 products={props.furnitureProducts} />
      </Container>
    </Fragment>
  );
};

FurnitureShop.layout = AppLayout;

export const getStaticProps: GetStaticProps = async () => {
  const topNewProducts = await api.getTopNewProducts();
  const mainCarouselData = await api.getMainCarouselData();
  const furnitureProducts = await api.getFurnitureProducts();
  const sidebarNavList = await api.getFurnitureShopNavList();
  const topSellingProducts = await api.getTopSellingProducts();

  return {
    props: {
      sidebarNavList,
      topNewProducts,
      mainCarouselData,
      furnitureProducts,
      topSellingProducts,
    },
  };
};

export default FurnitureShop;
