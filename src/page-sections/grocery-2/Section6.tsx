import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { H3, H5 } from "@component/Typography";
import { Carousel } from "@component/carousel";
import { deviceSize } from "@utils/constants";

// styled component
const Wrapper = styled.div`
  .carousel-card {
    position: relative;
    padding: 64px 72px;

    @media only screen and (max-width: ${deviceSize.sm}px) {
      padding: 1rem 1rem;
    }
  }
`;

// ============================================================
type Props = { cardList: any[] };
// ============================================================

const Section6: FC<Props> = ({ cardList }) => {
  return (
    <Wrapper>
      <Box m="-0.25rem">
        <Carousel
          spacing="0px"
          totalSlides={3}
          showDots={true}
          autoPlay={true}
          visibleSlides={1}
          showArrowOnHover={true}
          arrowButtonColor="inherit"
        >
          {cardList.map((item, ind) => (
            <Box p="0.25rem" key={ind}>
              <Card className="carousel-card" bg={item.bgColor}>
                <FlexBox alignItems="center" flexWrap="wrap">
                  <Box flex={1}>
                    <H5 fontWeight="600" fontSize="18px" mb="0.5rem">
                      {item.subtitle}
                    </H5>

                    <H3 mb="2rem" fontSize="35px" lineHeight="1.37">
                      {item.title}
                    </H3>

                    <Link href={item.shopUrl}>
                      <a>
                        <Button variant="contained" color="primary">
                          Shop Now
                        </Button>
                      </a>
                    </Link>
                  </Box>

                  <img src={item.imgUrl} alt="" />
                </FlexBox>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Wrapper>
  );
};

export default Section6;
