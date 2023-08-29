import Box from "@component/Box";
import Image from "@component/Image";
import { FC, ReactNode } from "react";
import styled from "styled-components";
import { FlexProps } from "styled-system";

// styled components
const CardWrapper = styled(Box)({
  width: "100%",
  overflow: "hidden",
  position: "relative",
});

const CardContent = styled(Box)({
  top: 0,
  left: 32,
  zIndex: 1,
  height: "100%",
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
});

// ===========================================================
interface BannerCard1Props extends FlexProps {
  img: string;
  children: ReactNode;
}
// ===========================================================

const BannerCard3: FC<BannerCard1Props> = ({ img, children, ...props }) => {
  return (
    <CardWrapper {...props}>
      <Image alt="category" height="100%" width="100%" src={img} />
      <CardContent>{children}</CardContent>
    </CardWrapper>
  );
};

export default BannerCard3;
