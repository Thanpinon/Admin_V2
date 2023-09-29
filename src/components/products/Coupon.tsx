import React, { CSSProperties } from "react";
import Grid from "@component/grid/Grid";
import { ButtonCoupon } from "@component/buttons";

const Coupon = ({ topic, description, dateExpired }) => {
  const couponTitlePrice: CSSProperties = {
    fontSize: "15px",
    fontWeight: "thin",
    color: "#d4001a",
  };

  const couponPrice: CSSProperties = {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#d4001a",
  };

  const couponTitleStyle: CSSProperties = {
    fontSize: "11px",
    fontWeight: "bold",
    textAlign: "left",
  };
  const couponTopicStyle: CSSProperties = {
    fontSize: "11px",
    fontWeight: "bold",
    textAlign: "left",
    maxWidth: "70%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const couponDescriptionStyle: CSSProperties = {
    fontSize: "9px",
    fontWeight: "thin",
    textAlign: "left",
    maxWidth: "60%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const couponDateExpiredStyle: CSSProperties = {
    fontSize: "8px",
    fontWeight: "thin",
    textAlign: "left",
  };

  const couponRightContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const couponButtonContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  };

  const couponPriceContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

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
    <div className="coupon">
      <div className="couponleft">
        <div className="couponright-inner">
          <div style={couponPriceContainer}>
            <div style={couponTitlePrice}>ลดเพิ่ม</div>
            <div style={couponPrice}>1,000.-</div>
          </div>
        </div>
      </div>
      <div className="couponright">
        <Grid item md={8} xs={8}>
          <div style={couponRightContainer}>
            <div style={couponTitleStyle}>คูปองส่วนลด</div>
            <div style={couponTopicStyle}>{topic}</div>
            <div style={couponDescriptionStyle}>{description}</div>
            <div style={couponDateExpiredStyle}>
              หมดอายุ : {formatDate(dateExpired)}
            </div>
          </div>
        </Grid>
        <Grid item md={4} xs={3}>
          <div style={couponButtonContainer}>
            <ButtonCoupon
              size="small"
              fontSize="10"
              color="ihavecpu"
              bg="primary.light"
              onClick={() => console.log("Coupon")}
            >
              เก็บคูปอง
            </ButtonCoupon>
          </div>
          {/* <div style={couponButtonContainer}>
            <ButtonCoupon
              size="small"
              fontSize="10"
              color="ihavecpu"
              variant="outlined"
              bg="primary.light"
              onClick={() => console.log("Coupon")}
            >
              เก็บแล้ว
            </ButtonCoupon>
          </div> */}
        </Grid>
      </div>
    </div>
  );
};

export default Coupon;
