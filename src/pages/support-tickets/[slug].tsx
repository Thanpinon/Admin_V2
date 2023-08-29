import { Fragment } from "react";
import Router from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { format } from "date-fns";
import Box from "@component/Box";
import Avatar from "@component/avatar";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import { H5, SemiSpan } from "@component/Typography";
import DashboardLayout from "@component/layout/customer-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import api from "@utils/__api__/ticket";
import Ticket from "@models/Ticket.model";

// ==========================================================
type Props = { ticket: Ticket };
// ==========================================================

const TicketDetails = ({ ticket }: Props) => {
  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  const handleGoBack = () => Router.push("/support-tickets");

  const HEADER_LINK = (
    <Button color="primary" bg="primary.light" px="2rem" onClick={handleGoBack}>
      Back to Support Ticket
    </Button>
  );

  return (
    <Fragment>
      <DashboardPageHeader iconName="support" title="Support Ticket" button={HEADER_LINK} />

      {ticket.conversation.map((item, ind) => (
        <FlexBox mb="30px" key={ind}>
          <Avatar src={item.imgUrl} mr="1rem" />
          <Box>
            <H5 fontWeight="600" mt="0px" mb="0px">
              {item.name}
            </H5>
            <SemiSpan>{format(new Date(item.date), "hh:mm:a | dd MMM yyyy")}</SemiSpan>
            <Box borderRadius="10px" bg="gray.200" p="1rem" mt="1rem">
              {item.text}
            </Box>
          </Box>
        </FlexBox>
      ))}

      <Divider mb="2rem" bg="gray.300" />

      <TextArea
        rows={8}
        fullwidth
        mb="1.5rem"
        borderRadius={8}
        placeholder="Write your message here..."
      />

      <Button variant="contained" color="primary" ml="auto" onClick={handleFormSubmit}>
        Post message
      </Button>
    </Fragment>
  );
};

TicketDetails.layout = DashboardLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await api.getSlugs();

  return {
    paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ticket = await api.getTicket(String(params.slug));
  return { props: { ticket } };
};

export default TicketDetails;
