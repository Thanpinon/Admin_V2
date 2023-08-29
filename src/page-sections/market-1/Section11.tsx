import { FC } from "react";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import { ProductCard1 } from "@component/product-cards";
import CategorySectionHeader from "@component/CategorySectionHeader";
import Product from "@models/product.model";

// ====================================================
type Props = { moreItems: Product[] };
// ====================================================

const Section11: FC<Props> = ({ moreItems }) => {
  return (
    <Container mb="70px">
      <CategorySectionHeader title="More For You" seeMoreLink="#" />
      <Grid container spacing={6}>
        {moreItems.map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard1
              hoverEffect
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
    </Container>
  );
};

export default Section11;
