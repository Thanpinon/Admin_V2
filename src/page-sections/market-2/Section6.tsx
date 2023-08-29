import { FC } from "react";
import styled from "styled-components";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import NavLink from "@component/nav-link";
import { H3 } from "@component/Typography";
import Container from "@component/Container";
import { ProductCard19 } from "@component/product-cards";
import { Carousel, CarouselWrapper } from "@component/carousel";
import { theme } from "@utils/theme";
import useVisibleSlide from "./hooks/useVisibleSlide";
import { CategoryBasedProducts } from "@models/market-2.model";

// styled components
const ListItem = styled("li")({
  fontSize: 13,
  fontWeight: 500,
  listStyle: "none",
  cursor: "pointer",
  padding: "10px 0 0 0",
  transition: "all 0.3s",
  ":hover": { color: theme.colors.primary.main },
});

const List = styled("ul")({ padding: 0, marginBottom: "1.5rem" });

// ======================================================================
type Props = { data: CategoryBasedProducts };
// ======================================================================

const Section6: FC<Props> = ({ data }) => {
  const { visibleSlides } = useVisibleSlide({ initialSlide: 4, xs: 1, sm: 2, lg: 3 });

  return (
    <Container pt="4rem">
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Card
            elevation={0}
            style={{ padding: "1rem 2rem", height: "100%", borderRadius: "3px", border: 0 }}
          >
            {/* MAIN CATEGORY NAME/TITLE */}
            <H3>{data.category.title}</H3>

            {/* SUB CATEGORY LIST */}
            <List>
              {data.category.children.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>

            <NavLink href="#">Browse All</NavLink>
          </Card>
        </Grid>

        {/* CATEGORY BASED PRODUCTS CAROUSEL */}
        <Grid item md={9} xs={12}>
          <CarouselWrapper color="dark">
            <Carousel totalSlides={data.products.length} visibleSlides={visibleSlides}>
              {data.products.map((product) => (
                <ProductCard19
                  id={product.id}
                  key={product.id}
                  slug={product.slug}
                  name={product.title}
                  price={product.price}
                  images={product.images}
                  img={product.thumbnail}
                  reviews={product.reviews.length || 14}
                />
              ))}
            </Carousel>
          </CarouselWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section6;
