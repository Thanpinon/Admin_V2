import { FC } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Container from "@component/Container";
import { H3, H4, Paragraph, Span } from "@component/Typography";
import { deviceSize } from "@utils/constants";
import Category from "@models/category.model";

const slideX = keyframes`
    from { left: 120% }
    to { left: -100% }
`;

// styled components
const CategoryCard = styled(Box)({
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "4px",
  position: "relative",
  "& img": { transition: "all 0.3s" },
  ":hover": {
    img: { transform: "scale(1.1)" },
    "& .category-title": { color: "#fff", backgroundColor: "#000" },
  },
});

const CategoryTitle = styled(Box)({
  left: 10,
  right: 10,
  bottom: 10,
  padding: 8,
  textAlign: "center",
  borderRadius: "2px",
  position: "absolute",
  transition: "all 0.3s",
  backgroundColor: "rgba(255,255,255, .67)",
});

const AdWrapper = styled(FlexBox)({
  color: "#fff",
  marginTop: "3rem",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#434343",
  "::before": {
    inset: 5,
    zIndex: 3,
    content: "''",
    position: "absolute",
    border: "1px dashed #fff",
  },

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    flexDirection: "column",
  },
});

const AdTitle1 = styled(H3)({
  zIndex: 10,
  fontSize: 27,
  padding: "1.5rem",
  position: "relative",
  textTransform: "uppercase",
  backgroundColor: "#e0e0e0",
  color: "#000",
  "::after": {
    top: -36,
    bottom: 0,
    zIndex: -1,
    right: -17,
    content: "''",
    position: "absolute",
    transform: "rotate(23deg)",
    border: "70px solid #e0e0e0",
  },

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    marginBottom: 16,
    "::after": { display: "none" },
  },
});

const AddButton = styled(Button)({
  borderRadius: 0,
  color: "#000",
  backgroundColor: "white",
  ":focus": { boxShadow: "none" },
});

const AnimatedText = styled(Span)`
  font-size: inherit;
  font-style: italic;
  position: relative;
  letter-spacing: 1.3;
  white-space: nowrap;
  text-overflow: hidden;
  text-transform: uppercase;
  animation: ${slideX} 30s infinite linear 1s;
`;

// ===========================================================
type Props = { categories: Category[] };
// ===========================================================

const Section3: FC<Props> = ({ categories }) => {
  return (
    <Container pt="4rem">
      <Grid container spacing={3}>
        {categories.map((item) => (
          <Grid item lg={2} md={3} sm={4} xs={6} key={item.id}>
            <CategoryCard>
              <Image
                width={300}
                height={300}
                alt="category"
                src={item.image}
                objectFit="cover"
                layout="responsive"
              />

              <CategoryTitle className="category-title">
                <H4>{item.name}</H4>
              </CategoryTitle>
            </CategoryCard>
          </Grid>
        ))}

        <Grid item xs={12}>
          <AdWrapper alignItems="center">
            <AdTitle1>Black friday sale!</AdTitle1>

            <Paragraph ellipsis fontSize={28} flex={1} style={{ zIndex: 5 }}>
              <AnimatedText>
                Pay only for{" "}
                <Span
                  fontWeight={700}
                  fontSize="inherit"
                  textTransform="uppercase"
                  sx={{ textOverflow: "hidden", whiteSpace: "nowrap" }}
                >
                  your loving electronics
                </Span>
              </AnimatedText>
            </Paragraph>

            <Box style={{ padding: "1.5rem", flexShrink: 0, zIndex: 5 }}>
              <AddButton variant="contained" color="primary">
                Shop Now
              </AddButton>
            </Box>
          </AdWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section3;
