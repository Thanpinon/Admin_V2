import { FC } from "react";
import Box from "@component/Box";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { H3, SemiSpan } from "@component/Typography";
import Service from "@models/service.model";

// ===========================================================
type Props = { serviceList: Service[] };
// ===========================================================

const Section8: FC<Props> = ({ serviceList }) => {
  return (
    <FlexBox
      p="1rem"
      mb="3.75rem"
      flexWrap="wrap"
      borderRadius={8}
      border="1px solid"
      borderColor="gray.400"
    >
      {serviceList.map((item) => (
        <FlexBox alignItems="center" p="1rem" mx="auto" key={item.title}>
          <Icon size="42px" mr="0.87rem">
            {item.icon}
          </Icon>

          <Box>
            <H3 lineHeight="1.3">{item.title}</H3>
            <SemiSpan color="text.muted">{item.description}</SemiSpan>
          </Box>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

// const serviceList = [
//   { title: "Free Delivery", subtitle: "Orders over", iconName: "delivery-truck" },
//   { title: "Money Gurantee", subtitle: "7 Days Back", iconName: "piggy-bank" },
//   { title: "365 Days", subtitle: "For free return", iconName: "alarm-clock" },
//   { title: "Payment", subtitle: "Secure system", iconName: "credit-card-2" },
//   { title: "Online Support", subtitle: "24/7 daily", iconName: "smartphone" },
// ];

export default Section8;
