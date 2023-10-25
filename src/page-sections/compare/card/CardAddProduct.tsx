import { FC } from "react";

import Box from "@component/Box";
import Card from "@component/Card";
import { H6 } from "@component/Typography";

import styles from "./styles.module.css";
import { IconButton } from "@component/buttons";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import CardShowListProduct from "./CardShowListProduct";

export interface CardAddProductProps {
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
    data: any[]; // Update this to match the structure of productDetail
  };
  showAddProductBox?: () => void;
  onAddProductFromCompare?: () => void;
  back?: () => void;
}

const CardAddProduct: FC<CardAddProductProps> = ({
  onAddProduct,
  productDetail,
  showAddProductBox,
  onAddProductFromCompare,
  back,
}) => {
  return (
    <a>
      <Card boxShadow="border" height="100%" borderRadius={4} hoverEffect>
        {showAddProductBox ? (
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <FlexBox justifyContent="center" style={{ position: "relative" }}>
              <IconButton size="large" bg="white" onClick={onAddProduct}>
                <Icon variant="large" defaultcolor="currentColor">
                  add
                </Icon>
              </IconButton>
            </FlexBox>
            <H6>เลือกสินค้าเพื่อเปรียบเทียบ</H6>
          </Box>
        ) : (
          <div
            className={`${styles.fadeIn} ${
              showAddProductBox ? styles.fadeIn : styles.fadeOut
            }`}
          >
            <Box>
              <CardShowListProduct
                productDetail={productDetail}
                onAddProductFromCompare={onAddProductFromCompare}
                back={back}
              />
            </Box>
          </div>
        )}
      </Card>
    </a>
  );
};

export default CardAddProduct;
