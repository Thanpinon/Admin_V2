import { useEffect, useState, Fragment } from "react";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Navbar from "@component/navbar/Navbar";
import AppLayout from "@component/layout/AppLayout";
import Section1 from "@sections/compare/Section1";
import Container from "@component/Container";
import { Button } from "@component/buttons";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import axios from "axios";
import Icon from "@component/icon/Icon";

const ComparePage = () => {
  const [compareList, setCompareList] = useState([]);
  const [apiResponse, setApiResponse] = useState(null); // State to store API response

  const clearCompareList = () => {
    localStorage.removeItem("compareList");
    setCompareList([]);
  };

  const deleteAllCompare = () => {
    clearCompareList();
    // You can clear the apiResponse here as well if you don't want to display the data after clearing
    setApiResponse(null);
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

    const productIds = storedCompareList.map((product) => product.id);

    const apiUrl = `http://localhost:8000/api/compare?product_ids=${productIds.join(
      ","
    )}`;
    if (productIds.length > 0) {
      axios
        .get(apiUrl)
        .then((response) => {
          setApiResponse(response.data);
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    }
  }, []);

  return (
    <Fragment>
      {/* NAVBAR AREA */}
      <Navbar />
      <Container my="3rem">
        {apiResponse && (
          <Box mb="1.5rem">
            <DashboardPageHeader
              iconName="compare1"
              title="เปรียบเทียบสินค้า"
              button={HEADER_LINK}
            />
            <Grid container spacing={6}>
              {apiResponse.data.map((productDetail) => (
                <Section1
                  key={productDetail.product_id}
                  productDetail={productDetail}
                />
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Fragment>
  );
};

export default ComparePage;
