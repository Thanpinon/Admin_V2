import React from "react";
import { FC, useEffect, useState } from "react";
import Box from "@component/Box";
import Icon from "@component/icon/Icon";
import Grid from "@component/grid/Grid";
import { H4, H5, SemiSpan } from "@component/Typography";
import styles from "./ModalCoupon.module.css";
import FlexBox from "@component/FlexBox";
import StyledSearchBox from "@component/search-box/styled";
import TextField from "@component/text-field";
import { Button } from "@component/buttons";
import * as yup from "yup";
import { useFormik } from "formik";
import Coupon from "./Coupon";
import { notify } from "@component/toast";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Define the Props type
type Props = {
  open: boolean;
  onClose: () => void;
};

const ModalContainer = styled.div`
  .button,
  .input,
  .select,
  .textarea {
    font: inherit;
  }

  a {
    color: inherit;
  }
  .swiper {
    max-width: 1000px;
    padding: 0px;
  }
  .modal-container {
    max-height: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    border-radius: 16px;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 1002px) and (max-width: 1120px) {
    .modal-container {
      width: 960px;
    }
  }
  @media (min-width: 800px) and (max-width: 1002px) {
    .modal-container {
      width: 750px;
    }
  }
  @media (min-width: 700px) and (max-width: 800px) {
    .modal-container {
      width: 750px;
      height: 750px;
    }
  }
  @media (min-width: 600px) and (max-width: 700px) {
    .modal-container {
      width: 600px;
      height: 700px;
    }
  }
  @media (min-width: 500px) and (max-width: 600px) {
    .modal-container {
      width: 500px;
      height: 650px;
    }
  }
  @media (min-width: 400px) and (max-width: 500px) {
    .modal-container {
      width: 400px;
      height: 650px;
    }
  }
  @media (min-width: 300px) and (max-width: 400px) {
    .modal-container {
      width: 300px;
      height: 650px;
    }
  }
  @media (min-width: 0px) and (max-width: 300px) {
    .modal-container {
      width: 280px;
      height: 650px;
    }
  }

  .modal-container-header {
    padding: 16px 32px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 auto;
  }

  .modal-container-title {
    padding: 0.5rem;
    display: column;
    align-items: center;
    gap: 8px;
    line-height: 1.5;
    font-weight: 700;
    font-size: 1.125;
  }

  .modal-container-title svg {
    width: 32px;
    height: 32px;
    color: #d4001a;
  }

  .modal-container-body {
    padding: 24px 32px 51px;
    overflow-y: auto;
    flex: 1 1 auto;
  }
  .modal-container-search {
    padding: 20px 10px 5px;
  }
  .scrollbar::-webkit-scrollbar {
    border-radius: 8px;
    width: 5px;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 8px;
  }

  .scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  .head-title {
    font-weight: 800;
  }

  .rtf h1,
  .rtf h2,
  .rtf h3,
  .rtf h4,
  .rtf h5,
  .rtf h6 {
    font-weight: 700;
  }

  .rtf h1 {
    font-size: 1.5rem;
    line-height: 1.125;
  }

  .rtf h2 {
    font-size: 1.25rem;
    line-height: 1.25;
  }

  .rtf h3 {
    font-size: 1rem;
    line-height: 1.5;
  }

  .rtf > * + * {
    margin-top: 1em;
  }

  .rtf > * + :is(h1, h2, h3) {
    margin-top: 2em;
  }

  .rtf > :is(h1, h2, h3) + * {
    margin-top: 0.75em;
  }

  .rtf ul,
  .rtf ol {
    margin-left: 20px;
    list-style-position: inside;
  }

  .rtf ol {
    list-style: numeric;
  }

  .rtf ul {
    list-style: disc;
  }

  .modal-container-footer {
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid #ddd;
    gap: 12px;
    position: relative;
    flex: 0 0 auto;
  }

  .modal-container-footer:after {
    content: "";
    display: block;
    position: absolute;
    top: -51px;
    left: 24px;
    right: 24px;
    height: 50px;
    flex-shrink: 0;
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.75),
      transparent
    );
    pointer-events: none;
  }
  .footer-title {
    font-weight: 800;
  }

  .button {
    padding: 12px 20px;
    border-radius: 8px;
    background-color: transparent;
    border: 0;
    font-weight: 600;
    cursor: pointer;
    transition: 0.15s ease;
  }

  .button.is-ghost:hover,
  .button.is-ghost:focus {
    background-color: #dfdad7;
  }

  .button.is-primary {
    background-color: #750550;
    color: #fff;
  }

  .button.is-primary:hover,
  .button.is-primary:focus {
    background-color: #4a0433;
  }

  .icon-button {
    padding: 0;
    border: 0;
    background-color: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.15s ease;
  }

  .icon-button svg {
    width: 24px;
    height: 24px;
  }

  .icon-button:hover,
  .icon-button:focus {
    background-color: #dfdad7;
  }

  /* iPhone XS - Portrait */
  @media screen and (min-device-width: 414px) and (max-device-width: 896px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    .swiper {
      max-width: 100%;
    }
    .modal-container {
      max-height: 600px;
      max-width: 350px;
    }
  }
  /* iPhone XS - Landscape */
  @media only screen and (min-device-width: 414px) and (max-device-width: 896px) and (orientation: landscape) {
    .swiper {
      max-width: 100%;
    }
    .modal-container {
      max-height: 350px;
      max-width: 100%;
    }
    .modal-container-search {
      padding: 5px 20px 0px;
    }
    .modal-container-header {
      padding: 3px 32px 0px;
    }
    .head-title {
      font-size: 12px;
    }
    .head-description {
      font-size: 11px;
    }
    .footer-title {
      font-size: 12px;
    }
    .modal-container-footer {
      padding: 5px 32px 0px;
    }
  }
`;

