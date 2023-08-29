import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import { theme } from "@utils/theme";
import { deviceSize } from "@utils/constants";
import { H1, H4, Paragraph, Span } from "@component/Typography";
import { Button } from "@component/buttons";

// custom styled components
const CardWrapper = styled(Box)<{ img: string; mode: string }>(({ img, mode }) => ({
  minHeight: 500,
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${img})`,
  backgroundColor: mode === "dark" ? "#000" : "#fff",
  color: mode === "light" ? theme.colors.secondary.main : "#fff",
  [`@media(max-width: ${deviceSize.md}px)`]: {
    padding: 24,
    textAlign: "center",
    backgroundImage: "none",
    justifyContent: "center",
  },
}));

const ContentWrapper = styled(Box)({
  paddingLeft: "5rem",
  [`@media(max-width: ${deviceSize.md}px)`]: {
    paddingLeft: 0,
    "& button": { margin: "auto" },
  },
});

// ===============================================================
type CarouselCard2Props = {
  title: string;
  bgImage?: string;
  category: string;
  discount: number;
  mode?: "dark" | "light";
};
// ===============================================================

const CarouselCard2: FC<CarouselCard2Props> = ({
  title,
  bgImage,
  category,
  discount,
  mode = "dark",
}) => {
  return (
    <CardWrapper img={bgImage} mode={mode}>
      <ContentWrapper>
        <H4 mb={1} lineHeight={1} fontWeight={400} textTransform="uppercase" fontSize={30}>
          {title}
        </H4>

        <H1 fontSize={60} lineHeight={1} textTransform="uppercase">
          {category}
        </H1>

        <H4 fontSize={30} lineHeight={1} mt=".75rem" textTransform="uppercase">
          SALE UP TO <Span color="primary.main">{discount}% OFF</Span>
        </H4>

        <Paragraph fontSize={18} mb="2rem">
          Get Free Shipping on orders over $99.00
        </Paragraph>

        <Button variant="contained" color="primary">
          Shop Now
        </Button>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default CarouselCard2;
