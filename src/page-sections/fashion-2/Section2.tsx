import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { H4, Span } from "@component/Typography";
import { theme } from "@utils/theme";
import { deviceSize } from "@utils/constants";
import Service from "@models/service.model";

// custom styled components
const StyledFlexBox = styled(Box)({
  display: "grid",
  padding: "2rem 0",
  backgroundColor: "white",
  boxShadow: theme.shadows[5],
  gridTemplateColumns: "repeat(4, 1fr)",

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

const ServiceItem = styled(FlexBox)({
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  borderRight: `1px solid ${theme.colors.gray[400]}`,
  ":last-child": { borderRight: 0 },
  [`@media(max-width: ${deviceSize.md}px)`]: {
    ":nth-of-type(even)": { borderRight: 0 },
  },
  [`@media(max-width: ${deviceSize.sm}px)`]: {
    borderRight: 0,
    justifyContent: "flex-start",
  },
});

// ===========================================================
type Section2Props = { serviceList: Service[] };
// ===========================================================

const Section2: FC<Section2Props> = ({ serviceList }) => {
  return (
    <Container mt="4rem">
      <StyledFlexBox>
        {serviceList.map((item) => {
          return (
            <ServiceItem flexGrow={1} key={item.id}>
              <Icon size="40px">{item.icon}</Icon>

              <Box>
                <H4 lineHeight={1.3}>{item.title}</H4>
                <Span color="gray.600" fontSize={14}>
                  {item.description}
                </Span>
              </Box>
            </ServiceItem>
          );
        })}
      </StyledFlexBox>
    </Container>
  );
};

export default Section2;
