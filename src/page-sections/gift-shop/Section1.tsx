import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import LazyImage from "components/LazyImage";
import { deviceSize } from "@utils/constants";
import { Carousel } from "components/carousel";
import { H1, Paragraph } from "components/Typography";
import { theme } from "@utils/theme";
import { GiftCarouselItem } from "@models/carousel.model";

// styled components
const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: 60,
  overflow: "hidden",
  backgroundColor: theme.colors.marron[100],
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
}));

const StyledGrid = styled(Grid)({
  maxWidth: 1280,
  margin: "auto",
  alignItems: "center",
});

const GridItemOne = styled(Grid)({
  padding: 20,
  "& h1": {
    fontSize: 45,
    maxWidth: 400,
    lineHeight: 1.3,
  },

  [`@media (max-width: ${deviceSize.md}px)`]: {
    "& h1": {
      fontSize: 30,
    },
  },

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    textAlign: "center",
    "& h1": { fontSize: 25 },
    "& button": { margin: "auto" },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  background: theme.colors.primary.main,
  "&:hover": { background: theme.colors.primary[400] },
}));

const GridItemTwo = styled(Grid)({
  [`@media (max-width: ${deviceSize.sm}px)`]: {
    display: "none",
  },
});

// ==========================================================
type Props = { carouselData: GiftCarouselItem[] };
// ==========================================================

const Section1: FC<Props> = ({ carouselData }) => {
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        totalSlides={carouselData.length}
        dotColor={theme.colors.marron.main}
      >
        {carouselData.map((item) => (
          <StyledGrid container key={item.id}>
            <GridItemOne item md={6} xs={12}>
              <Box py={6}>
                <Paragraph color="primary.main" mb={2}>
                  {item.subTitle}
                </Paragraph>

                <H1 mb={4}>{item.title}</H1>

                <StyledButton variant="contained" color="primary">
                  Shop Now
                </StyledButton>
              </Box>
            </GridItemOne>

            <GridItemTwo item md={6} xs={12}>
              <LazyImage
                priority
                width={600}
                height={450}
                src={item.imgUrl}
                layout="responsive"
                objectFit="contain"
              />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default Section1;
