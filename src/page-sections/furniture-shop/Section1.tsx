import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import { Carousel } from "components/carousel";
import { H1, H6, Paragraph } from "components/Typography";
import { theme } from "@utils/theme";
import { deviceSize } from "@utils/constants";
import { FurnitureCarouselItem } from "@models/carousel.model";

// styled components
const StyledBox = styled(Box)({
  marginBottom: 60,
  overflow: "hidden",
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
});

const Container = styled(Box)({
  minHeight: 650,
  display: "flex",
  alignItems: "center",
  backgroundImage: "url('/assets/images/Furniture Shop/Furniture Shop Header.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  transition: "all 0.3s",
  [`@media(max-width:${deviceSize.md}px)`]: { height: "60vh" },
  [`@media(max-width:${deviceSize.sm}px)`]: { height: "50vh" },
});

const StyledGrid = styled(Grid)({
  maxWidth: 1280,
  margin: "auto",
  position: "relative",
  alignItems: "center",
  padding: "2rem 0px 5rem 0px",
});

const GridItemOne = styled(Grid)({
  padding: 20,
  "& h1": { fontSize: 60 },
  [`@media(max-width:${deviceSize.md}px)`]: {
    "& h1": { fontSize: 50 },
  },
  [`@media(max-width:${deviceSize.sm}px)`]: {
    textAlign: "center",
    "& h1": { fontSize: 40 },
  },
});

const StyledButton = styled(Button)({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
  borderRadius: 0,
  padding: "8px 30px",
  [`@media(max-width:${deviceSize.sm}px)`]: {
    margin: "auto",
  },
});

const TextBox = styled(Box)({
  marginTop: 5,
  marginBottom: 40,
  paddingRight: 100,
  [`@media(max-width:${deviceSize.md}px)`]: { paddingRight: 0 },
});

// ===============================================================
type Props = { mainCarouselData: FurnitureCarouselItem[] };
// ===============================================================

const Section1: FC<Props> = ({ mainCarouselData }) => {
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        dotColor={theme.colors.primary.main}
        totalSlides={mainCarouselData.length}
      >
        {mainCarouselData.map((item) => (
          <Container key={item.id}>
            <StyledGrid container>
              <GridItemOne item lg={6} md={8} xs={12}>
                <H6>{item.subTitle}</H6>
                <H1 fontSize={60}>{item.title}</H1>

                <TextBox>
                  <Paragraph color="grey.600">{item.description}</Paragraph>
                </TextBox>

                <StyledButton color="primary" variant="contained">
                  {item.buttonText}
                </StyledButton>
              </GridItemOne>
            </StyledGrid>
          </Container>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default Section1;
