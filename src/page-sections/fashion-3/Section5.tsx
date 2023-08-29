import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { H2, H3, H4, Span } from "@component/Typography";
import { theme } from "@utils/theme";

// styled components
const Wrapper = styled(Box)({
  rowGap: "1rem",
  padding: "3rem",
  display: "flex",
  flexWrap: "wrap",
  columnGap: "4rem",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundImage: "url(/assets/images/banners/banner-14.jpg)",
  ":hover": { "& .offer": { transform: "rotate(-15deg) scale(1.1)" } },
});

const OfferBox = styled(FlexBox)({
  width: 140,
  height: 140,
  color: "#fff",
  borderRadius: "50%",
  textAlign: "center",
  alignItems: "center",
  transition: "all 0.3s",
  justifyContent: "center",
  transform: "rotate(-15deg)",
  border: `2px solid ${theme.colors.gray[600]}`,
});

const Section5: FC = () => {
  return (
    <Container mt="4rem">
      <Wrapper>
        <Box style={{ width: "min-content", color: "#fff" }}>
          <H4 fontSize={20}>END OF SEASON</H4>
          <Divider mb="5px" style={{ borderColor: theme.colors.gray[500] }} />
          <H2 fontSize={75} lineHeight={1}>
            SALE
          </H2>
        </Box>

        <OfferBox className="offer">
          <H3 lineHeight={1} fontSize={17}>
            AT UP TO{" "}
            <Span fontSize={32} color="primary.main">
              50%
            </Span>{" "}
            OFF
          </H3>
        </OfferBox>
      </Wrapper>
    </Container>
  );
};

export default Section5;
