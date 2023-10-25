import Link from "next/link";
import { FC, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Box from "@component/Box";
import Image from "@component/Image";
import Avatar from "@component/avatar";
import ColorCircle from "@component/color";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import { H1, H3, H6, SemiSpan, Small, Span } from "@component/Typography";
import { useAppContext } from "@context/AppContext";
import { currency } from "@utils/utils";
import { ShowStock } from "@component/products/ShowStock";
import SectionVoucher from "@component/SectionVoucher";
import { CarouselVoucher } from "@component/carousel";
import { ProductCard20 } from "@component/product-cards";
import ModalCoupon from "@component/products/ModalCoupon";
import ChoiceDetails from "@component/products/ChoiceDetails";
import Divider from "@component/Divider";
import { IconButton } from "@component/buttons";
import Typography from "@component/Typography";
import { DetailsWrapper, StyledWrapper } from "./styles";
import FlashSaleBar from "@component/flashsale/FlashSaleBar";
import { notify } from "@component/toast";
import "react-toastify/dist/ReactToastify.css";
import CompareNotification from "@component/compare/CompareNotification";

// ========================================
type ProductIntroProps = {
  price: number;
  title: string;
  images: string[];
  id: string | number;
  category_id: number;
};
// ========================================

const ProductIntro: FC<ProductIntroProps> = ({
  images,
  title,
  price,
  id,
  category_id,
}) => {
  const router = useRouter();
  const { state, dispatch } = useAppContext();
  const base = "http://localhost:3000";
  const links = base + router.asPath;

  const [selectedImage, setSelectedImage] = useState(0);
  const handleImageClick = (ind: number) => () => setSelectedImage(ind);

  const routerId = router.query.id as string;
  const cartItem = state.cart.find(
    (item) => item.id === id || item.id === routerId
  );
  const [open, setOpen] = useState(false);
  const toggleDialog = useCallback(() => setOpen((open) => !open), []);

  // Choose Color
  const [selectedColor, setSelectedColor] = useState<string>("204");
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  // Choose Button
  const [selectedSwitch, setSelectedSwitch] = useState(null);
  const handleSwitchClick = (color) => {
    setSelectedSwitch(color);
  };
  // Wishlist
  const [isInWishlist, setIsInWishlist] = useState(false);
  const handleWishlistClick = () => {
    if (isInWishlist) {
      notify("error", "Removed from Wishlist");
      setIsInWishlist(false);
    } else {
      notify("success", "เพิ่มเข้ารายการสินค้าที่สนใจ");
      setIsInWishlist(true);
    }
  };
  // Compare
  const [compareList, setCompareList] = useState<
    { id: string; category_id: number }[]
  >([]);
  const maxCompareProducts = 4;
  useEffect(() => {
    const storedCompareList = localStorage.getItem("compareList");
    if (storedCompareList) {
      setCompareList(JSON.parse(storedCompareList));
    }
  }, []);

  const handleCompareClick = () => {
    const productIdString = id.toString();
    const productCategoryId = category_id;

    if (
      compareList.length === 0 ||
      compareList[0].category_id === productCategoryId
    ) {
      if (compareList.some((product) => product.id === productIdString)) {
        notify("error", "removed from compare");
        const updatedCompareList = compareList.filter(
          (product) => product.id !== productIdString
        );
        localStorage.setItem("compareList", JSON.stringify(updatedCompareList));
        setCompareList(updatedCompareList);
      } else {
        if (compareList.length >= maxCompareProducts) {
          notify("error", "เลือกเปรียบเทียบสินค้าได้สูงสุด 4 สินค้าเท่านั้น");
        } else {
          notify("success", "added to compare");
          // add product to the comparison list
          const updatedCompareList = [
            ...compareList,
            { id: productIdString, category_id: productCategoryId },
          ];

          // store the updated compareList in local storage
          localStorage.setItem(
            "compareList",
            JSON.stringify(updatedCompareList)
          );

          // update the state with the new compareList
          setCompareList(updatedCompareList);
        }
      }
    } else {
      // Clear the compare list and add the current product
      notify("success", "added to compare");
      const updatedCompareList = [
        { id: productIdString, category_id: productCategoryId },
      ];
      localStorage.setItem("compareList", JSON.stringify(updatedCompareList));
      setCompareList(updatedCompareList);
    }
  };

  // Copy Link
  const handleCopyLinkClick = () => {
    navigator.clipboard.writeText(links);
    notify("success", "Copy Link!");
  };

  // Keep Coupon
  const [isInCoupon, setisInCoupon] = useState(false);
  const handleInCoupleClick = () => {
    setisInCoupon(true);
  };

  // Cart Amount
  const handleCartAmountChange = (amount: number) => () => {
    if (!isNaN(amount)) {
      if (amount > 5) {
        notify("error", "Out of Stock");
        return;
      }

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

  // Get Color
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

  // Style for IconButton (Social Media/Wishlist/Compare)
  const iconButtonStyle = {
    borderColor: "#e6e7e8",
    border: "1px solid #e6e7e8",
  };

  return (
    <Box overflow="hidden">
      <CompareNotification count={compareList.length} />

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
        <Grid item lg={4.5} md={6} xs={12} alignItems="center">
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
          {/* FLASH SALES DEALS */}
          <Box mb="20px">
            <FlashSaleBar dateExpired="2023-10-05T23:59:59"></FlashSaleBar>
          </Box>

          {/* COLOR */}
          <Box mb="10px">
            <Grid item lg={12} md={12} xs={12}>
              <H6 mb="0.8rem">Color : </H6>
              <Grid container>
                <FlexBox mb="1rem">
                  {colorList.map((item) => (
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
          {/* SWITCH */}
          <Box mb="20px">
            <Grid item lg={12} md={12} xs={12}>
              <H6 mb="0.8rem">Switch : </H6>
              <Grid container>
                {switchList.map((item, ind) => (
                  <Grid item lg={3} md={3} xs={6} key={item.id}>
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
          <Grid container justifyContent="center" spacing={6}>
            <Grid item lg={4} md={4} xs={6}>
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
            <Grid item lg={7} md={7} xs={6}>
              <Button
                mb="25px"
                size="small"
                color="ihavecpu"
                variant="contained"
                width="100%"
              >
                ซื้อเลย
              </Button>
            </Grid>
          </Grid>
          <Divider height={1} style={{ backgroundColor: "#DAE1E7" }} />
          <Box mt="15px" display="flex" justifyContent="space-between">
            <div>
              {/** COMPARE */}
              <Typography as="a" color="inherit">
                <IconButton
                  onClick={handleCompareClick}
                  mr="0.5rem"
                  size="extrasmall"
                  style={iconButtonStyle}
                >
                  <Icon
                    variant="small"
                    color={
                      compareList.some(
                        (product) =>
                          product.id === id.toString() &&
                          product.category_id === category_id
                      )
                        ? "ihavecpu"
                        : "social"
                    }
                  >
                    compare
                  </Icon>
                </IconButton>
              </Typography>
              {/** WISHLIST */}
              <Typography as="a" color="inherit">
                <IconButton
                  onClick={handleWishlistClick}
                  mr="1rem"
                  size="extrasmall"
                  style={iconButtonStyle}
                >
                  <Icon
                    variant="small"
                    color={isInWishlist ? "ihavecpu" : "social"}
                  >
                    {isInWishlist ? "heart-filled" : "heart"}
                  </Icon>
                </IconButton>
              </Typography>
            </div>
            <div>
              {/** COPY LINK */}
              <Typography as="a" color="inherit">
                <IconButton
                  onClick={handleCopyLinkClick}
                  mr="0.5rem"
                  size="extrasmall"
                  style={iconButtonStyle}
                >
                  <Icon variant="small" color="social">
                    link
                  </Icon>
                </IconButton>
              </Typography>
              {/** FACEBOOK */}
              <Link href={`/address`}>
                <Typography as="a" color="inherit">
                  <IconButton
                    mr="0.5rem"
                    size="extrasmall"
                    style={iconButtonStyle}
                  >
                    <Icon variant="small" color="social">
                      facebook
                    </Icon>
                  </IconButton>
                </Typography>
              </Link>
              {/** TWITTER */}
              <Link href={`/address`}>
                <Typography as="a" color="inherit">
                  <IconButton size="extrasmall" style={iconButtonStyle}>
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
          <Grid item lg={12} md={12} xs={12}>
            <SectionVoucher
              iconName="coupon"
              title="คูปองส่วนลด"
              onClickSeeMore={() => {
                toggleDialog();
              }}
            >
              <CarouselVoucher totalSlides={2} visibleSlides={1}>
                <ProductCard20
                  onClick={handleInCoupleClick}
                  checked={isInCoupon}
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
const switchList = [
  { id: "209", product_id: "SKU-67171", title: "Red Switch" },
  { id: "210", product_id: "SKU-67171", title: "Blue Switch" },
  { id: "211", product_id: "SKU-67171", title: "Brown Switch" },
  { id: "212", product_id: "SKU-67171", title: "Green Switch" },
  { id: "213", product_id: "SKU-67171", title: "Black Switch" },
];
export default ProductIntro;
