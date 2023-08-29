import { FC } from "react";
import Link from "next/link";
import NextImage from "next/image";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import Typography, { H3, Small } from "@component/Typography";
import { theme } from "@utils/theme";

// styled component
const Wrapper = styled(Card)({
  transition: "all 250ms ease-in-out",
  ":hover": { boxShadow: theme.shadows.large },
});

const Card4: FC = () => {
  return (
    <Box flex="1 1 0" mb="3rem">
      <Link href="/">
        <a>
          <Wrapper boxShadow="border" borderRadius={4} height="100%">
            <Grid container spacing={0} flexWrap="wrap-reverse" containerHeight="100%">
              <Grid item sm={6} xs={12}>
                <Box p="1rem" position="relative">
                  <FlexBox
                    height="100%"
                    minHeight="190px"
                    alignItems="center"
                    position="relative"
                    flexDirection="column"
                    justifyContent="flex-end"
                  >
                    <NextImage
                      alt="shoe"
                      layout="fill"
                      objectFit="contain"
                      src="/assets/images/products/kris-gerhard-0BKZfcamvGg-unsplash-removebg-preview 1.png"
                    />
                  </FlexBox>
                </Box>
              </Grid>

              <Grid item sm={6} xs={12}>
                <Box p="2rem">
                  <H3 mb="0.5rem">Converse Collecitons</H3>

                  <Typography color="text.muted" mb="1.5rem" maxWidth="200px">
                    Get the most exciting deals. Starting at $59
                  </Typography>

                  <Small fontWeight="700" borderBottom="2px solid" borderColor="primary.main">
                    SHOP NOW
                  </Small>
                </Box>
              </Grid>
            </Grid>
          </Wrapper>
        </a>
      </Link>
    </Box>
  );
};

export default Card4;
