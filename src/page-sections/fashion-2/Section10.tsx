import { FC } from "react";
import Grid from "@component/grid/Grid";
import { H3 } from "@component/Typography";
import Container from "@component/Container";
import { ProductCard18 } from "@component/product-cards";
import Product from "@models/product.model";

// ======================================================================
type Section10Props = {
  saleProducts: Product[];
  latestProducts: Product[];
  popularProducts: Product[];
  bestWeekProducts: Product[];
};
// ======================================================================

const Section10: FC<Section10Props> = (props) => {
  const { saleProducts, popularProducts, bestWeekProducts, latestProducts } = props;

  return (
    <Container py="5rem">
      <Grid container spacing={5}>
        <Block title="Sale Products" products={saleProducts} />
        <Block title="Latest Products" products={latestProducts} />
        <Block title="Best of the Week" products={bestWeekProducts} />
        <Block title="Popular Products" products={popularProducts} />
      </Grid>
    </Container>
  );
};

type BlockProps = { title: string; products: Product[] };
const Block: FC<BlockProps> = ({ title, products }) => {
  return (
    <Grid item lg={3} sm={6} xs={12}>
      <H3 mb={3}>{title}</H3>

      {products.map((product) => (
        <ProductCard18
          rating={4}
          key={product.id}
          slug={product.slug}
          title={product.title}
          price={product.price}
          image={product.thumbnail}
        />
      ))}
    </Grid>
  );
};

export default Section10;
