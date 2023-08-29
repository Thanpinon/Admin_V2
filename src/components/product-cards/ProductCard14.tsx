import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import { theme } from "@utils/theme";
import LazyImage from "components/LazyImage";
import { H6, Paragraph } from "components/Typography";

// styled components
const StyledCard = styled(Box)({
  textAlign: "center",
  transition: "all 0.3s",
  "&:hover": { "& h6": { color: theme.colors.marron.main } },
});

const ImgBox = styled(Box)({
  padding: "0 40px 20px 40px",
  background: theme.colors.marron[100],
});

// ===================================================
type Props = {
  title: string;
  imgUrl: string;
  available: string;
};
// ===================================================

const ProductCard14: FC<Props> = (props) => {
  const { imgUrl, title, available } = props;

  return (
    <StyledCard>
      <ImgBox>
        <LazyImage src={imgUrl} width={100} height={100} layout="responsive" objectFit="contain" />
      </ImgBox>

      <H6 fontSize={15} mt="8px" mb="2px">
        {title}
      </H6>

      <Paragraph color="gray.600">{available}</Paragraph>
    </StyledCard>
  );
};

export default ProductCard14;
