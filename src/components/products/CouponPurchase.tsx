import React from "react";
import Box from "@component/Box";
import styles from "./CouponPurchase.module.css"; // Import the CSS module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CouponComponent = ({ topic, description, dateExpired }) => {
  return (
    <Box>
      <div className={styles["coupon-container"]}>
        <div className={`swiper ${styles.mySwiper}`}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className={`swiper ${styles.mySwiperNested} ${styles.swiperHomeElectric}`}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className={styles["coupon__wrap"]}>
                      <div className={styles["coupon__title"]}>
                        <div className={styles["couple__category"]}>
                          {topic}
                        </div>
                        <div className={styles["coupon__max"]}>Maximum $5</div>
                      </div>
                      <div className={styles["coupon__detail"]}>
                        <div className={styles["coupon__price"]}>
                          10% Discount
                        </div>
                        <div className={styles["coupon__info"]}>
                          <span>{description}</span>
                          <span>{dateExpired}</span>
                        </div>
                        <div className={styles["coupon__footer"]}>
                          <div className={styles["coupon__condition"]}>
                            <a href="#">Condition</a>
                          </div>
                          <div className={styles["coupon__btn"]}>
                            <a href="#">Collect</a>
                          </div>
                        </div>
                        <div className={styles["coupon__border"]}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CouponComponent;
