import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Image from "@component/Image";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Container from "@component/Container";
import { Carousel } from "components/carousel";
import { Paragraph } from "@component/Typography";
import { deviceSize } from "@utils/constants";
import MainCarouselItem from "@models/market-1.model";

// styled component
const StyledBox = styled(FlexBox)({
  alignItems: "center",
  justifyContent: "space-between",
  ".title": {
    fontSize: 50,
    marginTop: 0,
    lineHeight: 1.2,
    marginBottom: "1.35rem",
  },

  "& img": { width: "100%" },

  [`@media(max-width: ${deviceSize.sm}px)`]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": {
      fontSize: 32,
      marginBottom: 10,
    },

    ".grid-item": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
  },

  [`@media(max-width: ${deviceSize.xs}px)`]: {
    ".title": { textAlign: "center" },
  },
});

// ======================================================
type Props = { data: MainCarouselItem[] };
// ======================================================

const Section1: FC<Props> = ({ data }) => {
  return (
    <Box bg="gray.100" mb={7.5}>
      <Container py={4}>
        <Carousel
          spacing="0px"
          totalSlides={2}
          infinite={true}
          showDots={true}
          autoPlay={false}
          visibleSlides={1}
          showArrow={false}
        >
          {data.map((item, ind) => (
            <StyledBox key={ind}>
              <Grid container spacing={3} alignItems="center" justifyContent="center">
                <Grid item className="grid-item" md={5} xs={12}>
                  <h1 className="title">{item.title}</h1>
                  <Paragraph color="secondary.main" mb={2.7}>
                    {item.description}
                  </Paragraph>

                  <a href={item.buttonLik}>
                    <Button
                      mt={4}
                      size="medium"
                      color="primary"
                      variant="contained"
                      className="button-link"
                    >
                      {item.buttonText}
                    </Button>
                  </a>
                </Grid>

                <Grid item md={5} xs={12}>
                  <Image alt="apple-watch-1" src={item.imgUrl} />
                </Grid>
              </Grid>
            </StyledBox>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Section1;
