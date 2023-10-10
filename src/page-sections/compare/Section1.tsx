import { FC, Fragment, useEffect, useState } from "react";
import Router from "next/router";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import { Carousel } from "@component/carousel";
import { CarouselCard1 } from "@component/carousel-cards";
import MainCarouselItem from "@models/market-1.model";
import { CardProduct } from "@sections/compare/card";
import { Button } from "@component/buttons";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import Icon from "@component/icon/Icon";

// ======================================================
// type Props = { carouselData: MainCarouselItem[] };
// ======================================================

const Section1 = ({ productDetail }) => {
  const [compareList, setCompareList] = useState([]);

  const clearCompareList = () => {
    localStorage.removeItem("compareList");
    setCompareList([]);
  };
  const deleteAllCompare = () => {
    clearCompareList();
  };

  const HEADER_LINK = (
    <Button
      color="primary"
      bg="primary.light"
      px="2rem"
      onClick={deleteAllCompare}
    >
      ล้างข้อมูล<Icon>delete</Icon>
    </Button>
  );
  useEffect(() => {
    const storedCompareList =
      JSON.parse(localStorage.getItem("compareList")) || [];

    setCompareList(storedCompareList);
  }, []);

  return (
    <Grid item lg={3} md={6} xs={6} spacing={6}>
      <CardProduct
        title={productDetail.name_th}
        brand={productDetail.brand}
        priceBefore={productDetail.price_before}
        priceSale={productDetail.price_sale}
        discount={productDetail.discount}
        imgUrl={productDetail.image}
        detail={productDetail.product_detail}
      />
    </Grid>
  );
};

export default Section1;
