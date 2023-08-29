import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@component/Box";
import { H1 } from "components/Typography";
import { Carousel } from "components/carousel";
import { ProductCard14 } from "@component/product-cards";
import { theme } from "@utils/theme";
import useVisibleSlide from "./hooks/useVisibleSlide";
import Category from "@models/category.model";

// styled component
const Wrapper = styled(Box)({
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
type Props = { categoryList: Category[] };
// ===============================================

const Section4: FC<Props> = ({ categoryList }) => {
  const { visibleSlides } = useVisibleSlide();

  return (
    <Wrapper my={4} className="categories">
      <H1 mb={3}>Top Categories</H1>

      <Carousel infinite={true} visibleSlides={visibleSlides} totalSlides={categoryList.length}>
        {categoryList.map((item) => (
          <Link href="#" key={item.id}>
            <a>
              <ProductCard14 title={item.name} imgUrl={item.image} available={item.description} />
            </a>
          </Link>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Section4;
