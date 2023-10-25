import { FC } from "react";
import Box from "@component/Box";
import Typography from "@component/Typography";
import { FadeInUp } from "./styles";

const ProductDetail: FC = () => {
  return (
    <FadeInUp>
      <Box>
        <Typography>รายละเอียดสินค้า</Typography>
      </Box>
    </FadeInUp>
  );
};

export default ProductDetail;
