import { useCallback, useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import Box from "@component/Box";
import Sticky from "@component/sticky";
import { Chip } from "@component/Chip";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import Pagination from "@component/pagination";
import SaleNavbar from "@component/navbar/SaleNavbar";
import SaleLayout1 from "@component/layout/SaleLayout1";
import { ProductCard1 } from "@component/product-cards";
import { H1, H5, SemiSpan } from "@component/Typography";
import shadows from "@utils/themeShadows";
import { renderProductCount } from "@utils/utils";
import { Meta } from "interfaces";
import Product from "@models/product.model";

// ===================================================
type Props = { products: Product[]; meta: Meta };
// ===================================================

const SalePage1 = ({ products, meta }: Props) => {
  const { push } = useRouter();
  const [selected, setSelected] = useState(1);
  const [isFixed, setIsFixed] = useState(false);

  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), []);

  const handleCategoryClick = useCallback(
    (category) => () => setSelected(category),
    []
  );

  const handlePageChange = (page: number) => push(`?page=${page + 1}`);

  const saleCategoryList = [
    { icon: "women-dress", title: "Women" },
    { icon: "beauty-products", title: "Cosmetics" },
    { icon: "camera", title: "Eelctronics" },
    { icon: "sofa", title: "Furniture" },
  ];

  return (
    <Container mt="2rem">
      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        {!isFixed ? (
          <Box display="none" />
        ) : (
          <SaleNavbar saleCategoryList={saleCategoryList} />
        )}
      </Sticky>

      <Box>
        <FlexBox mb="2rem" flexWrap="wrap">
          <H1 color="primary.main" mr="0.5rem" lineHeight="1">
            Flash Deals,
          </H1>

          <H1 color="text.muted" lineHeight="1">
            Enjoy Upto 80% discounts
          </H1>
        </FlexBox>

        <Box mb="2rem" overflow="hidden">
          <FlexBox m="-0.75rem" flexWrap="wrap">
            {saleCategoryList.map((item, ind) => (
              <FlexBox
                key={ind}
                m="0.75rem"
                flex="1 1 0"
                height="175px"
                minWidth="200px"
                cursor="pointer"
                borderRadius="8px"
                border="1px solid"
                alignItems="center"
                position="relative"
                flexDirection="column"
                borderColor="gray.400"
                justifyContent="center"
                transition="all 250ms ease-in-out"
                onClick={handleCategoryClick(ind)}
                bg={ind === selected ? "white" : "transparent"}
              >
                <Icon
                  size="44px"
                  color={ind === selected ? "primary" : "secondary"}
                >
                  {item.icon}
                </Icon>

                <H5 color={ind === selected ? "primary.main" : "inherit"}>
                  {item.title}
                </H5>

                <Chip
                  top="1rem"
                  right="1rem"
                  p="5px 10px"
                  fontSize="10px"
                  fontWeight="600"
                  position="absolute"
                  color={ind === selected ? "white" : "inherit"}
                  bg={ind === selected ? "primary.main" : "gray.300"}
                  boxShadow={ind === selected ? shadows.badge : "inherit"}
                >
                  Upto 40% off
                </Chip>
              </FlexBox>
            ))}
          </FlexBox>
        </Box>
      </Box>

      <Grid container spacing={6}>
        {products.map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            <ProductCard1
              id={item.id}
              slug={item.slug}
              price={item.price}
              title={item.title}
              off={item.discount}
              images={item.images}
              imgUrl={item.thumbnail}
              rating={item.rating || 4}
            />
          </Grid>
        ))}
      </Grid>

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        my="4rem"
      >
        <SemiSpan>
          {renderProductCount(meta.page - 1, meta.pageSize, meta.total)}
        </SemiSpan>
        <Pagination onChange={handlePageChange} pageCount={meta.totalPage} />
      </FlexBox>
    </Container>
  );
};

SalePage1.layout = SaleLayout1;

// ==============================================================

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const PAGE_SIZE = 28;
  const PAGE = query?.page ? Number(query.page) : 1;
  const params = { page: PAGE, pageSize: PAGE_SIZE };

  const { data } = await axios.get("/api/products", { params });

  if (!data) return { notFound: true };

  return { props: { products: data.result, meta: data.meta } };
};

export default SalePage1;