// const mockCouponData = [
//   {
//     title: "Coupon 1",
//     description: "Description 1",
//     endDate: "2023-07-29 18:46:56",
//   },
//   {
//     title: "Coupon 2",
//     description: "Description 2",
//     endDate: "2023-08-29 18:46:56",
//   },
//   {
//     title: "Coupon 3",
//     description: "Description 3",
//     endDate: "2023-09-29 18:46:56",
//   },
//   {
//     title: "Coupon 4",
//     description: "Description 4",
//     endDate: "2023-10-29 18:46:56",
//   },
// ];

const ModalCouponPurchase: FC<Props> = (props) => {
  const { open, onClose } = props;
  const [myCoupon, setMyCoupon] = useState({ data: { items: [] } });
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 769px)").matches) {
        setSwiperSlidesPerView(3);
      } else {
        setSwiperSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize the value on component load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      product_id: ["A4", "A1", "A2", "A3"],
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
    // <div
    //   className={`${styles["modal-container"]} ${
    //     open ? styles["modal-open"] : ""
    //   }`}
    //   onClick={onClose}
    // >
    //   <Modal open={open} onClose={onClose}>
    //     <Card className={styles.card}>
    //       <Box mb="2rem">
    //         <FlexBox alignItems="center">
    //           <Icon size="50px" mr="0.5rem">
    //             coupon
    //           </Icon>
    //           <H4 fontWeight={800}>คูปองส่วนลด</H4>
    //         </FlexBox>
    //         <SemiSpan ml="0.5rem">ใช้คูปองส่วนลด หรือ โค้ดส่วด</SemiSpan>
    //       </Box>
    //       <Grid container justifyContent="center" spacing={16}>
    //         <Grid item lg={6} md={6} xs={12} alignItems="center">
    //           <Grid container justifyContent="center">
    //             <Grid item xs={12}>
    //               <form onSubmit={formik.handleSubmit}>
    //                 <StyledSearchBox>
    //                   <Icon className="search-icon" size="18px">
    //                     coupon
    //                   </Icon>
    //                   <TextField
    //                     fullwidth
    //                     name="code_coupon"
    //                     className="search-field"
    //                     placeholder="กรอกโค้ดส่วนลด"
    //                     onBlur={formik.handleBlur}
    //                     onChange={formik.handleChange}
    //                     value={formik.values.code_coupon}
    //                   />
    //                   <Button
    //                     className="search-button"
    //                     variant="contained"
    //                     color="ihavecpu"
    //                     type="submit"
    //                     onClick={handleCodeCouponSubmit}
    //                   >
    //                     ใช้โค้ด
    //                   </Button>
    //                 </StyledSearchBox>
    //               </form>
    //               {formik.touched.code_coupon && formik.errors.code_coupon && (
    //                 <SemiSpan fontSize="11px" style={{ color: "red" }}>
    //                   {formik.errors.code_coupon}
    //                 </SemiSpan>
    //               )}
    //             </Grid>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //       <Grid container justifyContent="center" spacing={16}>
    //         <Grid item md={12} xs={12} alignItems="center">
    //           <Grid container spacing={3}>
    //             <Swiper
    //               pagination={{
    //                 dynamicBullets: true,
    //                 el: ".swiper-pagination",
    //               }}
    //             >
    //               {Array.isArray(myCoupon.data.items) &&
    //                 myCoupon.data.items
    //                   .reduce((chunks, item, i) => {
    //                     if (i % 3 === 0) {
    //                       chunks.push([]);
    //                     }
    //                     chunks[chunks.length - 1].push(item);
    //                     return chunks;
    //                   }, [])
    //                   .map((couponGroup, index) => (
    //                     <SwiperSlide key={index}>
    //                       <Grid container spacing={3}>
    //                         {couponGroup.map((coupon, innerIndex) => (
    //                           <Grid item key={innerIndex} md={4} xs={12}>
    //                             <CouponPurchase
    //                               key={innerIndex}
    //                               topic={coupon.title}
    //                               description={coupon.description}
    //                               dateExpired={coupon.endDate}
    //                             />
    //                           </Grid>
    //                         ))}
    //                       </Grid>
    //                     </SwiperSlide>
    //                   ))}
    //             </Swiper>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //       <Box mt="2.5rem">
    //         <Grid container justifyContent="center" spacing={16}>
    //           <Grid
    //             item
    //             md={12}
    //             xs={12}
    //             alignItems="center"
    //             style={{
    //               backgroundColor: "#f8f8f8",
    //               borderTop: "1px solid #f0f0f0",
    //               borderBottomLeftRadius: "8px",
    //               borderBottomRightRadius: "8px",
    //             }}
    //           >
    //             <Box>
    //               <FlexBox alignItems="center">
    //                 <H4 fontWeight={800}>คูปองส่วนลดที่เก็บได้</H4>
    //               </FlexBox>
    //             </Box>
    //             <Box mt="2rem">
    //               <Grid item md={12} xs={12} alignItems="center">
    //                 <Grid container spacing={3}>
    //                   <Swiper
    //                     pagination={{
    //                       dynamicBullets: true,
    //                       el: ".swiper-pagination",
    //                     }}
    //                   >
    //                     {Array.isArray(myCoupon.data.items) &&
    //                       myCoupon.data.items
    //                         .reduce((chunks, item, i) => {
    //                           if (i % 1 === 0) {
    //                             chunks.push([]);
    //                           }
    //                           chunks[chunks.length - 1].push(item);
    //                           return chunks;
    //                         }, [])
    //                         .map((couponGroup, index) => (
    //                           <SwiperSlide key={index}>
    //                             <Grid container spacing={3}>
    //                               {couponGroup.map((coupon, innerIndex) => (
    //                                 <Grid item key={innerIndex} md={4} xs={6}>
    //                                   <CouponPurchase
    //                                     key={innerIndex}
    //                                     topic={coupon.title}
    //                                     description={coupon.description}
    //                                     dateExpired={coupon.endDate}
    //                                   />
    //                                 </Grid>
    //                               ))}
    //                             </Grid>
    //                           </SwiperSlide>
    //                         ))}
    //                   </Swiper>
    //                 </Grid>
    //               </Grid>
    //             </Box>
    //           </Grid>
    //         </Grid>
    //       </Box>

    //       <Box
    //         position="absolute"
    //         top="0.75rem"
    //         right="0.75rem"
    //         cursor="pointer"
    //       >
    //         <Icon
    //           className="close"
    //           color="primary"
    //           variant="small"
    //           onClick={onClose}
    //         >
    //           close
    //         </Icon>
    //       </Box>
    //     </Card>
    //   </Modal>
    // </div>
    <Box
      className={`${styles["modal-container"]} ${
        open ? styles["modal-open"] : ""
      }`}
      onClick={onClose}
    >
      <ModalContainer>
        <div className="modal">
          <article className="modal-container">
            <header className="modal-container-header">
              <span className="modal-container-title">
                <FlexBox alignItems="center">
                  <Icon className="head-icon" size="32px" mr="0.5rem">
                    coupon
                  </Icon>
                  <H4 className="head-title">คูปองส่วนลด</H4>
                </FlexBox>
                <SemiSpan
                  fontSize="13px"
                  fontWeight={300}
                  ml="0.5rem"
                  className="head-description"
                >
                  ใช้คูปองส่วนลด หรือ โค้ดส่วนลด
                </SemiSpan>
              </span>
              <button className="icon-button">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </button>
            </header>
            <section className="modal-container-search">
              <Grid container justifyContent="center" spacing={16}>
                <Grid item lg={12} md={12} xs={12} alignItems="center">
                  <Grid container justifyContent="center">
                    <Box>
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
                      {formik.touched.code_coupon &&
                        formik.errors.code_coupon && (
                          <SemiSpan fontSize="11px" style={{ color: "red" }}>
                            {formik.errors.code_coupon}
                          </SemiSpan>
                        )}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </section>
            <section className="modal-container-body rtf scrollbar">
              <Swiper
                className="swiper"
                slidesPerView={swiperSlidesPerView}
                spaceBetween={10}
              >
                {Array.isArray(myCoupon.data.items) &&
                  myCoupon.data.items.map((coupon, index) => (
                    <SwiperSlide key={index}>
                      <Grid container spacing={3}>
                        <Grid item md={12} sm={12} xs={12}>
                          <Coupon
                            topic={coupon.id}
                            description={coupon.description}
                            color="white"
                            dateExpired={coupon.endDate}
                            onClick={() => {
                              // Your click handler logic here
                            }}
                            checked={true}
                          />
                        </Grid>
                      </Grid>
                    </SwiperSlide>
                  ))}
              </Swiper>
              {/* <Swiper className="swiper">
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
                            <Grid item key={innerIndex} md={4} sm={12} xs={12}>
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
              </Swiper> */}
            </section>
            <footer
              className="modal-container-footer"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <Grid item xs={12}>
                <Box>
                  <span className="modal-container-title">
                    <FlexBox alignItems="center">
                      <H5 className="footer-title">เก็บโค้ดส่วนลด</H5>
                    </FlexBox>
                    <Box mt="1rem">
                      <Swiper
                        className="swiper"
                        slidesPerView={swiperSlidesPerView}
                        spaceBetween={10}
                        scrollbar={{ draggable: true }}
                        pagination={{ clickable: true }}
                      >
                        {Array.isArray(myCoupon.data.items) &&
                          myCoupon.data.items.map((coupon, index) => (
                            <SwiperSlide key={index}>
                              <Grid container spacing={3}>
                                <Grid item md={12} sm={12} xs={12}>
                                  <Coupon
                                    topic={coupon.id}
                                    description={coupon.description}
                                    color="#f9f9f9"
                                    dateExpired={coupon.endDate}
                                    onClick={() => {
                                      // Your click handler logic here
                                    }}
                                    checked={true}
                                  />
                                </Grid>
                              </Grid>
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    </Box>
                  </span>
                </Box>
              </Grid>
            </footer>
          </article>
        </div>
      </ModalContainer>
    </Box>
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
