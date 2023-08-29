import { FC } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import AppStore from "@component/AppStore";
import { Carousel } from "@component/carousel";
import { H1, H5, H6 } from "@component/Typography";
import { deviceSize } from "@utils/constants";
import { GroceryTwoCarouselItem } from "@models/carousel.model";

// styled component
const Wrapper = styled.div`
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;

  .carousel-dot {
    left: 72px;
    bottom: 40px;
    position: absolute;
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    .carousel-dot {
      left: 1rem;
      bottom: 0.75rem;
    }
  }
`;

const ContentWrapper = styled(FlexBox)`
  align-items: center;

  .card__inner-box {
    padding: 40px 0px 97px 72px;
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    .card__inner-box {
      padding: 1rem 1rem 4rem;
    }

    .card__img {
      margin-top: 1rem;
    }
  }
`;

// ========================================================================
type Props = { carouselData: GroceryTwoCarouselItem[] };
// ========================================================================

const Section1: FC<Props> = ({ carouselData }) => {
  return (
    <Wrapper>
      <Carousel
        spacing="0px"
        // autoPlay={true}
        showDots={true}
        dotColor="white"
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        totalSlides={carouselData.length}
      >
        {carouselData.map((item) => (
          <Card key={item.id} bg="primary.main" color="white" borderRadius={0} position="relative">
            <ContentWrapper>
              <Box className="card__inner-box">
                <H1 maxWidth="280px" mb="0.5rem" lineHeight="1.27">
                  {item.title}
                </H1>

                <H6 maxWidth="470px" color="inherit" fontWeight="400" mb="2.5rem">
                  {item.description}
                </H6>

                <H5 fontSize="18px" fontWeight="700" mb="1.25rem">
                  Try our mobile app!
                </H5>

                <AppStore />
              </Box>

              <Box className="card__img" minWidth="285px" height="180px" position="relative">
                <NextImage layout="fill" objectFit="contain" src={item.imgUrl} />
              </Box>
            </ContentWrapper>
          </Card>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default Section1;
