import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import { H1 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import { ProductCard12 } from "@component/product-cards";
import useWindowSize from "@hook/useWindowSize";
import { theme } from "@utils/theme";
import Product from "@models/product.model";

// styled components
const TitleBox = styled(Box)`
  text-align: center;
  & h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  & div {
    width: 200px;
    height: 2px;
    margin: auto;
    background-color: ${theme.colors.primary.main};
  }
`;

// =====================================================
type Props = { products: Product[] };
// =====================================================

const Section3: FC<Props> = ({ products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <Box>
      <TitleBox my={4}>
        <H1>Top Saled Products</H1>
        <Box />
      </TitleBox>

      <Box my="-0.25rem">
        <Carousel
          showArrowOnHover={true}
          arrowButtonColor="inherit"
          totalSlides={products.length}
          visibleSlides={visibleSlides}
        >
          {products.map((item) => (
            <Box py="0.25rem" key={item.id}>
              <ProductCard12
                id={item.id}
                slug={item.slug}
                title={item.title}
                price={item.price}
                off={item.discount}
                rating={item.rating}
                images={item.images}
                imgUrl={item.thumbnail}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Section3;
