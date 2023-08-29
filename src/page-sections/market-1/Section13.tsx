import { FC, useEffect, useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import HoverBox from "@component/HoverBox";
import { H4 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useWindowSize from "@hook/useWindowSize";
import Product from "@models/product.model";
import { calculateDiscount, currency } from "@utils/utils";

// ========================================================
type Props = { bigDiscountList: Product[] };
// ========================================================

const Section13: FC<Props> = ({ bigDiscountList }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);

  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);

  return (
    <CategorySectionCreator iconName="gift" title="Big Discounts" seeMoreLink="#">
      <Box my="-0.25rem">
        <Carousel totalSlides={bigDiscountList.length} visibleSlides={visibleSlides}>
          {bigDiscountList.map((item) => (
            <Box py="0.25rem" key={item.id}>
              <Card p="1rem">
                <Link href={`/product/${item.slug}`} passHref>
                  <a>
                    <HoverBox borderRadius={8} mb="0.5rem">
                      <NextImage
                        width={100}
                        height={100}
                        alt={item.title}
                        src={item.thumbnail}
                        layout="responsive"
                      />
                    </HoverBox>

                    <H4 fontWeight="600" fontSize="14px" mb="0.25rem">
                      {item.title}
                    </H4>

                    <FlexBox>
                      <H4 fontWeight="600" fontSize="14px" color="primary.main" mr="0.5rem">
                        {calculateDiscount(item.price, item.discount)}
                      </H4>

                      <H4 fontWeight="600" fontSize="14px" color="text.muted">
                        <del>{currency(item.price)}</del>
                      </H4>
                    </FlexBox>
                  </a>
                </Link>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default Section13;
