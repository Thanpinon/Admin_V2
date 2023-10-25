import { Fragment } from "react";
import Link from "next/link";
import Box from "@component/Box";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import { Card1 } from "@component/Card1";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import Typography from "@component/Typography";
import { ProductCard7 } from "@component/product-cards";
import CheckoutNavLayout from "@component/layout/CheckoutNavLayout";
import { useAppContext } from "@context/AppContext";
import { currency } from "@utils/utils";

const Cart = () => {
  const { state } = useAppContext();

  const getTotalPrice = () => {
    return (
      state.cart.reduce(
        (accumulator, item) => accumulator + item.price * item.qty,
        0
      ) || 0
    );
  };

  return (
    <Fragment>
      <Grid container spacing={6}>
        <Grid item lg={8} md={8} xs={12}>
          {state.cart.map((item) => (
            <ProductCard7
              mb="1.5rem"
              id={item.id}
              key={item.id}
              qty={item.qty}
              slug={item.slug}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          ))}
        </Grid>

        <Grid item lg={4} md={4} xs={12}>
          <Card1>
            <FlexBox
              justifyContent="space-between"
              alignItems="center"
              mb="1rem"
            >
              <Typography color="gray.600">รวม :</Typography>

              <Typography fontSize="18px" fontWeight="600" lineHeight="1">
                {currency(getTotalPrice())}
              </Typography>
            </FlexBox>

            <Divider mb="1rem" />

            <FlexBox alignItems="center" mb="1rem">
              <Typography fontWeight="600" mr="10px">
                รายละเอียดเพิ่มเติม
              </Typography>

              <Box p="3px 10px" bg="primary.light" borderRadius="3px">
                <Typography fontSize="12px" color="primary.main">
                  หมายเหตุ
                </Typography>
              </Box>
            </FlexBox>

            <TextArea rows={6} fullwidth mb="1rem" />

            {/* <Divider mb="1rem" />

            <TextField placeholder="โค๊ตส่วนลด" fullwidth />

            <Button variant="outlined" color="primary" mt="1rem" mb="30px" fullwidth>
              ใช้คูปองส่วนลด
            </Button> */}

            <Divider mb="1.5rem" />

            <Typography fontWeight="600" mb="1rem">
              ข้อมูลเพิ่มเติม
            </Typography>

            {/* <Select
              mb="1rem"
              label="ต้องการให้ iHAVECPU ประกอบให้หรือไม่"
              options={countryList}
              placeholder="เลือกสั่งประกอบ"
              onChange={(e) => console.log(e)}
            /> */}

            <Select
              mb="1rem"
              label="ต้องการให้ iHAVECPU ประกอบให้หรือไม่"
              options={optionList}
              placeholder="เลือกสั่งประกอบ"
              onChange={(e) => console.log(e)}
            />

            <Box my="1rem">
              <Link href="/checkout">
                <Button
                  variant="contained"
                  color="ihavecpu"
                  style={{ width: "100%" }}
                >
                  ดำเนินการต่อ
                </Button>
              </Link>
            </Box>
          </Card1>
        </Grid>
      </Grid>
    </Fragment>
  );
};

// const stateList = [
//   { value: "New York", label: "New York" },
//   { value: "Chicago", label: "Chicago" },
// ];

const optionList = [
  { value: "สั่งประกอบ", label: "สั่งประกอบ" },
  { value: "ไม่ต้องประกอบ", label: "ไม่ต้องประกอบ" },
];
Cart.layout = CheckoutNavLayout;

export default Cart;
