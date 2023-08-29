import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import { Paragraph } from "@component/Typography";
import { Carousel } from "@component/carousel";
import { ProductCard10 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useWindowSize from "@hook/useWindowSize";
import { theme } from "@utils/theme";
import Product from "@models/product.model";

// styled component
const SubTitle = styled(Paragraph)({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.colors.gray[600],
});

// =====================================================
type Props = { title: string; products: Product[] };
// =====================================================

const Section3: FC<Props> = ({ title, products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <CategorySectionCreator title={title} seeMoreLink="#">
      <SubTitle>Best collection in 2021 for you!</SubTitle>

      <Box my="-0.25rem">
        <Carousel
          step={3}
          showDots
          showArrowOnHover={true}
          arrowButtonColor="inherit"
          totalSlides={products.length}
          visibleSlides={visibleSlides}
        >
          {products.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard10
                id={item.id}
                slug={item.slug}
                unit={item.unit}
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
    </CategorySectionCreator>
  );
};

export default Section3;
