import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Container from "@component/Container";
import { H2, H3 } from "@component/Typography";
import { deviceSize } from "@utils/constants";

// styled components
const ContentBox = styled(Box)({
  top: 30,
  left: 0,
  right: 0,
  textAlign: "center",
  position: "absolute",
});

const ButtonWrapper = styled(FlexBox)({
  left: 0,
  right: 0,
  bottom: 30,
  gap: "1rem",
  position: "absolute",
  "& button": { borderRadius: 0 },
});

const Category2Wrapper = styled(Box)({
  width: "100%",
  position: "relative",
  [`@media(max-width: ${deviceSize.md}px)`]: {
    ":first-of-type": { marginBottom: "1.5rem" },
  },
});

const StyledButton = styled(Button)({
  left: 0,
  right: 0,
  bottom: 30,
  margin: "auto",
  borderRadius: 0,
  width: "fit-content",
  position: "absolute",
});

const Section4: FC = () => {
  return (
    <Container mt="4rem">
      <H2 textAlign="center" mb={4}>
        Top Categories
      </H2>

      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <Box style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              width={580}
              height={580}
              alt="category"
              layout="responsive"
              src="/assets/images/categories/1.jpg"
            />

            <ContentBox>
              <H2 fontSize={24}>PADDED CLOTHES</H2>
              <H3 fontSize={22} fontWeight={400}>
                Collection
              </H3>
            </ContentBox>

            <ButtonWrapper justifyContent="center">
              <Button variant="contained" color="primary">
                Women&#39;s
              </Button>

              <Button variant="contained" color="primary">
                Men&#39;s
              </Button>
            </ButtonWrapper>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <FlexBox
            height="100%"
            alignItems="center"
            flexDirection="column"
            justifyContent="space-between"
          >
            <SingleCategory
              url="#"
              buttonText="Women's T-Shirt"
              img="/assets/images/categories/2.jpg"
            />

            <SingleCategory
              url="#"
              buttonText="Men's T-Shirt"
              img="/assets/images/categories/3.jpg"
            />
          </FlexBox>
        </Grid>
      </Grid>
    </Container>
  );
};

// ============================================================================
type SingleCategoryProps = { img: string; url: string; buttonText: string };
// ===============================================================================

const SingleCategory: FC<SingleCategoryProps> = (props) => {
  const { img, buttonText } = props;

  return (
    <Category2Wrapper>
      <Image
        src={img}
        width={580}
        height={280}
        alt="category"
        layout="responsive"
        objectFit="cover"
      />

      <StyledButton variant="contained" color="primary">
        {buttonText}
      </StyledButton>
    </Category2Wrapper>
  );
};

export default Section4;
