import { FC } from "react";
import Link from "next/link";
import Box from "@component/Box";
import Card from "@component/Card";
import Image from "@component/Image";
import { Button } from "@component/buttons";
import { H2, H6, SemiSpan } from "@component/Typography";
import { currency } from "@utils/utils";

// ==========================================================
type Props = {
  title: string;
  price: number;
  imgUrl: string;
  discount: number;
};
// ==========================================================

const Card1: FC<Props> = ({ title, price, discount, imgUrl }) => {
  return (
    <Card boxShadow="none" height="100%" borderRadius={4}>
      <Box maxWidth="320px" pt="70px" mx="auto">
        <H2 mb="0.5rem" textAlign="center">
          {title}
        </H2>

        <SemiSpan display="block" textAlign="center" mb="1.5rem">
          Starting at {currency(price, 0)} & save upto {discount}%
        </SemiSpan>

        <Link href="/">
          <a>
            <Button mx="auto">
              <H6
                pb="2px"
                fontSize="12px"
                textAlign="center"
                borderBottom="2px solid"
                borderColor="primary.main"
              >
                SHOP NOW
              </H6>
            </Button>
          </a>
        </Link>
      </Box>

      <Image width="100%" src={imgUrl} alt="shoes" />
    </Card>
  );
};

export default Card1;
