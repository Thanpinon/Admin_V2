import { Fragment } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { format } from "date-fns";
import Box from "@component/Box";
import { Chip } from "@component/Chip";
import Hidden from "@component/hidden";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import Pagination from "@component/pagination";
import { IconButton } from "@component/buttons";
import Typography, { SemiSpan, Small } from "@component/Typography";
import DashboardLayout from "@component/layout/customer-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import Ticket from "@models/Ticket.model";
import api from "@utils/__api__/ticket";

// ==========================================================
type TicketListProps = { ticketList: Ticket[] };
// ==========================================================

const TicketList = ({ ticketList }: TicketListProps) => {
  return (
    <Fragment>
      <DashboardPageHeader title="Support Ticket" iconName="support" />

      {ticketList.map((item) => (
        <Link href={`/support-tickets/${item.slug}`} key={item.id} passHref>
          <TableRow as="a" my="1rem" padding="15px 24px">
            <Box>
              <span>{item.title}</span>

              <FlexBox alignItems="center" flexWrap="wrap" pt="0.5rem" m="-6px">
                <Chip p="0.25rem 1rem" bg="primary.light" m="6px">
                  <Small color="primary.main">{item.type}</Small>
                </Chip>

                <Chip p="0.25rem 1rem" bg="success.light" m="6px">
                  <Small color="success.main">{item.status}</Small>
                </Chip>

                <SemiSpan className="pre" m="6px">
                  {format(new Date(item.date), "MMM dd, yyyy")}
                </SemiSpan>

                <SemiSpan m="6px">{item.category}</SemiSpan>
              </FlexBox>
            </Box>

            <Hidden flex="0 0 0 !important" down={769}>
              <Typography textAlign="center" color="text.muted">
                <IconButton size="small">
                  <Icon variant="small" defaultcolor="currentColor">
                    arrow-right
                  </Icon>
                </IconButton>
              </Typography>
            </Hidden>
          </TableRow>
        </Link>
      ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination
          onChange={(data) => console.log(data)}
          pageCount={Math.ceil(ticketList.length / 10)}
        />
      </FlexBox>
    </Fragment>
  );
};

TicketList.layout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  const ticketList = await api.getTicketList();
  return { props: { ticketList } };
};

export default TicketList;
