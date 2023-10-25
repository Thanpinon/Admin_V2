import { FC, useState, useEffect } from "react";
import Box from "@component/Box";
import { H4 } from "@component/Typography";
import styles from "./styles.module.css";
import { IconButton } from "@component/buttons";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import SearchProduct from "./SearchProduct";
import CardShowProduct from "./CardShowProduct";
import { CardShowProductProps } from "./CardShowProduct";

export interface CardShowListProductProps {
  title?: string;
  brand?: string;
  priceBefore?: string;
  priceSale?: string;
  discount?: string;
  sku?: string;
  imgUrl?: string;
  detail?: {
    filters: {
      filter_id: string;
      name_th: string;
      subfilter_names: string;
    }[];
  };
  onAddProduct?: () => void;
  productDetail?: {
    data: any[];
  };
  onAddProductFromCompare?: () => void;
  back?: () => void;
}

const CardShowListProduct: FC<CardShowListProductProps> = ({
  productDetail,
  onAddProductFromCompare,
  back,
}) => {
  const [compareList, setCompareList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allProduct, setAllProduct] = useState([]);

  const handleSearchResultChange = (
    filteredProducts: CardShowProductProps[],
    term: string
  ) => {
    console.log("Filtered Products:", filteredProducts);
    console.log("Search Term:", term);
    setFilteredResults(filteredProducts);
    setSearchTerm(term);
  };

  useEffect(() => {
    const storedCompareList =
      JSON.parse(localStorage.getItem("compareList")) || [];
    setCompareList(storedCompareList);
  }, []);

  useEffect(() => {
    const compareListIds = compareList.map((item) => item.id);

    const productsToShow = productDetail.data.filter(
      (product) => !compareListIds.includes(product.product_id)
    );

    setAllProduct(productsToShow);
    setFilteredResults(productsToShow);
  }, [productDetail.data, compareList]);
  return (
    <a>
      <Box
        p="2rem"
        style={{
          paddingBottom: "1rem",
          borderBottom: "1px solid #f1f1f1",
          position: "sticky",
          top: 0,
          background: "white",
        }}
      >
        <FlexBox justifyContent="space-between" alignItems="center">
          <IconButton size="extrasmall" bg="white" onClick={back}>
            <Icon variant="small" defaultcolor="currentColor">
              back1
            </Icon>
          </IconButton>
          <H4 textAlign="center">เลือกสินค้า</H4>
        </FlexBox>
        <Box mt="0.5rem">
          <SearchProduct
            productDetail={allProduct}
            onSearchResultChange={handleSearchResultChange}
          />
        </Box>
      </Box>
      <Box
        p="1rem"
        className={styles.myContainer}
        style={{
          maxHeight: "100%",
          overflow: "auto",
        }}
      >
        <Box maxHeight="400px">
          {searchTerm
            ? filteredResults.length > 0
              ? filteredResults.map((item, index) => (
                  <CardShowProduct
                    key={index}
                    title={item.name_th}
                    image={item.image}
                    category_id={item.category_id}
                    product_id={item.product_id}
                    discount={item.discount}
                    price_before={item.price_before}
                    price_sale={item.price_sale}
                    onAddProductFromCompare={onAddProductFromCompare}
                  />
                ))
              : ""
            : allProduct.length > 0
            ? allProduct.map((item, index) => (
                <CardShowProduct
                  key={index}
                  title={item.name_th}
                  image={item.image}
                  category_id={item.category_id}
                  product_id={item.product_id}
                  discount={item.discount}
                  price_before={item.price_before}
                  price_sale={item.price_sale}
                  onAddProductFromCompare={onAddProductFromCompare}
                />
              ))
            : "No products found"}
        </Box>
      </Box>
    </a>
  );
};

export default CardShowListProduct;
