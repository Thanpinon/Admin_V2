import { FC, useState } from "react";
import NextImage from "next/image";
import Box from "@component/Box";
import Hidden from "@component/hidden";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { ProductCard1 } from "@component/product-cards";
import CategorySectionHeader from "@component/CategorySectionHeader";
import StyledProductCategory from "./styled";
import Product from "@models/product.model";
import Brand from "@models/Brand.model";

// ==============================================================
type Props = { carList: Product[]; carBrands: Brand[] };
// ==============================================================

const Section6: FC<Props> = ({ carList, carBrands }) => {
  const [selected, setSelected] = useState("");

  const handleCategoryClick = (brand: Brand) => () => {
    if (selected === brand.slug) setSelected("");
    else setSelected(brand.slug);
  };

  return (
    <Container mb="80px">
      <FlexBox>
        <Hidden down={768} mr="1.75rem">
          <Box shadow={6} borderRadius={10} padding="1.25rem" bg="white">
            {carBrands.map((brand) => (
              <StyledProductCategory
                mb="0.75rem"
                id={brand.id}
                key={brand.id}
                title={brand.name}
                onClick={handleCategoryClick(brand)}
                shadow={selected === brand.slug ? 4 : null}
                bg={selected === brand.slug ? "white" : "gray.100"}
              >
                <NextImage
                  width={20}
                  height={20}
                  alt="apple"
                  layout="fixed"
                  objectFit="contain"
                  src={brand.image}
                />
                <span className="product-category-title">{brand.name}</span>
              </StyledProductCategory>
            ))}

            <StyledProductCategory
              id="all"
              mt="4rem"
              onClick={handleCategoryClick}
              shadow={selected.match("all") ? 4 : null}
              bg={selected.match("all") ? "white" : "gray.100"}
            >
              <span id="all" className="product-category-title show-all">
                View All Brands
              </span>
            </StyledProductCategory>
          </Box>
        </Hidden>

        <Box flex="1 1 0" minWidth="0px">
          <CategorySectionHeader title="Cars" seeMoreLink="#" />

          <Grid container spacing={6}>
            {carList.map((item, ind) => (
              <Grid item lg={4} sm={6} xs={12} key={ind}>
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
        </Box>
      </FlexBox>
    </Container>
  );
};

export default Section6;
