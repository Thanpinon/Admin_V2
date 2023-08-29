import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { H4, Span } from "@component/Typography";
import { deviceSize } from "@utils/constants";
import { theme } from "@utils/theme";
import Service from "@models/service.model";

// const services = [
//   { title: "Fast Delivery", subtitle: "Start from $10" },
//   { title: "Money Guarantee", subtitle: "7 Days Back" },
//   { title: "365 Days", subtitle: "For free return" },
//   { title: "Payment", subtitle: "Secure system" },
// ];

// custom styled components
const StyledFlexBox = styled(Box)({
  display: "grid",
  padding: "2rem 0",
  gridTemplateColumns: "repeat(4, 1fr)",
  borderTop: `1px solid ${theme.colors.gray[300]}`,
  borderBottom: `1px solid ${theme.colors.gray[300]}`,

  [`@media(max-width: ${deviceSize.md}px)`]: {
    gap: 30,
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  [`@media(max-width: ${deviceSize.sm}px)`]: {
    gap: 30,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    gridTemplateColumns: "1fr",
  },
});

// ===================================
type Props = { services: Service[] };
// ===================================

const Section7: FC<Props> = ({ services }) => {
  return (
    <Container mt="4rem">
      <StyledFlexBox>
        {services.map((item) => (
          <FlexBox alignItems="center" justifyContent="center" flexDirection="column" key={item.id}>
            <H4 lineHeight={1.3}>{item.title}</H4>
            <Span color="grey.600">{item.description}</Span>
          </FlexBox>
        ))}
      </StyledFlexBox>
    </Container>
  );
};

export default Section7;
