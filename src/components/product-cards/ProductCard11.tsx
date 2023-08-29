import { FC } from "react";
import Link from "next/link";
import NextImage from "next/image";
import styled from "styled-components";
import Box from "@component/Box";
import Rating from "@component/rating";
import FlexBox from "@component/FlexBox";
import { H6, SemiSpan, Small } from "@component/Typography";
import { calculateDiscount, currency } from "@utils/utils";

// styled component
const StyledProductCard = styled.div`
  .image-holder {
    position: relative;
    :after {
      content: " ";
      position: absolute;
      transition: all 250ms ease-in-out;
    }
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :hover {
    .image-holder:after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.07);
    }
  }
`;

// ===================================================
type ProductCard11Props = {
  slug: string;
  off?: number;
  title: string;
  price: number;
  imgUrl: string;
  rating: number;
};
// ===================================================

const ProductCard11: FC<ProductCard11Props> = (props) => {
  const { title, imgUrl, price, rating, slug, off = 0 } = props;

  return (
    <Link href={`/product/${slug}`}>
      <a>
        <StyledProductCard>
          <Box mb="1rem" className="image-holder">
            <NextImage
              src={imgUrl}
              width={100}
              height={100}
              objectFit="cover"
              layout="responsive"
            />
          </Box>

          <Box mb="0.5rem">
            <Rating value={rating} outof={5} color="warn" readonly />
          </Box>

          <H6 className="ellipsis" mb="6px" title={title}>
            {title}
          </H6>

          <FlexBox alignItems="center">
            <SemiSpan pr="0.3rem" fontWeight="600" color="primary.main" lineHeight="1">
              {calculateDiscount(price, off)}
            </SemiSpan>

            {!!off && (
              <Small color="text.muted" lineHeight="1">
                <del>{currency(price, 0)}</del>
              </Small>
            )}
          </FlexBox>
        </StyledProductCard>
      </a>
    </Link>
  );
};

export default ProductCard11;
