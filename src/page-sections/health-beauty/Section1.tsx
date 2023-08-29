import { FC } from "react";
import styled, { useTheme } from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { H1 } from "components/Typography";
import { Button } from "@component/buttons";
import LazyImage from "components/LazyImage";
import { deviceSize } from "@utils/constants";
import { Carousel } from "components/carousel";
import { HealthCarouselItem } from "@models/carousel.model";

// styled components
const StyledBox = styled(Box)({
  overflow: "hidden",
  backgroundColor: "#efefef",
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
});

const StyledGrid = styled(Grid)({
  maxWidth: 1200,
  margin: "auto",
  alignItems: "center",
});

const GridItemOne = styled(Grid)({
  padding: 20,
  "& h1": {
    fontSize: 35,
    maxWidth: 400,
    lineHeight: 1.3,
  },

  [`@media (max-width: ${deviceSize.md}px)`]: {
    "& h1": { fontSize: 30, marginLeft: "auto", marginRight: "auto" },
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
  backgroundColor: theme.colors.primary.main,
  "&:hover": { backgroundColor: theme.colors.primary[400] },
}));

const GridItemTwo = styled(Grid)({
  [`@media (max-width: ${deviceSize.sm}px)`]: {
    display: "none",
  },
});

// ==========================================================================
type Props = { id: string; carouselData: HealthCarouselItem[] };
// ==========================================================================

const Section1: FC<Props> = ({ id, carouselData }) => {
  const theme = useTheme();

  return (
    <StyledBox id={id}>
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        totalSlides={carouselData.length}
        dotColor={theme.colors.primary.main}
      >
        {carouselData.map(({ id, imgUrl, title }) => (
          <StyledGrid container key={id}>
            <GridItemOne item md={6} xs={12}>
              <Box py={6}>
                <H1 mb={4}>{title}</H1>
                <StyledButton variant="contained">Shop Now</StyledButton>
              </Box>
            </GridItemOne>

            <GridItemTwo item md={6} xs={12}>
              <LazyImage priority width={570} height={360} src={imgUrl} />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default Section1;
