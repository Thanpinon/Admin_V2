import { Fragment } from "react";
import Router from "next/router";
import { Card1 } from "@component/Card1";
import { Button } from "@component/buttons";
import AddressForm from "@component/address/AddressForm";
import DashboardLayout from "@component/layout/customer-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";

const CreateAddress = () => {
  const handleGoBack = () => Router.push("/address");

  const HEADER_LINK = (
    <Button color="primary" bg="primary.light" px="2rem" onClick={handleGoBack}>
      Back to Address
    </Button>
  );

  return (
    <Fragment>
      <DashboardPageHeader iconName="pin_filled" title="Add New Address" button={HEADER_LINK} />

      <Card1>
        <AddressForm />
      </Card1>
    </Fragment>
  );
};

CreateAddress.layout = DashboardLayout;

export default CreateAddress;
