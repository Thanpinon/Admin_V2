import Link from "next/link";
import { FC, Fragment } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { H1, H3, H6, Paragraph } from "components/Typography";
import { theme } from "@utils/theme";

// styled components
const ContentBox = styled(Box)<{ imgUrl: string }>(({ imgUrl }) => ({
  height: 230,
  display: "flex",
  borderRadius: 0,
  boxShadow: "none",
  alignItems: "center",
  background: theme.colors.paste[50],
  backgroundImage: `url('${imgUrl}')`,
  backgroundOrigin: "content-box",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}));

const LeftContentBox = styled(ContentBox)({
  backgroundPosition: "right bottom",
});

const RightContentBox = styled(ContentBox)({
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundPosition: "bottom",
});

const RightContent = styled(Box)({
  padding: 24,
  "& p": { fontSize: 13, lineHeight: 1.4 },
});

const StyledButton = styled("button")({
  all: "unset",
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "5px",
  textDecoration: "underline",
  ":hover": { color: theme.colors.primary.main },
});

const Section2: FC = () => {
  const router = useRouter();

  const product1 = "/assets/images/Furniture Shop/Furniture (6).png";
  const product2 = "/assets/images/Furniture Shop/Furniture (5).png";
  const product3 = "/assets/images/Furniture Shop/Furniture (1).png";
  const product4 = "/assets/images/Furniture Shop/Furniture (3).png";
  const product5 = "/assets/images/Furniture Shop/Furniture (4).png";

  return (
    <Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <Link href="/sale-page-1">
            <a>
              <LeftContentBox imgUrl={product1}>
                <RightContent>
                  <H6>Modern Furniture.</H6>
                  <H1 fontSize={35} color="primary.main">
                    Big Sale
                  </H1>
                  <H3 fontSize={23}>UP TO 50% OFF</H3>
                  <StyledButton>Shop Now</StyledButton>
                </RightContent>
              </LeftContentBox>
            </a>
          </Link>
        </Grid>

        <Grid item xs={12} md={5}>
          <Link href="/sale-page-1">
            <a>
              <RightContentBox imgUrl={product2} mb={2}>
                <Box textAlign="center" pt={3}>
                  <H6>Sofa Collection</H6>
                  <H3 fontSize={23} color="primary.main">
                    UP TO 60% OFF
                  </H3>
                  <StyledButton>Shop Now</StyledButton>
                </Box>
              </RightContentBox>
            </a>
          </Link>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <Link href="/sale-page-1">
            <a>
              <RightContentBox
                imgUrl={product4}
                style={{
                  height: 484,
                  paddingTop: "20px",
                  paddingLeft: "80px",
                  paddingRight: "80px",
                }}
              >
                <Box textAlign="center">
                  <H3>Winter Offer!</H3>
                  <H1 fontSize={50} color="primary.main">
                    50% OFF
                  </H1>
                  <H6>All Kind of Furniture Items</H6>
                  <StyledButton onClick={() => router.push("/sale-page-1")}>Shop Now</StyledButton>
                </Box>
                <Box className="content" />
              </RightContentBox>
            </a>
          </Link>
        </Grid>

        <Grid item xs={12} md={5}>
          <Link href="/sale-page-1">
            <a>
              <LeftContentBox imgUrl={product5} style={{ padding: "20px auto 20px 20px" }}>
                <RightContent>
                  <Paragraph>Modern & Comfortable</Paragraph>
                  <H3 fontSize={20} color="primary.main">
                    Chair Collection
                  </H3>

                  <StyledButton>Shop Now</StyledButton>
                </RightContent>
              </LeftContentBox>
            </a>
          </Link>

          <Link href="/sale-page-1">
            <a>
              <LeftContentBox
                imgUrl={product3}
                style={{ marginTop: 24, padding: "20px auto 20px 20px" }}
              >
                <RightContent>
                  <Paragraph>December New!</Paragraph>
                  <H3 fontSize={20} color="primary.main">
                    Sofa Chair
                  </H3>

                  <StyledButton>Shop Now</StyledButton>
                </RightContent>
              </LeftContentBox>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Section2;
