import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@component/Box";
import Image from "@component/Image";
import { Button } from "@component/buttons";
import { H1, H3, Paragraph } from "@component/Typography";

// custom styled components
const CardWrapper = styled(Box)({
  maxHeight: 240,
  overflow: "hidden",
  borderRadius: "10px",
  position: "relative",
  "& img": { transition: "0.3s" },
  ":hover": { img: { transform: "scale(1.1)" } },
});

const CardContent = styled(Box)({
  top: 0,
  zIndex: 1,
  padding: 32,
  width: "100%",
  color: "#fff",
  height: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "space-between",
});

// ========================================================
type BannerCard2Props = {
  img: string;
  url: string;
  text1: string;
  text2: string;
  text3: string;
};
// ========================================================

const BannerCard2: FC<BannerCard2Props> = ({ img, url, text1, text2, text3 }) => {
  return (
    <CardWrapper>
      <Image alt="category" height="100%" width="100%" src={img} />

      <CardContent>
        <Box>
          <Paragraph fontWeight={600}>{text1}</Paragraph>
          <H3>{text2}</H3>
          <H1 fontSize={52} lineHeight={1}>
            {text3}
          </H1>
        </Box>

        <Link href={url}>
          <a>
            <Button variant="outlined" color="primary">
              Shop Now
            </Button>
          </a>
        </Link>
      </CardContent>
    </CardWrapper>
  );
};

export default BannerCard2;
