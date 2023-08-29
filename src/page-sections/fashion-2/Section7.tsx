import { FC } from "react";
import styled from "styled-components";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { H1, H3, Paragraph, Span } from "@component/Typography";

// styled component
const StyledButton = styled(Button)({
  borderRadius: 0,
  padding: "1rem 2rem",
  ":focus": { boxShadow: "none" },
});

const Section7: FC = () => {
  return (
    <FlexBox
      mt="4rem"
      alignItems="center"
      flexDirection="column"
      style={{
        color: "#fff",
        textAlign: "center",
        padding: "6rem 2rem",
        backgroundSize: "cover",
        backgroundColor: "grey.500",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(/assets/images/banners/banner-11.jpg)",
      }}
    >
      <H3 fontWeight={400} fontSize={30} lineHeight={1}>
        Extra <Span color="primary.main">30% Off</Span> Online
      </H3>

      <H1 fontSize={50} lineHeight={1} mb={1}>
        Summer Season Sale
      </H1>

      <Paragraph fontWeight={600} fontSize={18} mb={4}>
        Free shipping on orders over $99
      </Paragraph>

      <StyledButton variant="contained" color="primary">
        Shop Now
      </StyledButton>
    </FlexBox>
  );
};

export default Section7;
