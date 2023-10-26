import React, { FC } from "react";
import Grid from "@component/grid/Grid";
import { ButtonCoupon } from "@component/buttons";
import Box from "@component/Box";
import styled from "styled-components"; // Import css from styled-components

interface CouponProps {
  topic?: string;
  color?: string;
  description?: string;
  dateExpired?: string;
  onClick?: () => void;
  checked?: boolean;
}

export const CouponStyle = styled.div<CouponProps>`
  /* coupon */
  .coupon {
    display: flex;
    border: 2px solid #f1efef;
    width: 100%;
    max-width: none; /* Remove max-width to allow full responsiveness */
    background: #fff;
    border-radius: 13px;
    min-height: 85px;
  }

  .couponright {
    position: relative;
    display: flex;
    justify-content: flex-start; /* Updated alignment */

    flex: 1;
    padding: 10px 20px;
  }

  .couponleft {
    position: relative;
    box-sizing: border-box;
    display: flex;
    width: auto; /* Adjusted width to be flexible */
    padding: 10px 20px; /* Adjusted padding for responsiveness */
    border-right: 2px dashed #f1efef;
    justify-content: center;
  }

  .couponleft::before,
  .couponleft::after {
    position: absolute;
    border: 2px solid #f1efef;

    display: block;
    content: "";

    background: ${(props) => props.color || "white"};
    box-sizing: border-box;
    width: 22px;
    height: 10px;
  }

  .couponleft::before {
    border-bottom-left-radius: 110px;
    border-bottom-right-radius: 110px;
    border-top: 0.01px solid;
    border-top-color: ${(props) => props.color || "white"};
    top: -5px;
    right: -12px;
  }

  .couponleft::after {
    border-top-left-radius: 110px;
    border-top-right-radius: 110px;
    border-bottom: 0.1px solid;
    border-bottom-color: ${(props) => props.color || "white"};
    bottom: -5px;
    right: -12px;
  }

  .couponright-inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .couponright-inner::before,
  .couponright-inner::after {
    position: absolute;
    display: block;
    content: "";
    background: #f6f9fc;
    z-index: 1;
    height: 14px;
  }

  .couponright-inner::before {
    top: -16px;
    right: -13px;
  }

  .couponright-inner::after {
    bottom: -15.5px;
    right: -13px;
  }
  .couponleft-inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .couponleft-inner::before,
  .couponleft-inner::after {
    position: absolute;
    display: block;
    content: "";
    background: #f6f9fc;
    z-index: 1;
    height: 14px;
  }

  .couponleft-inner::before {
    top: -16px;
    right: -13px;
  }

  .couponleft-inner::after {
    bottom: -15.5px;
    right: -13px;
  }

  .couponPriceContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .couponTitlePrice {
    font-size: 15px;
    font-weight: thin;
    color: #d4001a;
  }
  .couponPrice {
    font-size: 15px;
    font-weight: bold;
    color: #d4001a;
  }
  .couponRightContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .couponTitle {
    font-size: 11px;
    font-weight: bold;
    text-align: left;
  }
  .couponTopic {
    font-size: 10px;
    font-weight: bold;
    text-align: left;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .couponDescriptionStyle {
    font-size: 9px;
    font-weight: thin;
    text-align: left;
    max-width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .couponDateExpiredStyle {
    font-size: 8px;
    font-weight: thin;
    text-align: left;
  }
  .couponButtonContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  @media (max-width: 768px) {
    .couponTitle {
      font-size: 9px;
    }
    .couponTopic {
      font-size: 9px;
    }
    .couponDescriptionStyle {
      font-size: 8px;
    }
    .couponDateExpiredStyle {
      font-size: 7px;
    }
    .couponright {
      padding: 15px 3px;
    }
  }
`;

const Coupon: FC<CouponProps> = ({
  topic,
  description,
  dateExpired,
  checked,
  onClick,
  color,
}) => {
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
    <div>
      <CouponStyle color={color}>
        <Box>
          <div className="coupon">
            <div className="couponleft">
              <div className="couponright-inner">
                <div className="couponPriceContainer">
                  <div className="couponTitlePrice">ลดเพิ่ม</div>
                  <div className="couponPrice">1,000.-</div>
                </div>
              </div>
            </div>
            <div className="couponright">
              <Grid item lg={6} md={6} xs={6}>
                <div className="couponRightContainer">
                  <div className="couponTitle">คูปองส่วนลด</div>
                  <div className="couponTopic">{topic}</div>
                  <div className="couponDescriptionStyle">{description}</div>
                  <div className="couponDateExpiredStyle">
                    หมดอายุ : {formatDate(dateExpired)}
                  </div>
                </div>
              </Grid>
              <Grid item lg={4} xs={6}>
                <div className="couponButtonContainer">
                  <ButtonCoupon
                    size="small"
                    fontSize="10"
                    color="ihavecpu"
                    variant={checked ? "border" : null}
                    bg={checked ? null : "primary.light"}
                    onClick={onClick}
                    style={{ width: "50px" }}
                  >
                    {checked ? "เก็บแล้ว" : "เก็บคูปอง"}
                  </ButtonCoupon>
                </div>
              </Grid>
            </div>
          </div>
        </Box>
      </CouponStyle>
    </div>
  );
};

export default Coupon;
