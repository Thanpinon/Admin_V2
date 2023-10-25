import { FC, useEffect, useState } from "react";
import Box from "@component/Box";
import { ProductCard21 } from "@component/product-cards";
import Products from "@models/products.model";
import { CarouselProduct } from "@component/carousel";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useWindowSize from "@hook/useWindowSize";

// ============================================================
type Props = { products: Products[] };
// ============================================================

const SameBrandProducts: FC<Props> = ({ products }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(5);

  useEffect(() => {
    if (width < 500) setVisibleSlides(3);
    else if (width < 650) setVisibleSlides(3);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(5);
  }, [width]);

  return (
    <CategorySectionCreator
      iconName=""
      title="จากแบรนด์เดียวกัน"
      seeMoreLink="#"
    >
      <Box mt="-0.25rem" mb="-0.25rem">
        <CarouselProduct
          totalSlides={products.length}
          visibleSlides={visibleSlides}
        >
          {products.map((item, ind) => (
            <Box py="0.25rem" key={ind}>
              <ProductCard21
                id={item.product_code}
                slug={item.product_code}
                price={parseFloat(item.market_price)}
                title={item.name_th}
                off={parseFloat(item.market_price)}
                images={item.images}
                imgUrl={item.description_th}
              />
            </Box>
          ))}
        </CarouselProduct>
      </Box>
    </CategorySectionCreator>
  );
};

export default SameBrandProducts;
