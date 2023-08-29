import { FC } from "react";
import Box from "@component/Box";
import Typography, { H3 } from "@component/Typography";

const ProductDescription: FC = () => {
  return (
    <Box>
      <H3 mb="1rem">Specification:</H3>
      <Typography>
        Brand: Beats <br />
        Model: S450 <br />
        Wireless Bluetooth Headset <br />
        FM Frequency Response: 87.5 – 108 MHz <br />
        Feature: FM Radio, Card Supported (Micro SD / TF) <br />
        Made in China <br />
      </Typography>
    </Box>
  );
};

export default ProductDescription;
