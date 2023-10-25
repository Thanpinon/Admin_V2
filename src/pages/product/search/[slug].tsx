import { useCallback, useState } from "react";
import Box from "@component/Box";
import Card from "@component/Card";
import Select from "@component/Select";
import Hidden from "@component/hidden";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { IconButton } from "@component/buttons";
import Sidenav from "@component/sidenav/Sidenav";
import { H5, Paragraph } from "@component/Typography";
import NavbarLayout from "@component/layout/NavbarLayout";
import ProductCard1List from "@component/products/ProductCard1List";
import ProductCard9List from "@component/products/ProductCard9List";
import ProductFilterCard from "@component/products/ProductFilterCard";
import useWindowSize from "@hook/useWindowSize";
import product from "@data/product";

const ProductSearchResult = () => {
  const width = useWindowSize();
  const [view, setView] = useState<"grid" | "list">("grid");

  const isTablet = width < 1025;
  const toggleView = useCallback((v) => () => setView(v), []);
  // select
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSocketType, setSelectedSocketType] = useState<string[]>([]);
  // price range
  const [minPrice, setMinPrice] = useState<string | null>("0"); // 0 = mock up
  const [maxPrice, setMaxPrice] = useState<string | null>("12000"); // "12000" = mock up

  // handle changes in CPU brands filters
  const handleBrandCheckboxChange = (brand: string) => {
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter((item) => item !== brand);
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };
  // handle changes in CPU Socket Type filters
  const handleSocketTypeCheckboxChange = (socketType: string) => {
    setSelectedSocketType((prevSelectedSocketType) => {
      if (prevSelectedSocketType.includes(socketType)) {
        return prevSelectedSocketType.filter((item) => item !== socketType);
      } else {
        return [...prevSelectedSocketType, socketType];
      }
    });
  };

  // handle changes in Price Range filters
  const handleMinPriceChange = (value: string) => {
    setMinPrice(value);
  };
  const handleMaxPriceChange = (value: string) => {
    setMaxPrice(value);
  };

  // clear all Filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedSocketType([]);
    setMinPrice("0");
    setMaxPrice("12000");
  };
  // clear CPU Brands Filter
  const clearBrands = () => {
    setSelectedBrands([]);
  };
  // clear CPU Socket Type Filter
  const clearSocket = () => {
    setSelectedSocketType([]);
  };

  // delete specific item
  const handleItemRemove = (itemToRemove) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.filter((item) => item !== itemToRemove)
    );
    setSelectedSocketType((prevSelectedSocketType) =>
      prevSelectedSocketType.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <Box pt="20px">
      <FlexBox
        as={Card}
        mb="55px"
        p="1.25rem"
        elevation={5}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <div>
          <H5>Searching for “ mobile phone ”</H5>
          <Paragraph color="text.muted">48 results found</Paragraph>
        </div>

        <FlexBox alignItems="center" flexWrap="wrap">
          <Paragraph color="text.muted" mr="1rem">
            Short by:
          </Paragraph>

          <Box flex="1 1 0" mr="1.75rem" minWidth="150px">
            <Select
              placeholder="Short by"
              defaultValue={sortOptions[0]}
              options={sortOptions}
            />
          </Box>

          <Paragraph color="text.muted" mr="0.5rem">
            View:
          </Paragraph>

          <IconButton size="small" onClick={toggleView("grid")}>
            <Icon
              variant="small"
              defaultcolor="auto"
              color={view === "grid" ? "primary" : "inherit"}
            >
              grid
            </Icon>
          </IconButton>

          <IconButton size="small" onClick={toggleView("list")}>
            <Icon
              variant="small"
              defaultcolor="auto"
              color={view === "list" ? "primary" : "inherit"}
            >
              menu
            </Icon>
          </IconButton>

          {isTablet && (
            <Sidenav
              position="left"
              scroll={true}
              handle={
                <IconButton size="small">
                  <Icon>options</Icon>
                </IconButton>
              }
            >
              <ProductFilterCard
                selectedBrands={selectedBrands}
                onBrandCheckboxChange={handleBrandCheckboxChange}
                selectedSocketType={selectedSocketType}
                onSocketTypeCheckboxChange={handleSocketTypeCheckboxChange}
                minPrice={minPrice}
                onMinPriceChange={handleMinPriceChange}
                maxPrice={maxPrice}
                onMaxPriceChange={handleMaxPriceChange}
                clearFilters={clearFilters}
                handleItemRemove={handleItemRemove}
                clearBrands={clearBrands}
                clearSocket={clearSocket}
              />
            </Sidenav>
          )}
        </FlexBox>
      </FlexBox>

      <Grid container spacing={6}>
        {/* FILTER */}
        <Hidden as={Grid} item lg={3} xs={12} down={1024}>
          <ProductFilterCard
            selectedBrands={selectedBrands}
            onBrandCheckboxChange={handleBrandCheckboxChange}
            selectedSocketType={selectedSocketType}
            onSocketTypeCheckboxChange={handleSocketTypeCheckboxChange}
            minPrice={minPrice}
            onMinPriceChange={handleMinPriceChange}
            maxPrice={maxPrice}
            onMaxPriceChange={handleMaxPriceChange}
            clearFilters={clearFilters}
            handleItemRemove={handleItemRemove}
            clearBrands={clearBrands}
            clearSocket={clearSocket}
          />
        </Hidden>
        {/* PRODUCTS */}
        <Grid item lg={9} xs={12}>
          {view === "grid" ? (
            <ProductCard1List
              products={product}
              selectedBrands={selectedBrands}
              selectedSocketType={selectedSocketType}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          ) : (
            <ProductCard9List products={product} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

const sortOptions = [
  { label: "Relevance", value: "Relevance" },
  { label: "Date", value: "Date" },
  { label: "Price Low to High", value: "Price Low to High" },
  { label: "Price High to Low", value: "Price High to Low" },
];

ProductSearchResult.layout = NavbarLayout;

export default ProductSearchResult;
