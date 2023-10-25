import { FC } from "react";
import Box from "@component/Box";
import { FadeInUp } from "./styles";
import TestResult from "./TestResult";
import ProductDetail from "./ProductDetail";
import ProductDescription from "./ProductDescription";
import CategorySectionHeader from "@component/CategorySectionHeader";

const Overview: FC = () => {
  return (
    <FadeInUp>
      <Box>
        <Box mb="2rem">
          <CategorySectionHeader
            iconName="test"
            title="ผลเทส"
            color="ihavecpu"
          />
          <TestResult />
        </Box>
        <Box mb="2rem">
          <CategorySectionHeader
            iconName="details"
            title="รายละเอียดสินค้า"
            color="ihavecpu"
          />
          <ProductDetail />
        </Box>
        <Box mb="2rem">
          <CategorySectionHeader
            iconName="details"
            title="คุณสมบัติสินค้า"
            color="ihavecpu"
          />
          <ProductDescription />
        </Box>
      </Box>
    </FadeInUp>
  );
};

export default Overview;
