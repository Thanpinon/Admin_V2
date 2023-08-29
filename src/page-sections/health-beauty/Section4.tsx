import { FC } from "react";
import styled from "styled-components";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { Paragraph } from "@component/Typography";
import { ProductCard16 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { theme } from "@utils/theme";
import Product from "@models/product.model";

// styled component
const SubTitle = styled(Paragraph)({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.colors.gray[600],
});

// =====================================================
type Props = { products: Product[] };
// =====================================================

const Section4: FC<Props> = ({ products }) => {
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <SubTitle>Best collection in 2021 for you!</SubTitle>

      <Grid container spacing={6}>
        {products.map((item) => (
          <Grid key={item.id} item md={4} sm={6} xs={12}>
            <ProductCard16
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

      <FlexBox alignItems="center" justifyContent="center" mt={32}>
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </FlexBox>
    </CategorySectionCreator>
  );
};

export default Section4;
