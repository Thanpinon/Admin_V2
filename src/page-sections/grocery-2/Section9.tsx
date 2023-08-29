import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Carousel } from "@component/carousel";
import { H5, Span } from "@component/Typography";
import { deviceSize } from "@utils/constants";

// styled component
const Wrapper = styled.div`
  .quote {
    position: absolute;

    & > div {
      height: 4rem;
      width: 4rem;
    }
  }
  .quote-open {
    left: 0;
    top: 0;
  }
  .quote-close {
    right: 0;
    bottom: 0;
  }

  .quote-content {
    padding: 3.5rem 6rem;
  }

  .avatar {
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    margin-right: 2.5rem;
    transform: rotate(-15deg);
  }

  .carousel-card {
    position: relative;
    padding: 2.25rem 5rem;
  }

  @media only screen and (max-width: ${deviceSize.sm}px) {
    .carousel-card {
      padding: 1rem 1rem;
    }
    .quote {
      & > div {
        height: 2rem;
        width: 2rem;
      }
    }
    .content {
      padding: 1.25rem 3rem;
    }
  }
`;

// ======================================================================
type Testimonial = {
  id: string;
  rating: number;
  comment: string;
  user: { name: string; avatar: string };
};

type Props = { testimonials: Testimonial[] };
// ======================================================================

const Section9: FC<Props> = ({ testimonials }) => {
  return (
    <Wrapper>
      <Box m="-0.25rem">
        <Carousel
          spacing="0px"
          showDots={true}
          visibleSlides={1}
          showArrowOnHover={true}
          arrowButtonColor="inherit"
          totalSlides={testimonials.length}
        >
          {testimonials.map((item) => (
            <Box p="0.25rem" key={item.id}>
              <Card className="carousel-card">
                <FlexBox className="quote-content" position="relative" flexWrap="wrap">
                  <Icon className="quote quote-open">quote-open</Icon>
                  <Avatar className="avatar" src={item.user.avatar} size={64} />

                  <Box maxWidth="410px">
                    <Span color="gray.700">{item.comment}</Span>

                    <H5 mt="0.5rem" fontWeight="700">
                      {item.user.name}
                    </H5>
                  </Box>

                  <Icon className="quote quote-close">quote-close</Icon>
                </FlexBox>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Wrapper>
  );
};

export default Section9;
