import { Fragment } from "react";
import Router from "next/router";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import Pagination from "@component/pagination";
import Typography, { H5 } from "@component/Typography";
import { Button, IconButton } from "@component/buttons";
import DashboardLayout from "@component/layout/customer-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";

const AddressList = () => {
  const handleNavigate = () => Router.push("/payment-methods/add");

  const HEADER_LINK = (
    <Button color="primary" bg="primary.light" px="2rem" onClick={handleNavigate}>
      Add New Payment Method
    </Button>
  );

  return (
    <Fragment>
      <DashboardPageHeader
        button={HEADER_LINK}
        title="Payment Methods"
        iconName="credit-card_filled"
      />

      {orderList.map((item, ind) => (
        <TableRow key={ind} my="1rem" padding="6px 18px">
          <FlexBox alignItems="center" m="6px">
            <Card width="42px" height="28px" mr="10px" elevation={4}>
              <img
                width="100%"
                alt={item.payment_method}
                src={`/assets/images/payment-methods/${item.payment_method}.svg`}
              />
            </Card>

            <H5 className="pre" m="6px">
              Ralf Edward
            </H5>
          </FlexBox>

          <Typography className="pre" m="6px">
            {item.card_no}
          </Typography>

          <Typography className="pre" m="6px">
            {item.exp}
          </Typography>

          <Typography className="pre" textAlign="center" color="text.muted">
            <IconButton size="small" onClick={() => Router.push("/payment-methods/xkssThds6h37sd")}>
              <Icon variant="small" defaultcolor="currentColor">
                edit
              </Icon>
            </IconButton>

            <IconButton size="small" onClick={(e) => e.stopPropagation()}>
              <Icon variant="small" defaultcolor="currentColor">
                delete
              </Icon>
            </IconButton>
          </Typography>
        </TableRow>
      ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination pageCount={5} onChange={(data) => console.log(data)} />
      </FlexBox>
    </Fragment>
  );
};

const orderList = [
  {
    orderNo: "1050017AS",
    exp: "08 / 2022",
    payment_method: "Amex",
    card_no: "1234 **** **** ****",
  },
  {
    orderNo: "1050017AS",
    exp: "10 / 2025",
    payment_method: "Mastercard",
    card_no: "1234 **** **** ****",
  },
  {
    orderNo: "1050017AS",
    exp: "N/A",
    payment_method: "PayPal",
    card_no: "ui-lib@email.com",
  },
  {
    orderNo: "1050017AS",
    exp: "08 / 2022",
    payment_method: "Visa",
    card_no: "1234 **** **** ****",
  },
];

AddressList.layout = DashboardLayout;

export default AddressList;
