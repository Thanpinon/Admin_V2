import { FC } from "react";
import Box from "@component/Box";
import Table from "@component/table";
import { FadeInUp } from "./styles";

const ProductDescription: FC = () => {
  return (
    <FadeInUp>
      <Box>
        <Table />
      </Box>
    </FadeInUp>
  );
};

export default ProductDescription;
