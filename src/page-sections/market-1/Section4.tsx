import { FC } from "react";
import Link from "next/link";
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";
import CategorySectionHeader from "@component/CategorySectionHeader";
import { ProductCard4, ProductCard5 } from "@component/product-cards";
import Brand from "@models/Brand.model";
import Product from "@models/product.model";

// ===================================================================
type Props = { topRatedBrands: Brand[]; topRatedList: Product[] };
// ===================================================================

const Section4: FC<Props> = ({ topRatedBrands, topRatedList }) => {
  return (
    <Box mb="3.75rem">
      <Container>
        <Grid container spacing={6}>
          <Grid item lg={6} xs={12}>
            <CategorySectionHeader iconName="ranking-1" title="Top Ratings" seeMoreLink="#" />

            <Card p="1rem">
              <Grid container spacing={4}>
                {topRatedList.map((item) => (
                  <Grid item md={3} sm={6} xs={6} key={item.title}>
                    <Link href={`/product/search/${item.slug}`} passHref>
                      <a>
                        <ProductCard4
                          title={item.title}
                          price={item.price}
                          imgUrl={item.thumbnail}
                          rating={item.rating || 4}
                          reviewCount={item.reviews.length || 12}
                        />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          <Grid item md={6} xs={12}>
            <CategorySectionHeader iconName="Group" title="Featured Brands" seeMoreLink="#" />

            <Card p="1rem">
              <Grid container spacing={4}>
                {topRatedBrands.map((item) => (
                  <Grid item sm={6} xs={12} key={item.id}>
                    <Link href={`/product/search/${item.slug}`} passHref>
                      <a>
                        <ProductCard5 title={item.name} imgUrl={item.image} />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section4;
