import { FC, Fragment } from "react";
import FlexBox from "@component/FlexBox";
import Pagination from "@component/pagination";
import { SemiSpan } from "@component/Typography";
import { ProductCard9 } from "@component/product-cards";
import Products from "@models/products.model";
// ==========================================================
type Props = { products: Products[] };
// ==========================================================

const ProductCard9List: FC<Props> = ({ products }) => {
  return (
    <Fragment>
      {products.map((item) => (
        <ProductCard9
          mb="1.25rem"
          id={item.product_id}
          key={item.product_id}
          slug={item.product_code}
          price={parseInt(item.market_price)}
          title={item.name_th}
          off={parseFloat(item.cost_price)}
          images={item.images}
          imgUrl={item.images[0]}
        />
      ))}

      <FlexBox
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        mt="32px"
      >
        <SemiSpan>Showing 1-9 of 1.3k Products</SemiSpan>
        <Pagination pageCount={10} />
      </FlexBox>
    </Fragment>
  );
};

export default ProductCard9List;
