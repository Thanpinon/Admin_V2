import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import { H3, H6, Paragraph } from "components/Typography";
import { theme } from "@utils/theme";

const COMMON_BOX_STYLE = {
  height: 230,
  display: "flex",
  borderRadius: 0,
  boxShadow: "none",
  alignItems: "center",
};

// styled components
const LeftContentBox = styled(Card)({
  ...COMMON_BOX_STYLE,
  background: theme.colors.marron[100],
  backgroundImage: "url('/assets/images/Gift Shop/Offer Card.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right bottom",
});

const RightContentBox = styled(Card)({
  ...COMMON_BOX_STYLE,
  background: theme.colors.marron[100],
  backgroundImage: "url('/assets/images/Gift Shop/Offer 1.png')",
  backgroundSize: "contain",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  display: "block",
});

const RightContent = styled(Box)({
  paddingLeft: 48,
  "& p": { fontSize: 13, lineHeight: 1.4 },
});

const StyledLink = styled("a")({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "5px",
  textDecoration: "underline",
});

const Section3: FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={7} xs={12}>
        <LeftContentBox>
          <RightContent>
            <H6>Holiday’s Offer!</H6>
            <H3>Sale 50% Off</H3>
            <Paragraph py={1}>Use Code : Holi50</Paragraph>

            <Link href="#" passHref>
              <StyledLink>Shop Now</StyledLink>
            </Link>
          </RightContent>
        </LeftContentBox>
      </Grid>

      <Grid item md={5} xs={12}>
        <RightContentBox>
          <Box textAlign="center" pt={4}>
            <H6>Shop Online Gift Under</H6>
            <H3>$20.00</H3>

            <Link href="#" passHref>
              <StyledLink>Shop Now</StyledLink>
            </Link>
          </Box>
        </RightContentBox>
      </Grid>
    </Grid>
  );
};

export default Section3;
