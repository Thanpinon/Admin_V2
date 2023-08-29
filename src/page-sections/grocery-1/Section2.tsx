import { FC } from "react";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import { H4, SemiSpan } from "@component/Typography";
import Service from "@models/service.model";

// ===============================================
type Props = { id: string; services: Service[] };
// ===============================================

const Section2: FC<Props> = ({ id, services }) => {
  return (
    <Container py={84} id={id}>
      <Grid container spacing={6}>
        {services.map((item, ind) => (
          <Grid item lg={3} md={6} xs={12} key={ind}>
            <FlexBox
              p="1.5rem"
              shadow={2}
              borderRadius={8}
              alignItems="center"
              backgroundColor="white"
            >
              <Box color="text.muted" mr="1rem">
                <Icon size="44px" defaultcolor="currentColor">
                  {item.icon}
                </Icon>
              </Box>

              <div>
                <H4 color="gray.900" fontSize="1rem" fontWeight="700" ellipsis>
                  {item.title}
                </H4>

                <SemiSpan>{item.description}</SemiSpan>
              </div>
            </FlexBox>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// const serviceList = [
//   { iconName: "truck", title: "Fast Delivery", subtitle: "Start from $10" },
//   {
//     iconName: "feedback-thumbs-up",
//     title: "Money Guarantee",
//     subtitle: "7 Days Back",
//   },
//   { iconName: "alarm-clock", title: "365 Days", subtitle: "For free return" },
//   { iconName: "shield", title: "Payment", subtitle: "Secure system" },
// ];

export default Section2;
