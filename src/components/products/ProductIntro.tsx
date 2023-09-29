import Link from "next/link";
import { FC, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Box from "@component/Box";
import Image from "@component/Image";
import Rating from "@component/rating";
import Avatar from "@component/avatar";
import ColorCircle from "@component/color";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { H1, H2, H3, H6, SemiSpan, Small, Span } from "@component/Typography";
import { useAppContext } from "@context/AppContext";
import { currency } from "@utils/utils";
import { ShowStock } from "@component/products/ShowStock";
import Coupon from "@component/products/Coupon";
import SectionVoucher from "@component/SectionVoucher";
import { CarouselVoucher } from "@component/carousel";
import { ProductCard20 } from "@component/product-cards";
import Card from "@component/Card";
import ModalCoupon from "@component/products/ModalCoupon";
import ChoiceDetails from "@component/products/ChoiceDetails";
import Divider from "@component/Divider";
import { IconButton } from "@component/buttons";
import Typography from "@component/Typography";
import { DetailsWrapper, StyledWrapper } from "./styles";

// ========================================
type ProductIntroProps = {
  price: number;
  title: string;
  images: string[];
  id: string | number;
};
// ========================================

const ProductIntro: FC<ProductIntroProps> = ({ images, title, price, id }) => {
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const [selectedImage, setSelectedImage] = useState(0);

  const routerId = router.query.id as string;
  const cartItem = state.cart.find(
    (item) => item.id === id || item.id === routerId
  );
  const [open, setOpen] = useState(false);
  const toggleDialog = useCallback(() => setOpen((open) => !open), []);

  const [selectedColor, setSelectedColor] = useState<string>("204");
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const [selectedSwitch, setSelectedSwitch] = useState(null);
  const handleSwitchClick = (color) => {
    setSelectedSwitch(color);
  };

  const handleImageClick = (ind: number) => () => setSelectedImage(ind);

  const handleCartAmountChange = (amount: number) => () => {
    if (!isNaN(amount)) {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          price,
          qty: amount,
          name: title,
          imgUrl: images[0],
          id: id || routerId,
        },
      });
    }
  };

  const getColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "secondary";
      case "Processing":
        return "secondary";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "error";
      default:
        return "";
    }
  };

  return (
    <Box overflow="hidden">
      <Grid container justifyContent="center" spacing={16}>
        {/* PRODUCT IMAGE */}
        <Grid item md={4} xs={12} alignItems="center">
          <Box>
            <FlexBox justifyContent="center" mb="50px">
              <Image
                width={300}
                height={300}
                src={images[selectedImage]}
                style={{ objectFit: "contain" }}
              />
            </FlexBox>

            <FlexBox overflow="auto">
              {images.map((url, ind) => (
                <Box
                  key={ind}
                  size={70}
                  bg="white"
                  minWidth={70}
                  display="flex"
                  cursor="pointer"
                  border="1px solid"
                  borderRadius="10px"
                  alignItems="center"
                  justifyContent="center"
                  ml={ind === 0 && "auto"}
                  mr={ind === images.length - 1 ? "auto" : "10px"}
                  borderColor={
                    selectedImage === ind ? "primary.main" : "gray.400"
                  }
                  onClick={handleImageClick(ind)}
                >
                  <Avatar src={url} borderRadius="10px" size={40} />
                </Box>
              ))}
            </FlexBox>
          </Box>
        </Grid>
        {/* PRODUCT DETAILS */}
        <Grid item md={4.5} xs={12} alignItems="center">
          <Box mb="15px">
            <ShowStock p="0.1rem 1rem" bg={`${getColor("Delivered")}.light`}>
              <Small color={`${getColor("Delivered")}.main`} fontWeight={800}>
                IN STOCK
              </Small>
            </ShowStock>
          </Box>
          <H3 mb="1rem">{title}</H3>

          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>แบรนด์:</SemiSpan>
            <SemiSpan ml="8px">Ziaomi</SemiSpan>
            <SemiSpan ml="8px" mr="8px">
              |
            </SemiSpan>
            <SemiSpan>รหัสสินค้า:</SemiSpan>
            <SemiSpan ml="8px">SKU-67665</SemiSpan>
          </FlexBox>

          {/* <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Rated:</SemiSpan>
            <Box ml="8px" mr="8px">
              <Rating color="warn" value={4} outof={5} />
            </Box>
            <H6>(50)</H6>
          </FlexBox> */}

          <Box mb="24px">
            <H1 color="ihavecpu.main" mb="4px" lineHeight="1">
              {currency(price)}
            </H1>
          </Box>

          <Box mb="10px">
            <Grid item md={12} xs={12}>
              <H6 mb="0.8rem">Color : </H6>
              <Grid container>
                {/* {colorList.map((item, ind) => (
                  <Grid item md={3} xs={3} key={item.id}>
                    <ChoiceDetails
                      key={ind}
                      open={open}
                      title="colors"
                      product_id={item.id}
                      choice={item.title}
                      selected={selectedColor === item.id}
                      onClick={() => handleColorClick(item.id)}
                    />
                  </Grid>
                ))} */}
                <FlexBox mb="1rem">
                  {colorList.map((item, ind) => (
                    <ColorCircle
                      key={item.id}
                      name={item.id}
                      bg={item.title}
                      size={25}
                      mr="10px"
                      selected={selectedSwitch === item}
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => handleSwitchClick(item)}
                    />
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
          <Box mb="20px">
            <Grid item md={12} xs={12}>
              <H6 mb="0.8rem">Switch : </H6>
              <Grid container>
                {switchList.map((item, ind) => (
                  <Grid item md={3} xs={3} key={item.id}>
                    <ChoiceDetails
                      key={ind}
                      open={open}
                      title="colors"
                      product_id={item.id}
                      choice={item.title}
                      selected={selectedColor === item.id}
                      onClick={() => handleColorClick(item.id)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>

          {/* BUTTON TO BUY */}
          <Grid container justifyContent="center" spacing={2}>
            <Grid item md={4} xs={4}>
              {/* Content for the first Grid item */}
              <FlexBox alignItems="center">
                <Button
                  p="9px"
                  size="small"
                  color="ihavecpu"
                  variant="outlined"
                  onClick={handleCartAmountChange(cartItem?.qty - 1)}
                  style={{ flex: 1 }}
                >
                  <Icon variant="small">minus</Icon>
                </Button>

                <H3 fontWeight="600" mx="10px">
                  {cartItem ? cartItem?.qty.toString().padStart(2, "0") : "00"}
                </H3>

                <Button
                  p="9px"
                  size="small"
                  color="ihavecpu"
                  variant="outlined"
                  onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
                  style={{ flex: 1 }}
                >
                  <Icon variant="small">plus</Icon>
                </Button>
              </FlexBox>
            </Grid>
            <Grid item md={7} xs={7}>
              <Button
                ml="10px"
                mb="25px"
                size="small"
                color="ihavecpu"
                variant="contained"
                width="100%"
              >
                ซื้อเลย
              </Button>
            </Grid>
            {/* <Grid item md={2} xs={1.5}>
              <Button
                ml="10px"
                mb="36px"
                size="small"
                color="ihavecpu"
                variant="outlined"
                width="100%"
              >
                <Icon variant="small">heart</Icon>
              </Button>
            </Grid> */}
          </Grid>
          <Divider height={1} style={{ backgroundColor: "#DAE1E7" }} />
          <Box mt="15px" display="flex" justifyContent="space-between">
            <div>
              <Link href={`/address`}>
                <Typography as="a" color="inherit">
                  <IconButton
                    mr="0.5rem"
                    size="extrasmall"
                    style={{
                      backgroundColor: "#F6F9FC",
                      borderColor: "#e6e7e8",
                      border: "1px solid #e6e7e8",
                    }}
                  >
                    <Icon variant="small" color="social">
                      compare
                    </Icon>
                  </IconButton>
                </Typography>
              </Link>
              <Link href={`/address`}>
                <Typography as="a" color="inherit">
                  <IconButton
                    mr="1rem"
                    size="extrasmall"
                    style={{
                      backgroundColor: "#F6F9FC",
                      borderColor: "#e6e7e8",
                      border: "1px solid #e6e7e8",
                    }}
                  >
                    <Icon variant="small" color="social">
                      heart
                    </Icon>
                  </IconButton>
                </Typography>
              </Link>
            </div>
            <div>
              <Link href={`/address`}>
                <Typography as="a" color="inherit">
                  <IconButton
                    mr="0.5rem"
                    size="extrasmall"
                    style={{
                      backgroundColor: "#F6F9FC",
                      borderColor: "#e6e7e8",
                      border: "1px solid #e6e7e8",
                    }}
                  >
                    <Icon variant="small" color="social">
                      link
                    </Icon>
                  </IconButton>
                </Typography>
              </Link>
              <Link href={`/address`}>
                <Typography as="a" color="inherit">
                  <IconButton
                    mr="0.5rem"
                    size="extrasmall"
                    style={{
                      backgroundColor: "#F6F9FC",
                      borderColor: "#e6e7e8",
                      border: "1px solid #e6e7e8",
                    }}
                  >
                    <Icon variant="small" color="social">
                      facebook
                    </Icon>
                  </IconButton>
                </Typography>
              </Link>
              <Link href={`/address`}>
                <Typography as="a" color="inherit">
                  <IconButton
                    size="extrasmall"
                    style={{
                      backgroundColor: "#F6F9FC",
                      borderColor: "#e6e7e8",
                      border: "1px solid #e6e7e8",
                    }}
                  >
                    <Icon variant="small" color="social">
                      twitter
                    </Icon>
                  </IconButton>
                </Typography>
              </Link>
            </div>
          </Box>
        </Grid>
        {/* VOUCHER */}
        <Grid item lg={3} md={12} xs={12} alignItems="left">
          <Grid item lg={12}>
            <SectionVoucher
              iconName="coupon"
              title="คูปองส่วนลด"
              seeMoreLink="ดูทั้งมด"
              onClickSeeMore={() => {
                toggleDialog();
              }}
            >
              <CarouselVoucher totalSlides={2} visibleSlides={1}>
                <ProductCard20
                  topic="Notebook MSI"
                  description="เมื่อช้อปครบ 50,000.-"
                  dateExpired="2023-07-29 18:46:56"
                />
                <ProductCard20
                  topic="Notebook MSI"
                  description="เมื่อช้อปครบ 50,000.-"
                  dateExpired="2023-07-29 18:46:56"
                />
              </CarouselVoucher>
            </SectionVoucher>
          </Grid>
          {/* BELOW VOUCHER */}
          <Grid item lg={12}>
            <DetailsWrapper mt="10px" px="0px" py="1.5rem" color="gray.900">
              <StyledWrapper px="1.5rem" mb="1.5rem">
                <FlexBox alignItems="center">
                  <Box className="dashboard-nav-icon-holder">
                    <Icon variant="small" defaultcolor="currentColor" mr="10px">
                      truck
                    </Icon>
                  </Box>
                  <Span fontSize={14} fontWeight={500}>
                    ส่งฟรีทั่วไทย
                  </Span>
                </FlexBox>
                <Span ml="30px" fontSize={13}>
                  ช้อปครบ 3,000 บาทขึ้นไป
                </Span>
              </StyledWrapper>
              <StyledWrapper mb="1.5rem" px="1.5rem">
                <FlexBox alignItems="center">
                  <Box className="dashboard-nav-icon-holder">
                    <Icon variant="small" defaultcolor="currentColor" mr="10px">
                      verify
                    </Icon>
                  </Box>
                  <Span fontSize={14} fontWeight={500}>
                    ผ่อนสูงสุด 10 เดือน
                  </Span>
                </FlexBox>
                <Span ml="30px" fontSize={13}>
                  ผ่อนได้เลย เพียงแค่มีบัตรเครดิต
                </Span>
              </StyledWrapper>
              <StyledWrapper mb="1.5rem" px="1.5rem">
                <FlexBox alignItems="center">
                  <Box className="dashboard-nav-icon-holder">
                    <Icon variant="small" defaultcolor="currentColor" mr="10px">
                      bag
                    </Icon>
                  </Box>
                  <Span fontSize={14} fontWeight={500}>
                    รับเองที่ร้านลด 1000.-
                  </Span>
                </FlexBox>
                <Span ml="30px" fontSize={13}>
                  รับสินค้าเองที่ร้านเพื่อรับส่วนลด
                </Span>
              </StyledWrapper>

              <StyledWrapper px="1.5rem">
                <FlexBox alignItems="center">
                  <Box className="dashboard-nav-icon-holder">
                    <Icon variant="small" defaultcolor="currentColor" mr="10px">
                      truck
                    </Icon>
                  </Box>
                  <Span fontSize={14} fontWeight={500}>
                    เปลี่ยนคืนง่าย
                  </Span>
                </FlexBox>
                <Span ml="30px" fontSize={13}>
                  ภายใน 7 วัน
                </Span>
              </StyledWrapper>
            </DetailsWrapper>
          </Grid>
        </Grid>

        <ModalCoupon open={open} onClose={toggleDialog} />
      </Grid>
    </Box>
  );
};

const colorList = [
  { id: "204", product_id: "SKU-67171", title: "#FF7A7A" },
  { id: "205", product_id: "SKU-67171", title: "#FFC672" },
  { id: "205", product_id: "SKU-67171", title: "#d4001a" },
  { id: "205", product_id: "SKU-67171", title: "#6B7AFF" },
];
// const colorList = [
//   "#1C1C1C",
//   "#FF7A7A",
//   "#FFC672",
//   "#84FFB5",
//   "#70F6FF",
//   "#6B7AFF",
// ];

const switchList = [
  { id: "209", product_id: "SKU-67171", title: "Red Switch" },
  { id: "210", product_id: "SKU-67171", title: "Blue Switch" },
  { id: "211", product_id: "SKU-67171", title: "Brown Switch" },
  { id: "212", product_id: "SKU-67171", title: "Green Switch" },
  { id: "213", product_id: "SKU-67171", title: "Black Switch" },
];
export default ProductIntro;
