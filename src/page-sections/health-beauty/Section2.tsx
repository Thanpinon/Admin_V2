import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import Box from "@component/Box";
import Card from "@component/Card";
import Image from "@component/Image";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { H4, Paragraph } from "@component/Typography";
import { deviceSize } from "@utils/constants";

// styled components
const ContentBox = styled(Card)({
  height: "100%",
  display: "flex",
  alignItems: "stretch",
  "& .content": {
    width: "50%",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const RightContent = styled(FlexBox)(({ theme }) => ({
  width: "50%",
  height: "auto",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "0px 50% 50% 0px",
  background: theme.colors.primary[200],
  "& p": { fontSize: 13, lineHeight: 1.4 },
}));

const LeftContent = styled(Box)({
  width: "50%",
  height: "auto",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  "& img": { width: "90%" },

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    "& img": { width: "100%" },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "12px",
  marginTop: "16px",
  padding: "4px 12px",
  background: theme.colors.primary.main,
  "&:hover": { background: theme.colors.primary[400] },
}));

const Section2: FC = () => {
  const router = useRouter();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Link href="/shops/scarlett-beauty">
          <a>
            <ContentBox>
              <RightContent px="20px">
                <Image alt="shop" width="40px" src="/assets/images/Health Shop/Vector (1).png" />
                <Paragraph mt={2}>Our Pharmaciests are</Paragraph>
                <Paragraph>here to Help People</Paragraph>
              </RightContent>

              <LeftContent px="10px">
                <Image src="/assets/images/Health Shop/Doctor.png" alt="shop" />
              </LeftContent>
            </ContentBox>
          </a>
        </Link>
      </Grid>

      <Grid item xs={12} md={6}>
        <Link href="/shops/scarlett-beauty">
          <a>
            <ContentBox px={4}>
              <Box className="content">
                <Paragraph sx={{ fontSize: 12 }}>BEAUTY PACK</Paragraph>
                <H4 fontWeight="700">CREAM BRIGHT</H4>
                <H4 fontWeight="700">UP TO 25%</H4>
                <StyledButton onClick={() => router.push("/shops/scarlett-beauty")}>
                  Shop Now
                </StyledButton>
              </Box>

              <Box className="content">
                <Image alt="shop" width="100%" src="/assets/images/Health Shop/Product (4).png" />
              </Box>
            </ContentBox>
          </a>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Section2;
