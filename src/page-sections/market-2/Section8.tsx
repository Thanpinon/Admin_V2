import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import { Button } from "@component/buttons";
import Container from "@component/Container";
import { H3, Paragraph, Span } from "@component/Typography";
import { deviceSize } from "@utils/constants";

// styled components
const BannerWrapper = styled(Box)({
  gap: "5rem",
  padding: "2rem",
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  borderRadius: "3px",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "flex-end",
  backgroundPosition: "center left",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(/assets/images/banners/long-banner.jpg)`,

  [`@media (max-width: ${deviceSize.md}px)`]: {
    gap: "1rem",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const StyledButton = styled(Button)({
  borderRadius: 0,
  backgroundColor: "white",
  ":focus": { boxShadow: "none" },
});

const Section8: FC = () => {
  return (
    <Container pt="4rem">
      <BannerWrapper>
        <Box textAlign="center">
          <H3 fontSize={36} lineHeight={1}>
            GIFT{" "}
            <Span color="primary.main" fontSize="inherit">
              50% OFF
            </Span>{" "}
            PERFECT STYLES
          </H3>
          <Paragraph fontSize={16}>
            Only until the end of this week. Terms and conditions apply
          </Paragraph>
        </Box>

        <StyledButton size="large">Discover Now</StyledButton>
      </BannerWrapper>
    </Container>
  );
};

export default Section8;
