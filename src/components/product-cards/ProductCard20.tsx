import { FC } from "react";
import NextImage from "next/image";
import Card from "@component/Card";
import { Chip } from "@component/Chip";
import HoverBox from "@component/HoverBox";
import Coupon from "@component/products/Coupon";

// ===========================================================================
type ProductCard6Props = {
  topic: string;
  description: string;
  dateExpired: string;
};
// ===========================================================================

const ProductCard20: FC<ProductCard6Props> = ({
  topic,
  description,
  dateExpired,
}) => {
  return (
    <Coupon topic={topic} description={description} dateExpired={dateExpired} />
  );
};

export default ProductCard20;
