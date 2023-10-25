import { useEffect, useState } from "react";
import Grid from "@component/grid/Grid";
import CardAddProduct from "./card/CardAddProduct";

// ======================================================
// type Props = { carouselData: MainCarouselItem[] };
// ======================================================

const Section2 = ({
  onAddProduct,
  productDetail,
  showAddProductBox,
  onAddProductFromCompare,
  back,
}) => {
  const [compareList, setCompareList] = useState([]);

  // const clearCompareList = () => {
  //   localStorage.removeItem("compareList");
  //   setCompareList([]);
  // };
  // const deleteAllCompare = () => {
  //   clearCompareList();
  // };

  // const HEADER_LINK = (
  //   <Button
  //     color="primary"
  //     bg="primary.light"
  //     px="2rem"
  //     onClick={deleteAllCompare}
  //   >
  //     ล้างข้อมูล<Icon>delete</Icon>
  //   </Button>
  // );
  useEffect(() => {
    const storedCompareList =
      JSON.parse(localStorage.getItem("compareList")) || [];

    setCompareList(storedCompareList);
  }, []);

  return (
    <Grid item lg={3} md={6} xs={12} spacing={6}>
      <CardAddProduct
        onAddProduct={onAddProduct}
        productDetail={productDetail}
        showAddProductBox={showAddProductBox}
        onAddProductFromCompare={onAddProductFromCompare}
        back={back}
      />
      {compareList && ""}
    </Grid>
  );
};

export default Section2;
