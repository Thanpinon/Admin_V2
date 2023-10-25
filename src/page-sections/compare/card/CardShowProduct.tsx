import React, { FC } from "react";
import Box from "@component/Box";
import ImageCover from "./ImageCover";
import { H6, Small } from "@component/Typography";
import styles from "./styles.module.css";
import FlexBox from "@component/FlexBox";
import Icon from "@component/icon/Icon";
import PriceFormat from "@component/PriceFormat";

export interface CardShowProductProps {
  title?: string;
  image?: string;
  price_sale?: number;
  price_before?: number;
  discount?: string;
  category_id?: string;
  product_id?: string;
  onAddProductFromCompare: (product: {
    product_id: string;
    category_id: string;
  }) => void;
}

const CardShowProduct: FC<CardShowProductProps> = ({
  title,
  image,
  price_sale,
  price_before,
  product_id,
  category_id,
  onAddProductFromCompare,
}) => {
  return (
    <Box
      display="flex"
      mx="auto"
      mt="1rem"
      style={{ paddingBottom: "1rem", borderBottom: "1px solid #f1f1f1" }}
    >
      <Box display="flex" alignItems="center">
        <ImageCover imageUrl={image} width="70px" height="70px" />
      </Box>
      <Box marginLeft="5px" flex="1" display="flex" flexDirection="column">
        <Box
          height="auto"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          <H6>{title}</H6>
        </Box>

        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          marginTop="auto"
        >
          <Box>
            <H6 fontWeight={800} color="ihavecpu.main" mr="5px">
              <PriceFormat price={price_sale} />
            </H6>
          </Box>
          <Box>
            <Small
              fontSize={10}
              fontWeight={500}
              color="inherit.main"
              className={styles.beforePrice}
            >
              <PriceFormat price={price_before} />
            </Small>
          </Box>
          <Box flex={1}></Box>
          <Box>
            <Icon
              onClick={() =>
                onAddProductFromCompare({ product_id, category_id })
              }
              variant="small"
              defaultcolor="currentColor"
              className={styles.icon}
            >
              compare
            </Icon>
          </Box>
        </FlexBox>
      </Box>
    </Box>
  );
};

export default CardShowProduct;
