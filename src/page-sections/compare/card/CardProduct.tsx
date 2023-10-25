import { FC } from "react";
import NextImage from "next/image";
import Box from "@component/Box";
import Card from "@component/Card";
import { H4, H6, Small } from "@component/Typography";
import { Chip } from "@component/Chip";
import Grid from "@component/grid/Grid";
import styles from "./styles.module.css";
import { IconButton, Button } from "@component/buttons";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";

export interface CardProductProps {
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
  onRemoveFromCompare: () => void;
  shouldRenderDeleteButton?: boolean;
  classStyle?: string;
}

const CardProduct: FC<CardProductProps> = ({
  imgUrl,
  title,

  priceBefore,
  priceSale,
  discount,
  detail,
  onRemoveFromCompare,
  shouldRenderDeleteButton,
  classStyle,
}) => {
  const getColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "secondary";
      case "Processing":
        return "secondary";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "error";
      default:
        return "";
    }
  };
  return (
    <a>
      <Card
        boxShadow="border"
        height="100%"
        borderRadius={4}
        hoverEffect
        className={classStyle}
      >
        <Box mb="1rem" p="2rem">
          <FlexBox justifyContent="right" style={{ position: "relative" }}>
            {shouldRenderDeleteButton ? (
              <IconButton size="small" bg="white" onClick={onRemoveFromCompare}>
                <Icon variant="medium" defaultcolor="currentColor">
                  delete
                </Icon>
              </IconButton>
            ) : (
              <Box mb="3rem"></Box>
            )}
          </FlexBox>

          <Grid item lg={12}>
            <div className={styles.imageContainer}>
              <Box justifyContent="right" className={styles.extraIcons}>
                <Icon color="secondary" variant="small" mb="0.5rem">
                  eye
                </Icon>

                <Icon
                  color="secondary"
                  className="favorite-icon outlined-icon"
                  variant="small"
                >
                  heart
                </Icon>
              </Box>
              <NextImage
                width={140}
                height={120}
                alt="shoes"
                layout="responsive"
                objectFit="cover"
                src={imgUrl}
              />
            </div>
          </Grid>
        </Box>

        <Box p="1rem 2rem">
          {/* BRAND */}
          <Chip
            p="0.25rem 1rem"
            mb="0.5rem"
            bg={`${getColor("Cancelled")}.light`}
          >
            <Small color={`${getColor("Cancelled")}.main`}>Intel</Small>
          </Chip>

          <H6 fontWeight={800} mb="0.5rem">
            {title}
          </H6>
          <FlexBox>
            <Box>
              <Chip
                mr="5px"
                p="4px 5px"
                fontSize="10px"
                fontWeight={800}
                bg="ihavecpu.main"
                color="primary.text"
              >
                {discount}
              </Chip>
            </Box>
            <Box>
              <H4 fontWeight={800} color="ihavecpu.main" mr="5px">
                ฿{priceSale}
              </H4>
            </Box>
            <Box>
              <Small
                fontSize={11}
                fontWeight={500}
                color="inherit.main"
                className={styles.beforePrice}
              >
                ฿{priceBefore}
              </Small>
            </Box>
          </FlexBox>
          <Box mt="1rem">
            <Button
              width="100%"
              color="primary"
              bg="primary.light"
              type="button"
            >
              หยิบใส่ตะกร้า<Icon>shopping-cart</Icon>
            </Button>
          </Box>
        </Box>

        <Box>
          <Card
            bg="ihavecpu.main"
            height={35}
            borderRadius={20}
            className={styles.productMainTitle}
          >
            <H6 color="white">รายละเอียดสินค้า</H6>
          </Card>
        </Box>

        <Box p="1rem 2rem">
          {detail?.filters.map((filter) => (
            <div key={filter.filter_id}>
              <H4 fontSize={14} fontWeight={700}>
                {filter.name_th}
              </H4>
              <H4
                fontSize={14}
                fontWeight={500}
                mb="0.5rem"
                className={styles.productDetailSpec}
              >
                {filter.subfilter_names}
              </H4>
            </div>
          ))}
        </Box>
      </Card>
    </a>
  );
};

export default CardProduct;
