import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import { H2, H4 } from "@component/Typography";
import { theme } from "@utils/theme";
import Category from "@models/category.model";

//  styled components
const Wrapper = styled(Box)({
  cursor: "pointer",
  overflow: "hidden",
  borderRadius: "4px",
  "& img": { transition: "all 0.3s" },
  ":hover": {
    img: { transform: "scale(1.1)" },
    "& .category-title": {
      color: "white",
      backgroundColor: theme.colors.secondary.main,
    },
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

// ===========================================================
type Section3Props = { categories: Category[] };
// ===========================================================

const Section3: FC<Section3Props> = ({ categories }) => {
  return (
    <Container mt="4rem">
      <H2 textAlign="center" mb={4}>
        Best selling Categories
      </H2>

      <Grid container spacing={6}>
        {categories.map((item) => (
          <Grid item md={3} sm={6} xs={12} key={item.id}>
            <Wrapper position="relative">
              <Image
                width={300}
                height={300}
                src={item.image}
                alt="category"
                objectFit="cover"
                layout="responsive"
              />

              <CategoryTitle className="category-title">
                <H4>{item.name}</H4>
              </CategoryTitle>
            </Wrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section3;
