import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import { Carousel } from "components/carousel";
import { ProductCard15 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { theme } from "@utils/theme";
import useVisibleSlide from "./hooks/useVisibleSlide";
import Product from "@models/product.model";

// styled component
const Wrapper = styled(Box)({
  "& .carousel__slider": { paddingBottom: 10 },
  "& .carousel__next-button, .carousel__back-button": {
    padding: 10,
    borderRadius: 0,
    boxShadow: theme.shadows[2],
    color: theme.colors.marron.main,
    background: theme.colors.marron[50],
    "&:hover": { background: theme.colors.marron[100] },
  },
});

// ===============================================
type Props = { products: Product[]; title: string };
// ===============================================

const Section5: FC<Props> = ({ products, title }) => {
  const { visibleSlides } = useVisibleSlide({ initialSlide: 4, xs: 1, sm: 2, md: 3 });

  return (
    <CategorySectionCreator title={title} seeMoreLink="#">
      <Wrapper>
        <Carousel infinite={true} visibleSlides={visibleSlides} totalSlides={products.length}>
          {products.map((item) => (
            <ProductCard15
              id={item.id}
              key={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              images={item.images}
              imgUrl={item.thumbnail}
            />
          ))}
        </Carousel>
      </Wrapper>
    </CategorySectionCreator>
  );
};

export default Section5;
