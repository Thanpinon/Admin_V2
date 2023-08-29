import { FC } from "react";
import NextImage from "next/image";
import Box from "@component/Box";
import Rating from "@component/rating";
import FlexBox from "@component/FlexBox";
import HoverBox from "@component/HoverBox";
import { H4, Small } from "@component/Typography";
import { currency } from "@utils/utils";

// =======================================================
type ProductCard4Props = {
  title: string;
  price: number;
  rating: number;
  imgUrl: string;
  reviewCount: number;
};
// =======================================================

const ProductCard4: FC<ProductCard4Props> = (props) => {
  const { imgUrl, rating, title, price, reviewCount } = props;

  return (
    <Box>
      <HoverBox mb="1rem" mx="auto" borderRadius={8}>
        <NextImage src={imgUrl} width={100} height={100} layout="responsive" alt={title} />
      </HoverBox>

      <FlexBox justifyContent="center" alignItems="center" mb="0.25rem">
        <Rating value={rating} color="warn" />

        <Small fontWeight="600" pl="0.25rem">
          ({reviewCount})
        </Small>
      </FlexBox>

      <H4 fontWeight="600" fontSize="14px" textAlign="center" mb="0.25rem" title={title} ellipsis>
        {title}
      </H4>

      <H4 fontWeight="600" fontSize="14px" textAlign="center" color="primary.main">
        {currency(price)}
      </H4>
    </Box>
  );
};

export default ProductCard4;
