import Grid from "@component/grid/Grid";
import PaymentForm from "@sections/payment/PaymentForm";
import PaymentSummary from "@sections/payment/PaymentSummary";
import CheckoutNavLayout from "@component/layout/CheckoutNavLayout";

const Checkout = () => {
  return (
    <Grid container flexWrap="wrap-reverse" spacing={6}>
      <Grid item lg={8} md={8} xs={12}>
        <PaymentForm />
      </Grid>

      <Grid item lg={4} md={4} xs={12}>
        <PaymentSummary />
      </Grid>
    </Grid>
  );
};

Checkout.layout = CheckoutNavLayout;

export default Checkout;
