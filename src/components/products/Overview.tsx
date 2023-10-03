import { FC } from "react";
import Box from "@component/Box";
import Typography, { H3 } from "@component/Typography";
import { FadeInUp } from "./styles";
import TestResult from "./TestResult";
import ProductDetail from "./ProductDetail";
import ProductDescription from "./ProductDescription";

const Overview: FC = () => {
  return (
    <FadeInUp>
      <Box>
        <H3 mb="1rem">TestResult:</H3>
        <Typography mb="15px">ภาพรวม</Typography>
        <TestResult />
      </Box>
    </FadeInUp>
  );
};

export default Overview;
