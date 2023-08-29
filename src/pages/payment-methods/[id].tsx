import { Fragment } from "react";
import { useRouter } from "next/router";
import * as yup from "yup";
import { Formik } from "formik";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import { Card1 } from "@component/Card1";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import DashboardLayout from "@component/layout/customer-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";

const PaymentMethodEditor = () => {
  const { query, push } = useRouter();

  const INITIAL_VALUES = {
    exp: "",
    cvc: "",
    name: "",
    card_no: "",
  };

  const VALIDATION_SCHEMA = yup.object().shape({
    name: yup.string().required("required"),
    card_no: yup.string().required("required"),
    exp: yup.string().required("required"),
    cvc: yup.string().required("required"),
  });

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  const HEADER_LINK = (
    <Button color="primary" bg="primary.light" px="2rem" onClick={() => push("/payment-methods")}>
      Back to Payment Methods
    </Button>
  );

  return (
    <Fragment>
      <DashboardPageHeader
        button={HEADER_LINK}
        iconName="credit-card_filled"
        title={`${query.id === "add" ? "Add New" : "Edit"} Payment Method`}
      />

      <Card1>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box mb="30px">
                <Grid container horizontal_spacing={6} vertical_spacing={4}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      name="card_no"
                      label="Card Number"
                      onBlur={handleBlur}
                      value={values.card_no}
                      onChange={handleChange}
                      errorText={touched.card_no && errors.card_no}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      name="name"
                      onBlur={handleBlur}
                      value={values.name}
                      label="Name on Card"
                      onChange={handleChange}
                      errorText={touched.name && errors.name}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      name="exp"
                      label="Exp. Date"
                      value={values.exp}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={touched.exp && errors.exp}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <TextField
                      fullwidth
                      name="cvc"
                      label="CVC"
                      value={values.cvc}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={touched.cvc && errors.cvc}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>
          )}
        </Formik>
      </Card1>
    </Fragment>
  );
};

PaymentMethodEditor.layout = DashboardLayout;

export default PaymentMethodEditor;
