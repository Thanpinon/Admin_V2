import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { H4, Span } from "@component/Typography";
import { theme } from "@utils/theme";
import Service from "@models/service.model";

// styled components
const Container = styled(Box)({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem",
});

const StyledFlexBox = styled(FlexBox)({
  flexWrap: "wrap",
  padding: "1.5rem",
  borderRadius: "8px",
  background: "#fff",
  boxShadow: theme.shadows[2],
});

const IconBox = styled(FlexBox)({
  fontSize: "25px",
  borderRadius: "50%",
  marginRight: "16px",
  alignItems: "center",
  background: theme.colors.primary[50],
});

// ========================================================
type Props = { services: Service[] };
// ========================================================

const Section5: FC<Props> = ({ services = [] }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        {services.map((item, ind) => {
          return (
            <Grid item lg={4} md={4} sm={12} xs={12} key={ind}>
              <StyledFlexBox alignItems="center">
                <IconBox>
                  <Icon size="40px" color="primary">
                    {item.icon}
                  </Icon>
                </IconBox>

                <Box flex={1}>
                  <H4 fontSize={16} fontWeight="700" sx={{ color: "primary.main" }}>
                    {item.title}
                  </H4>

                  <Span fontSize={14} color="gray.600">
                    {item.description}
                  </Span>
                </Box>
              </StyledFlexBox>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Section5;
