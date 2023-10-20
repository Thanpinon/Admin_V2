import React from "react";
import { FC, useEffect, useState } from "react";
import Box from "@component/Box";
import Card from "@component/Card";
import Modal from "@component/Modal";
import Icon from "@component/icon/Icon";
import Grid from "@component/grid/Grid";
import { H1, H4, H5, H6, SemiSpan } from "@component/Typography";
import styles from "./ModalCoupon.module.css";
import FlexBox from "@component/FlexBox";
import StyledSearchBox from "@component/search-box/styled";
import TextField from "@component/text-field";
import { Button } from "@component/buttons";
import * as yup from "yup";
import { useFormik } from "formik";
import CouponPurchase from "./CouponPurchase";
import { notify } from "@component/toast";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "@hook/useWindowSize";

// Define the Props type
type Props = {
  open: boolean;
  onClose: () => void;
};

const ModalCouponPurchase: FC<Props> = (props) => {
  const { open, onClose } = props;
  const [myCoupon, setMyCoupon] = useState({ data: { items: [] } });
  const width = useWindowSize();
  // Function to handle the form submission
  const handleFormSubmit = async (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: formSchema,
  });
  const fetchMyCouponAvailable = () => {
    const requestBody = {
      product_id: ["PD_123", "A1", "sd", "sd"],
    };

    fetch("http://localhost:8000/api/myCouponAvaliable", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMyCoupon(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCodeCouponSubmit = async () => {
    if (formik.values.code_coupon.trim() === "") {
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/collectCoupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: formik.values.code_coupon,
        }),
      });

      if (response.status === 200) {
        // Parse the response data as JSON
        const data = await response.json();
        if (data.status === "success") {
          notify("success", "ใช้โค้ดนี้แล้ว");
          fetchMyCouponAvailable();
        }
      } else {
        notify("error", "ไม่เจอโค้ดนี้");
        formik.setFieldValue("code_coupon", "");
        formik.setFieldTouched("code_coupon", false);
        formik.setFieldError("code_coupon", "");
      }
    } catch (error) {
      console.error("An error occurred while collecting the coupon:", error);
    }
  };

  useEffect(() => {
    // Load available coupons when the component mounts
    fetchMyCouponAvailable();
  }, []);
  return (
    <div
      className={`${styles["modal-container"]} ${
        open ? styles["modal-open"] : ""
      }`}
      onClick={onClose}
    >
      <Modal open={open} onClose={onClose}>
        <Card className={styles.card}>
          <Box mb="2rem">
            <FlexBox alignItems="center">
              <Icon size="50px" mr="0.5rem">
                coupon
              </Icon>
              <H4 fontWeight={800}>คูปองส่วนลด</H4>
            </FlexBox>
            <SemiSpan ml="0.5rem">ใช้คูปองส่วนลด หรือ โค้ดส่วด</SemiSpan>
          </Box>
          <Grid container justifyContent="center" spacing={16}>
            <Grid item lg={6} md={6} xs={12} alignItems="center">
              <Grid container justifyContent="center">
                <Grid item xs={12}>
                  <form onSubmit={formik.handleSubmit}>
                    <StyledSearchBox>
                      <Icon className="search-icon" size="18px">
                        coupon
                      </Icon>
                      <TextField
                        fullwidth
                        name="code_coupon"
                        className="search-field"
                        placeholder="กรอกโค้ดส่วนลด"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.code_coupon}
                      />
                      <Button
                        className="search-button"
                        variant="contained"
                        color="ihavecpu"
                        type="submit"
                        onClick={handleCodeCouponSubmit}
                      >
                        ใช้โค้ด
                      </Button>
                    </StyledSearchBox>
                  </form>
                  {formik.touched.code_coupon && formik.errors.code_coupon && (
                    <SemiSpan fontSize="11px" style={{ color: "red" }}>
                      {formik.errors.code_coupon}
                    </SemiSpan>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={16}>
            <Grid item md={12} xs={12} alignItems="center">
              <Grid container spacing={3}>
                <Swiper
                  pagination={{
                    dynamicBullets: true,
                    el: ".swiper-pagination",
                  }}
                >
                  {Array.isArray(myCoupon.data.items) &&
                    myCoupon.data.items
                      .reduce((chunks, item, i) => {
                        if (i % 3 === 0) {
                          chunks.push([]);
                        }
                        chunks[chunks.length - 1].push(item);
                        return chunks;
                      }, [])
                      .map((couponGroup, index) => (
                        <SwiperSlide key={index}>
                          <Grid container spacing={3}>
                            {couponGroup.map((coupon, innerIndex) => (
                              <Grid item key={innerIndex} md={4} xs={12}>
                                <CouponPurchase
                                  key={innerIndex}
                                  topic={coupon.title}
                                  description={coupon.description}
                                  dateExpired={coupon.endDate}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </SwiperSlide>
                      ))}
                </Swiper>
              </Grid>
            </Grid>
          </Grid>
          <Box mt="2.5rem">
            <Grid container justifyContent="center" spacing={16}>
              <Grid
                item
                md={12}
                xs={12}
                alignItems="center"
                style={{
                  backgroundColor: "#f8f8f8",
                  borderTop: "1px solid #f0f0f0",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <Box>
                  <FlexBox alignItems="center">
                    <H4 fontWeight={800}>คูปองส่วนลดที่เก็บได้</H4>
                  </FlexBox>
                </Box>
                <Box mt="2rem">
                  <Grid item md={12} xs={12} alignItems="center">
                    <Grid container spacing={3}>
                      <Swiper
                        pagination={{
                          dynamicBullets: true,
                          el: ".swiper-pagination",
                        }}
                      >
                        {Array.isArray(myCoupon.data.items) &&
                          myCoupon.data.items
                            .reduce((chunks, item, i) => {
                              if (i % 1 === 0) {
                                chunks.push([]);
                              }
                              chunks[chunks.length - 1].push(item);
                              return chunks;
                            }, [])
                            .map((couponGroup, index) => (
                              <SwiperSlide key={index}>
                                <Grid container spacing={3}>
                                  {couponGroup.map((coupon, innerIndex) => (
                                    <Grid item key={innerIndex} md={4} xs={6}>
                                      <CouponPurchase
                                        key={innerIndex}
                                        topic={coupon.title}
                                        description={coupon.description}
                                        dateExpired={coupon.endDate}
                                      />
                                    </Grid>
                                  ))}
                                </Grid>
                              </SwiperSlide>
                            ))}
                      </Swiper>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            position="absolute"
            top="0.75rem"
            right="0.75rem"
            cursor="pointer"
          >
            <Icon
              className="close"
              color="primary"
              variant="small"
              onClick={onClose}
            >
              close
            </Icon>
          </Box>
        </Card>
      </Modal>
    </div>
  );
};

// Initial form values
const initialValues = {
  code_coupon: "",
};

// Define the form validation schema
const formSchema = yup.object().shape({
  code_coupon: yup.string().required("กรุณากรอกโค้ดส่วนลด"),
});

export default ModalCouponPurchase;
