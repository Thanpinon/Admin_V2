import { FC } from "react";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Pagination from "@component/pagination";
import { ProductCard1 } from "@component/product-cards";
import { SemiSpan } from "@component/Typography";
import Product from "@models/product.model";

// ==========================================================
type Props = {
  products: Product[];
  selectedBrands: string[];
  selectedSocketType: string[];
  minPrice: string;
  maxPrice: string;
};
// ==========================================================

const ProductCard1List: FC<Props> = ({
  products,
  selectedBrands,
  selectedSocketType,
  minPrice,
  maxPrice,
}) => {
  // filter products based on selected
  const filteredProducts = products.filter((item) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(item.brand);
    const unitMatch =
      selectedSocketType.length === 0 ||
      selectedSocketType.includes(item.socket);
    const priceMatch =
      minPrice === null ||
      maxPrice === null || // If either is null, skip the filter
      (item.price >= parseFloat(minPrice) &&
        item.price <= parseFloat(maxPrice));

    return brandMatch && unitMatch && priceMatch;
  });

  return (
    <div>
      <Grid container spacing={6}>
        {filteredProducts.map((item) => (
          <Grid item lg={3} sm={6} xs={12} key={item.id}>
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
        mt="32px"
      >
        <SemiSpan>Showing 1-9 of 1.3k Products</SemiSpan>
        <Pagination pageCount={products.length} />
      </FlexBox>
    </div>
  );
};

export default ProductCard1List;
