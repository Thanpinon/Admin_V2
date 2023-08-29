import { Fragment } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Router from "next/router";
import { Card1 } from "@component/Card1";
import { Button } from "@component/buttons";
import AddressForm from "@component/address/AddressForm";
import DashboardLayout from "@component/layout/customer-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import Address from "@models/address.model";
import api from "@utils/__api__/address";

// =============================================================
type Props = { address: Address };
// =============================================================

const AddressDetails = ({ address }: Props) => {
  const handleGoBack = () => Router.push("/address");

  const HEADER_LINK = (
    <Button color="primary" bg="primary.light" px="2rem" onClick={handleGoBack}>
      Back to Address
    </Button>
  );

  return (
    <Fragment>
      <DashboardPageHeader iconName="pin_filled" title="Edit Address" button={HEADER_LINK} />

      <Card1>
        <AddressForm address={address} />
      </Card1>
    </Fragment>
  );
};

AddressDetails.layout = DashboardLayout;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await api.getIds();

  return {
    paths: paths, //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const address = await api.getAddress(String(params.id));
  return { props: { address } };
};

export default AddressDetails;
