import { FC } from "react";
import Link from "next/link";
import NextImage from "next/image";
import Box from "@component/Box";
import Card from "@component/Card";
import Typography, { H3, Small, Span } from "@component/Typography";

const Card2: FC = () => {
  return (
    <Link href="/">
      <a>
        <Card p="2.5rem" boxShadow="border" height="100%" borderRadius={4} hoverEffect>
          <NextImage
            width={30}
            height={20}
            alt="shoes"
            layout="responsive"
            objectFit="contain"
            src="/assets/images/products/jacket.png"
          />

          <Box mt="3.5rem">
            <Typography color="text.muted" mb="0.5rem">
              WOMEN'S HANDBAG
            </Typography>

            <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
              <Span color="primary.main" fontSize="30px">
                Minimalist
              </Span>{" "}
              Genuine Cotton Jacket
            </H3>

            <Typography color="text.muted" mb="1rem">
              Handcrafted from genuine Italian leather. One inner compartment with black satin
              lining
            </Typography>

            <Small fontWeight="700" borderBottom="2px solid" borderColor="primary.main">
              SHOP NOW
            </Small>
          </Box>
        </Card>
      </a>
    </Link>
  );
};

export default Card2;
