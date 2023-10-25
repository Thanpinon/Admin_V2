import { Fragment } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import Hidden from "@component/hidden";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Sidenav from "@component/sidenav/Sidenav";
import NavbarLayout from "@component/layout/NavbarLayout";
import ProductCardList from "@component/products/ProductCard1List";
import ProductFilterCard from "@component/products/ProductFilterCard";
import ShopIntroCard from "@sections/shop/ShopIntroCard";
import useWindowSize from "@hook/useWindowSize";
import Shop from "@models/shop.model";
import api from "@utils/__api__/shops";

// ============================================================
type Props = { shop: Shop };
// ============================================================

const ShopDetails = ({ shop }: Props) => {
  const router = useRouter();
  const width = useWindowSize();
  const isTablet = width < 1025;

  // Show a loading state when the fallback is rendered
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Fragment>
      <ShopIntroCard />

      <Grid container spacing={6}>
        {/* SHOW IN LARGE DEVICE */}
        <Hidden as={Grid} item md={3} xs={12} down={1024}>
          <ProductFilterCard />
        </Hidden>
        <Grid item md={9} xs={12}>
          {/* SHOW IN SMALL DEVICE */}
          {isTablet && (
            <Sidenav
              scroll={true}
              position="left"
              handle={
                <FlexBox justifyContent="flex-end" mb="12px">
                  <Icon>options</Icon>
                </FlexBox>
              }
            >
              <ProductFilterCard />
            </Sidenav>
          )}
          <ProductCardList products={shop.products.slice(0, 9)} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

ShopDetails.layout = NavbarLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await api.getSlugs();

  return {
    paths: paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const shop = await api.getShopBySlug(String(params.slug));
  return { props: { shop } };
};

export default ShopDetails;
