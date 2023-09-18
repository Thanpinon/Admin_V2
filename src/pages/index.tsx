import { Fragment } from "react";
import { GetStaticProps } from "next";
import Box from "@component/Box";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import AppLayout from "@component/layout/AppLayout";
import Section1 from "@sections/fashion-1/Section1";
import Section2 from "@sections/fashion-1/Section2";
import Section3 from "@sections/fashion-1/Section3";
import Section4 from "@sections/fashion-1/Section4";
import Section5 from "@sections/fashion-1/Section5";
import Section6 from "@sections/fashion-1/Section6";
import Section7 from "@sections/fashion-1/Section7";
import Section8 from "@sections/fashion-1/Section8";
import Section9 from "@sections/fashion-1/Section9";
import api from "@utils/__api__/fashion-1";
import Service from "@models/service.model";
import Product from "@models/product.model";

// =======================================================
type FashionShop1Props = {
  hotDealList: any[];
  dealOfTheWeek: any[];
  serviceList: Service[];
  trendingItems: Product[];
  flashDealsData: Product[];
  newArrivalsData: Product[];
};
// =======================================================

const FashionOne = (props: FashionShop1Props) => {
  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />

      <Container my="2rem">
        {/* DISCOUNT BANNER AREA */}
        <Section1 />

        {/* SERVICES AND SPECIAL OFFER AREA */}
        <Box mb="3.75rem">
          <Section2 />
        </Box>

        {/* FLASH DEAL PRODUCTS AREA */}
        <Section3 products={props.flashDealsData} />

        {/* NEW ARRIVAL PRODUCTS AREA */}
        <Section4 products={props.newArrivalsData} />

        {/* DEALS OF WEEK PRODUCTS AREA */}
        <Section5 list={props.dealOfTheWeek} />

        {/* DEAL OF THE DAY CAROUSEL AREA */}
        <Section6 list={props.hotDealList} />

        {/* TRENDING PRODUCTS AREA */}
        <Section7 products={props.trendingItems} />

        {/* SERVICES AREA */}
        <Section8 serviceList={props.serviceList} />

        {/* NEWSLETTER AREA */}
        <Section9 />
      </Container>
    </Fragment>
  );
};

FashionOne.layout = AppLayout;

export const getStaticProps: GetStaticProps = async () => {
  const hotDealList = await api.getHotDealList();
  const serviceList = await api.getServiceList();
  const flashDealsData = await api.getFlashDeals();
  const trendingItems = await api.getTrendingItems();
  const newArrivalsData = await api.getNewArrivals();
  const dealOfTheWeek = await api.getDealOfTheWeekList();

  return {
    props: {
      hotDealList,
      serviceList,
      dealOfTheWeek,
      trendingItems,
      flashDealsData,
      newArrivalsData,
    },
  };
};

export default FashionOne;
