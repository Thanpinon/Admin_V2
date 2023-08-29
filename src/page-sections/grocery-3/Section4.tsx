import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { H1 } from "@component/Typography";
import { Button } from "@component/buttons";
import { ProductCard12 } from "@component/product-cards";
import { theme } from "@utils/theme";
import Product from "@models/product.model";

// styled components
const TitleBox = styled(Box)`
  text-align: center;
  & h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  & div {
    width: 200px;
    height: 2px;
    margin: auto;
    background-color: ${theme.colors.primary.main};
  }
`;

// =====================================================
type Props = { products: Product[] };
// =====================================================

const Section4: FC<Props> = ({ products }) => {
  return (
    <Box mb={6}>
      <TitleBox my={4}>
        <H1>Our All Products</H1>
        <Box />
      </TitleBox>

      <Grid container spacing={6}>
        {products.map((item) => (
          <Grid key={item.id} item md={4} sm={6} xs={12}>
            <ProductCard12
              id={item.id}
              slug={item.slug}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              images={item.images}
              imgUrl={item.thumbnail}
            />
          </Grid>
        ))}
      </Grid>

      <FlexBox alignItems="center" justifyContent="center" mt={36}>
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </FlexBox>
    </Box>
  );
};

export default Section4;
