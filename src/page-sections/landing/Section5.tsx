import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import { Chip } from "@component/Chip";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Container from "@component/Container";
import { H2, H3, Paragraph } from "@component/Typography";
import { getTheme } from "@utils/utils";

const SectionWrapper = styled(Box)`
  background: ${getTheme("colors.gray.100")} url(/assets/images/landing/bonik.svg) center/contain
    no-repeat;
`;

const Section5: FC = () => {
  return (
    <SectionWrapper py="6rem" id="price">
      <Container id="section-3" position="relative">
        <H2
          mx="auto"
          mb="4.5rem"
          fontSize="40px"
          maxWidth="830px"
          fontWeight="900"
          textAlign="center"
          color="secondary.main"
        >
          Ready to Boost <br /> Your Ecommerce Business?
        </H2>

        <FlexBox flexWrap="wrap" justifyContent="center" m="-1.325rem">
          <Card
            pt="3rem"
            pb="2rem"
            px="1rem"
            m="1.325rem"
            minWidth="270px"
            textAlign="center"
            boxShadow="regular"
            hoverEffect
          >
            <H3>Regular</H3>
            <Box position="relative" display="inline-block" mb="1.5rem">
              <H3 fontSize="72px" color="secondary.main">
                28
              </H3>
              <Chip position="absolute" top="1rem" left="-1rem" fontWeight="600" fontSize="16px">
                $
              </Chip>
            </Box>

            <Paragraph maxWidth="216px" mx="auto" mb="130px">
              Can be used in a single end product which end users <b>are not charged</b> for.
            </Paragraph>

            <a href="https://1.envato.market/oeNbNe">
              <Button variant="outlined" color="secondary" mx="auto">
                Purchase Now
              </Button>
            </a>
          </Card>

          <Card
            pt="3rem"
            pb="2rem"
            px="1rem"
            m="1.325rem"
            minWidth="270px"
            bg="primary.main"
            textAlign="center"
            color="gray.white"
            boxShadow="regular"
            hoverEffect
          >
            <H3>Extended License</H3>
            <Box position="relative" display="inline-block" mb="1.5rem">
              <H3 fontSize="72px">700</H3>
              <Chip position="absolute" top="1rem" left="-1rem" fontWeight="600" fontSize="16px">
                $
              </Chip>
            </Box>

            <Paragraph maxWidth="216px" mx="auto" mb="130px">
              Can be used in a single end product which end users <b>are not charged</b> for.
            </Paragraph>

            <a href="https://1.envato.market/oeNbNe">
              <Button variant="outlined" color="dark" mx="auto">
                Purchase Now
              </Button>
            </a>
          </Card>
        </FlexBox>
      </Container>
    </SectionWrapper>
  );
};

export default Section5;
