import { FC } from "react";
import Link from "next/link";
import NextImage from "next/image";
import HoverBox from "@component/HoverBox";
import { H4 } from "@component/Typography";
import { currency } from "@utils/utils";

// ========================================================
type ProductCard2Props = {
  slug: string;
  title: string;
  price: number;
  imgUrl: string;
};
// ========================================================

const ProductCard2: FC<ProductCard2Props> = ({ imgUrl, title, price, slug }) => {
  return (
    <Link href={`/product/${slug}`}>
      <a>
        <HoverBox borderRadius={8} mb="0.5rem">
          <NextImage src={imgUrl} width={100} height={100} layout="responsive" alt={title} />
        </HoverBox>

        <H4 fontWeight="600" fontSize="14px" mb="0.25rem">
          {title}
        </H4>

        <H4 fontWeight="600" fontSize="14px" color="primary.main">
          {currency(price)}
        </H4>
      </a>
    </Link>
  );
};

export default ProductCard2;
