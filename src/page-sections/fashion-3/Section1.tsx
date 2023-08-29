import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Container from "@component/Container";
import { Carousel } from "@component/carousel";
import { CarouselCard2 } from "@component/carousel-cards";
import { MainCarouselItem } from "@models/market-2.model";

// styled component
const StyledBox = styled(Box)({
  overflow: "hidden",
  marginBottom: "1.5rem",
  "& .carousel__dot-group": {
    mt: 0,
    left: 0,
    right: 0,
    bottom: 10,
    position: "absolute",
    "& div": {
      borderColor: "#fff",
      "::after": { backgroundColor: "#fff" },
    },
  },
});

// ======================================================
type Props = { carouselData: MainCarouselItem[] };
// ======================================================

const Section1: FC<Props> = ({ carouselData }) => {
  return (
    <Container pt="1.5rem">
      <StyledBox>
        <Carousel
          spacing="0px"
          totalSlides={2}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}
        >
          {carouselData.map((item, index) => (
            <CarouselCard2
              key={index}
              mode="dark"
              title={item.title}
              bgImage={item.imgUrl}
              category={item.category}
              discount={item.discount}
            />
          ))}
        </Carousel>
      </StyledBox>
    </Container>
  );
};

export default Section1;
