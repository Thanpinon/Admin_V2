import { FC, useCallback, useState } from "react";
import { Card1 } from "@component/Card1";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Typography, { H6 } from "@component/Typography";
import Radio from "@component/radio";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import ModalCouponPurchase from "@component/products/ModalCouponPurchase";

const CheckoutSummary: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleDialog = useCallback(() => setOpen((open) => !open), []);
  return (
    <Card1>
      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">ราคา:</Typography>

        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            ฿2610.
          </Typography>

          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">ค่าจัดส่ง:</Typography>

        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">ภาษี:</Typography>

        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            ฿40.
          </Typography>

          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
        <Typography color="text.hint">ส่วนลด:</Typography>

        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>

      <Divider mb="1rem" />
      <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
        <Typography color="text.hint">วิธีการจัดส่ง:</Typography>
        <FlexBox flexDirection="column">
          <Radio
            mb="0.5rem"
            color="secondary"
            name="shipping1"
            width={15}
            height={15}
            label={
              <Typography ml="6px" fontWeight="600" fontSize="13px">
                DHL +฿50.00
              </Typography>
            }
          />
          <Radio
            color="secondary"
            name="shipping2"
            width={15}
            height={15}
            label={
              <Typography ml="6px" fontWeight="600" fontSize="13px">
                รับเองที่สาขา
              </Typography>
            }
          />
        </FlexBox>
      </FlexBox>

      <Divider mb="1rem" />

      <Typography
        fontSize="25px"
        fontWeight="600"
        lineHeight="1"
        textAlign="right"
        mb="1.5rem"
      >
        ฿26100.00
      </Typography>

      {/* <TextField placeholder="โค๊ดส่วนลด" fullwidth />

      <Button variant="outlined" color="primary" mt="1rem" mb="30px" fullwidth>
        ใช้คูปองส่วนลด
      </Button> */}
      <Grid item xl={12} md={12} xs={12}>
        <Card1 style={{ border: "2px solid #f1f1f1" }}>
          <FlexBox alignItems="center">
            <Icon
              mr="1rem"
              size="30px"
              variant="medium"
              defaultcolor="currentColor"
            >
              coupon
            </Icon>
            <H6>ใช้รหัสคูปองส่วนลด?</H6>
          </FlexBox>
          <FlexBox>
            <Button
              onClick={toggleDialog}
              mt="1rem"
              variant="outlined"
              color="ihavecpu"
              style={{ width: "100%" }}
            >
              ใช้รหัสคูปองส่วนลด
            </Button>
          </FlexBox>
        </Card1>
      </Grid>
      <Grid item xl={12} md={12} xs={12}>
        <Button
          mt="1rem"
          variant="contained"
          color="ihavecpu"
          type="submit"
          style={{ width: "100%" }}
        >
          ดำเนินการชำระเงิน
        </Button>
        <ModalCouponPurchase open={open} onClose={toggleDialog} />
      </Grid>
    </Card1>
  );
};

export default CheckoutSummary;
