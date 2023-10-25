import { Fragment, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import { H5 } from "@component/Typography";
import NavbarLayout from "@component/layout/NavbarLayout";
import ProductIntro from "@component/products/ProductIntro";
import SameBrandProducts from "@component/products/SameBrandProducts";
import ProductDescription from "@component/products/ProductDescription";
import TestResult from "@component/products/TestResult";
import Overview from "@component/products/Overview";
import ProductDetail from "@component/products/ProductDetail";
import api from "@utils/__api__/products";
import Shop from "@models/shop.model";
import Product from "@models/product.model";
import Products from "@models/products.model";

// ===============================================================
type Props = {
  product: Products;
  shops: Shop[];
  sameBrandProducts: Products[];
  relatedProducts: Product[];
  frequentlyBought: Product[];
};
// ===============================================================

const ProductDetails = (props: Props) => {
  const { product, sameBrandProducts } = props;

  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("overview");

  const handleOptionClick = (opt) => () => setSelectedOption(opt);

  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Fragment>
      <ProductIntro
        id={product.product_code}
        category_id={parseInt(product.cat_id)}
        price={parseFloat(product.market_price)}
        title={product.name_th}
        images={product.images}
      />

      <FlexBox
        borderBottom="1px solid"
        borderColor="gray.400"
        mt="80px"
        mb="26px"
        flexWrap="wrap"
      >
        <H5
          mr="10px"
          p="4px 10px"
          className="cursor-pointer"
          borderColor="primary.main"
          onClick={handleOptionClick("overview")}
          borderBottom={selectedOption === "overview" && "2px solid"}
          color={selectedOption === "overview" ? "primary.main" : "text.muted"}
        >
          ทั้งหมด
        </H5>
        <H5
          mr="10px"
          p="4px 10px"
          className="cursor-pointer"
          borderColor="primary.main"
          onClick={handleOptionClick("testResult")}
          borderBottom={selectedOption === "testResult" && "2px solid"}
          color={
            selectedOption === "testResult" ? "primary.main" : "text.muted"
          }
        >
          ผลเทส
        </H5>
        <H5
          mr="10px"
          p="4px 10px"
          className="cursor-pointer"
          borderColor="primary.main"
          onClick={handleOptionClick("productDetail")}
          borderBottom={selectedOption === "productDetail" && "2px solid"}
          color={
            selectedOption === "productDetail" ? "primary.main" : "text.muted"
          }
        >
          รายละเอียดสินค้า
        </H5>
        <H5
          mr="25px"
          p="4px 10px"
          className="cursor-pointer"
          borderColor="primary.main"
          onClick={handleOptionClick("description")}
          borderBottom={selectedOption === "description" && "2px solid"}
          color={
            selectedOption === "description" ? "primary.main" : "text.muted"
          }
        >
          คุณสมบัติสินค้า
        </H5>

        {/* <H5
          p="4px 10px"
          className="cursor-pointer"
          borderColor="primary.main"
          onClick={handleOptionClick("review")}
          borderBottom={selectedOption === "review" && "2px solid"}
          color={selectedOption === "review" ? "primary.main" : "text.muted"}
        >
          รีวิวสินค้า (3)
        </H5> */}
      </FlexBox>

      {/* DESCRIPTION AND REVIEW TAB DETAILS */}
      <Box mb="50px">
        {selectedOption === "overview" && <Overview />}
        {selectedOption === "testResult" && <TestResult />}
        {selectedOption === "productDetail" && <ProductDetail />}
        {selectedOption === "description" && <ProductDescription />}
        {/* {selectedOption === "review" && <ProductReview />} */}
      </Box>

      {/* FREQUENTLY BOUGHT TOGETHER PRODUCTS */}
      {/* {frequentlyBought && <FrequentlyBought products={frequentlyBought} />} */}

      {/* AVAILABLE SHOPS */}
      {/* {shops && <AvailableShops shops={shops} />} */}

      {/* RELATED PRODUCTS */}
      {sameBrandProducts && <SameBrandProducts products={sameBrandProducts} />}

      {/* {relatedProducts && <RelatedProducts products={relatedProducts} />} */}
    </Fragment>
  );
};

ProductDetails.layout = NavbarLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await api.getSlugs();

  return {
    paths: paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const shops = await api.getAvailableShop();
  const sameBrandProducts = await api.getSameBrandProducts();
  const relatedProducts = await api.getRelatedProducts();
  const frequentlyBought = await api.getFrequentlyBought();
  const product = await api.getProduct(params.slug as string);

  return {
    props: {
      frequentlyBought,
      relatedProducts,
      product,
      shops,
      sameBrandProducts,
    },
  };
};

export default ProductDetails;
