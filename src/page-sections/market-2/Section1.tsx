import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import NavLink from "@component/nav-link";
import Container from "@component/Container";
import { Carousel } from "@component/carousel";
import { BannerCard3 } from "@component/banners";
import { H4, Paragraph } from "@component/Typography";
import { theme } from "@utils/theme";
import { deviceSize } from "@utils/constants";
import { MainCarouselItem } from "@models/market-2.model";
import { CarouselCard3 } from "@component/carousel-cards";

// styled components
const CarouselBox = styled(Box)({
  overflow: "hidden",
  borderRadius: 3,
  "& .carousel__dot-group": {
    left: 0,
    right: 0,
    bottom: 10,
    marginTop: 0,
    position: "absolute",
    "& div": {
      borderColor: theme.colors.primary.main,
      "::after": { backgroundColor: theme.colors.primary.main },
    },
  },
});

const CardWrapper = styled(Box)({
  gap: "1.25rem",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  [`@media(max-width: ${deviceSize.md}px)`]: {
    flexDirection: "row",
  },
  [`@media(max-width: ${deviceSize.xs}px)`]: {
    flexDirection: "column",
    width: "100%",
  },
});

// ======================================================
type Props = { carouselData: MainCarouselItem[] };
// ======================================================

const Section1: FC<Props> = ({ carouselData }) => {
  return (
    <Container pt="1.5rem">
      <Grid container spacing={5}>
        <Grid item lg={9} xs={12}>
          <CarouselBox>
            <Carousel
              spacing="0px"
              infinite={true}
              showDots={true}
              autoPlay={false}
              visibleSlides={1}
              showArrow={false}
              totalSlides={carouselData.length}
            >
              {carouselData.map((item, index) => (
                <CarouselCard3
                  key={index}
                  img={item.imgUrl}
                  title={item.title}
                  category={item.category}
                  discount={item.discount}
                  buttonText={item.buttonText}
                  description={item.description}
                />
              ))}
            </Carousel>
          </CarouselBox>
        </Grid>

        <Grid item lg={3} xs={12}>
          <CardWrapper>
            <BannerCard3 flex={1} img="/assets/images/banners/banner-17.jpg">
              <Paragraph fontSize={13} letterSpacing={1.2}>
                NEW ARRIVALS
              </Paragraph>

              <H4 fontSize={20} lineHeight={1.2} mb={2}>
                SUMMER
                <br />
                SALE 20% OFF
              </H4>

              <NavLink href="#" color="dark.main">
                Shop Now
              </NavLink>
            </BannerCard3>

            <BannerCard3 flex={1} img="/assets/images/banners/banner-16.jpg">
              <Paragraph fontSize={13} letterSpacing={1.2}>
                GAMING 4K
              </Paragraph>

              <H4 fontSize={20} lineHeight={1.2} mb={2}>
                DESKTOPS &
                <br />
                LAPTOPS
              </H4>

              <NavLink href="#" color="dark.main">
                Shop Now
              </NavLink>
            </BannerCard3>
          </CardWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section1;
