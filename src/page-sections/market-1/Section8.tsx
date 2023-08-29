import { FC } from "react";
import Link from "next/link";
import NextImage from "next/image";
import Grid from "@component/grid/Grid";
import Container from "@component/Container";

const Section8: FC = () => {
  return (
    <Container mb="70px">
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Link href="/">
            <a>
              <NextImage
                width={385}
                height={342}
                alt="banner"
                layout="responsive"
                objectFit="contain"
                src="/assets/images/banners/banner-1.png"
              />
            </a>
          </Link>
        </Grid>

        <Grid item xs={12} md={8}>
          <Link href="/">
            <a>
              <NextImage
                width={790}
                height={342}
                alt="banner"
                layout="responsive"
                objectFit="contain"
                src="/assets/images/banners/banner-2.png"
              />
            </a>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section8;
