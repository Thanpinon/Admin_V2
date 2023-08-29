import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Hidden from "@component/hidden";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import { H5 } from "@component/Typography";
import Pagination from "@component/pagination";
import OrderRow from "@component/orders/OrderRow";
import VendorDashboardLayout from "@component/layout/vendor-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import Order from "@models/order.model";

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = async () => {
    const { data } = await axios.get("/api/admin/orders");
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Fragment>
      <DashboardPageHeader title="Orders" iconName="bag_filled" />

      <Hidden down={769}>
        <TableRow padding="0px 18px" boxShadow="none" bg="none">
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Order #
          </H5>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Status
          </H5>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Date purchased
          </H5>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Total
          </H5>

          <H5 flex="0 0 0 !important" color="text.muted" px="22px" my="0px" />
        </TableRow>
      </Hidden>

      {orders.map((item) => (
        <OrderRow order={item} key={item.id} />
      ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination pageCount={5} onChange={(data) => console.log(data)} />
      </FlexBox>
    </Fragment>
  );
};

Orders.layout = VendorDashboardLayout;

export default Orders;
