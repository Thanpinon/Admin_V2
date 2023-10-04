import React, { CSSProperties } from "react";
import Grid from "@component/grid/Grid";
import { ButtonCoupon } from "@component/buttons";
import styles from "./Coupon.module.css"; // Import the CSS module
import Box from "@component/Box";

const Coupon = ({ topic, description, dateExpired, onClick, checked }) => {
  const formatDate = (dateExpired) => {
    const months = [
      "ม.ค.",
      "ก.พ.",
      "มี.ค.",
      "เม.ย.",
      "พ.ค.",
      "มิ.ย.",
      "ก.ค.",
      "ส.ค.",
      "ก.ย.",
      "ต.ค.",
      "พ.ย.",
      "ธ.ค.",
    ];
    const date = new Date(dateExpired);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = (date.getFullYear() + 543) % 100;

    return `${day} ${month} ${year}`;
  };

  return (
    <Box>
      <div className={`${styles["coupon"]}`}>
        <div className={`${styles["couponleft"]}`}>
          <div className={`${styles["couponright-inner"]}`}>
            <div className={`${styles["couponPriceContainer"]}`}>
              <div className={`${styles["couponTitlePrice"]}`}>ลดเพิ่ม</div>
              <div className={`${styles["couponPrice"]}`}>1,000.-</div>
            </div>
          </div>
        </div>
        <div className={`${styles["couponright"]}`}>
          <Grid item lg={6} md={6} xs={6}>
            <div className={`${styles["couponRightContainer"]}`}>
              <div className={`${styles["couponTitle"]}`}>คูปองส่วนลด</div>
              <div className={`${styles["couponTopic"]}`}>{topic}</div>
              <div className={`${styles["couponDescriptionStyle"]}`}>
                {description}
              </div>
              <div className={`${styles["couponDateExpiredStyle"]}`}>
                หมดอายุ : {formatDate(dateExpired)}
              </div>
            </div>
          </Grid>
          <Grid item lg={4} xs={6}>
            <div className={`${styles["couponButtonContainer"]}`}>
              <ButtonCoupon
                size="small"
                fontSize="10"
                color="ihavecpu"
                variant={checked ? "border" : null}
                bg={checked ? null : "primary.light"}
                onClick={onClick}
              >
                {checked ? "เก็บแล้ว" : "เก็บคูปอง"}
              </ButtonCoupon>
            </div>
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default Coupon;
