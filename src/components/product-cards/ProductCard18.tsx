import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@component/Box";
import Image from "@component/Image";
import Rating from "@component/rating";
import FlexBox from "@component/FlexBox";
import NavLink from "@component/nav-link";
import { Paragraph } from "@component/Typography";
import { currency } from "@utils/utils";

const StyledFlexBox = styled(FlexBox)({
  gap: "1rem",
  alignItems: "center",
  "& a": { flexShrink: 0 },
  "& img": { transition: "0.3s" },
  ":last-of-type": { marginBottom: 0 },
  ":hover": { img: { transform: "scale(1.1)" } },
});

// ===========================================
type ProductCard18Props = {
  slug: string;
  image: string;
  title: string;
  price: number;
  rating: number;
};
// ===========================================

const ProductCard18: FC<ProductCard18Props> = (props) => {
  const { image, title, price, slug, rating } = props;

  return (
    <StyledFlexBox mb="1rem">
      <Link href={`/product/${slug}`}>
        <a>
          <Box maxWidth={100} bg="gray.300">
            <Image width="100%" alt="product" src={image} />
          </Box>
        </a>
      </Link>

      <Box>
        <NavLink href="#">
          <Paragraph fontSize={16}>{title}</Paragraph>
        </NavLink>

        <Paragraph fontWeight={700} my={1}>
          {currency(price)}
        </Paragraph>

        <Rating value={rating} size="small" color="warn" />
      </Box>
    </StyledFlexBox>
  );
};

export default ProductCard18;
