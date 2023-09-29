import { Fragment, useEffect, useState } from "react";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Grid from "@component/grid/Grid";
import FlexBox from "@component/FlexBox";
import Typography, { H1, H2, H5, Paragraph } from "@component/Typography";
import VendorDashboardLayout from "@component/layout/vendor-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorAnalyticsChart from "@component/dashboard/VendorAnalyticsChart";
import api from "@utils/__api__/dashboard";
import { currency } from "@utils/utils";

const VendorDashboard = () => {
  const [sales, setSales] = useState();
  const [loading, setLoading] = useState(false);
  const [summeryCards, setSummeryCards] = useState([]);
  const [countrySales, setCountrySales] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await Promise.all([
        api.getSummeryCards(),
        api.getCountryBasedSales(),
        api.getSales(),
      ]);
      setSummeryCards(data[0]);
      setCountrySales(data[1]);
      setSales(data[2]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getData = () => !loading && !!sales && !!summeryCards && !!countrySales;

  return (
    <Fragment>
      <DashboardPageHeader title="Dashboard" iconName="bag_filled" />

      {loading && <H2>Loading...</H2>}

      {getData() && (
        <Grid container spacing={6}>
          {summeryCards.map((item, ind) => (
            <Grid item lg={4} md={4} sm={6} xs={12} key={ind}>
              <Typography
                as={Card}
                textAlign="center"
                py="1.5rem"
                height="100%"
              >
                <H5 color="text.muted" mb="8px">
                  {item.title}
                </H5>
                <H1 color="gray.700" mb="4px" lineHeight="1.3">
                  {item.amount}
                </H1>
                <Paragraph color="text.muted">{item.subtitle}</Paragraph>
              </Typography>
            </Grid>
          ))}

          <Grid item lg={8} xs={12}>
            <Card p="20px 30px">
              <H5 mb="1.5rem">Sales</H5>
              <VendorAnalyticsChart sales={sales} />
            </Card>
          </Grid>

          <Grid item lg={4} xs={12}>
            <Card p="20px 30px">
              <H5>Top Countries</H5>
              {countrySales.map((item, ind) => (
                <FlexBox
                  alignItems="center"
                  justifyContent="space-between"
                  my="1rem"
                  key={ind}
                >
                  <FlexBox alignItems="center">
                    <Avatar src={item.flagUrl} size={30} mr="8px" />
                    <span>{item.name}</span>
                  </FlexBox>
                  <H5>{currency(item.amount)}</H5>
                </FlexBox>
              ))}
            </Card>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

VendorDashboard.layout = VendorDashboardLayout;

export default VendorDashboard;
