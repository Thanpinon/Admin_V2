import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Card from "@component/Card";
import Image from "@component/Image";
import Grid from "@component/grid/Grid";
import { Button } from "@component/buttons";
import { deviceSize } from "@utils/constants";
import { H1, Paragraph } from "components/Typography";

// styled component
const Container = styled(Card)({
  marginBottom: 40,
  padding: "50px",
  background: "#efefef",
  transition: "all 0.3s",
  [`@media (max-width: ${deviceSize.md}px)`]: {
    margin: "auto",
    padding: "30px 20px",
    "& .content": { marginBottom: "30px" },
    "& h1": { fontSize: 25 },
  },
});

const Section5: FC = () => {
  return (
    <Container>
      <Link href="#">
        <a>
          <Grid container>
            <Grid className="content" item md={7} xs={12}>
              <Paragraph>Till 10 Dec, 2021</Paragraph>
              <H1>25% Special Off Today</H1>
              <H1 mb={40}>Only for Vegetables</H1>
              <Button color="primary" variant="contained">
                Shop Now
              </Button>
            </Grid>

            <Grid item md={5}>
              <Image
                width="100%"
                alt="discount"
                src="/assets/images/Groceries Shop/vagitable.png"
              />
            </Grid>
          </Grid>
        </a>
      </Link>
    </Container>
  );
};

export default Section5;
