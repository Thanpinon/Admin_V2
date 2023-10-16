import React, { FC } from "react";

interface PriceFormatProps {
  price: number;
}

const PriceFormat: FC<PriceFormatProps> = ({ price }) => {
  const formattedPrice = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  return <span>฿{formattedPrice}</span>;
};

export default PriceFormat;
