import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { H4, Span } from "components/Typography";
import { theme } from "@utils/theme";
import { deviceSize } from "@utils/constants";
import Service from "@models/service.model";

// styled components
const Container = styled(Box)({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem",
});

const StyledFlexBox = styled(FlexBox)({
  gap: ".7rem",
  flexWrap: "wrap",
  background: "#fff",
  alignItems: "center",
  padding: "1.5rem 0.8rem",
  justifyContent: "center",
  border: `1px solid ${theme.colors.gray[300]}`,

  [`@media (max-width: ${deviceSize.sm}px)`]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column",
  },
});

const IconBox = styled(FlexBox)({
  padding: "12px",
  fontSize: "22px",
  borderRadius: "50%",
  alignItems: "center",
  color: theme.colors.marron.main,
  background: theme.colors.marron[50],
});

// ==================================================
type Props = { services: Service[] };
// ==================================================

const Section2: FC<Props> = ({ services = [] }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {services.map(({ id, icon, title, description }) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={id}>
              <StyledFlexBox>
                <IconBox>
                  <Icon>{icon}</Icon>
                </IconBox>

                <div>
                  <H4 mb={0.5} fontSize="1rem" fontWeight="600">
                    {title}
                  </H4>

                  <Span color="gray.600" fontSize={14}>
                    {description}
                  </Span>
                </div>
              </StyledFlexBox>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Section2;
