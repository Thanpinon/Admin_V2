import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import LazyImage from "@component/LazyImage";
import { Button } from "@component/buttons";
import { H3, Paragraph } from "@component/Typography";
import { deviceSize } from "@utils/constants";
import { theme } from "@utils/theme";
import { OfferCard } from "@models/grocery-3.model";

// styled components
const StyledCard = styled(Card)({
  display: "flex",
  boxShadow: "none",
  alignItems: "center",
  padding: "20px 50px",
  justifyContent: "center",
  background: theme.colors.paste[50],
  [`@media (max-width: ${deviceSize.sm}px)`]: {
    padding: "20px 30px",
    "& h3": { fontSize: 20 },
  },
});

// ============================================================
type Props = { offerProducts: OfferCard[] };
// ============================================================

const Section2: FC<Props> = ({ offerProducts }) => {
  return (
    <Grid container spacing={6}>
      {offerProducts.map((item, ind) => (
        <Grid key={ind} item md={6} sm={12} xs={12}>
          <Link href="#">
            <a>
              <StyledCard>
                <Box width="60%">
                  <Paragraph fontWeight={600}>{item.title}</Paragraph>
                  <H3 mb={3} fontSize={25} lineHeight={1.35}>
                    {item.discountOffer}
                  </H3>

                  <Button color="primary" variant="outlined">
                    {item.buttonText}
                  </Button>
                </Box>

                <Box width="40%">
                  <LazyImage
                    width={100}
                    height={100}
                    src={item.imgUrl}
                    layout="responsive"
                    objectFit="contain"
                  />
                </Box>
              </StyledCard>
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Section2;
