import Link from "next/link";
import Image from "next/image";
import { FC, Fragment, useCallback, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "@context/AppContext";
import Box from "@component/Box";
import { Chip } from "@component/Chip";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { Button } from "@component/buttons";
import Card, { CardProps } from "@component/Card";
import { H3, SemiSpan, H6 } from "@component/Typography";
import { currency, getTheme } from "@utils/utils";
import { deviceSize } from "@utils/constants";
import ProductQuickView from "@component/products/ProductQuickView";

// styled component
const Wrapper = styled(Card)`
  margin: auto;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  transition: all 250ms ease-in-out;

  &:hover {
    .details {
      .add-cart {
        display: flex;
      }
    }
    .image-holder {
      .extra-icons {
        display: block;
      }
    }
  }

  .image-holder {
    text-align: center;
    position: relative;
    display: inline-block;
    height: 100%;

    .extra-icons {
      z-index: 2;
      top: 0.75rem;
      display: none;
      right: 0.75rem;
      cursor: pointer;
      position: absolute;
    }

    @media only screen and (max-width: ${deviceSize.sm}px) {
      display: block;
    }
  }

  .details {
    padding: 1rem;

    .title,
    .categories {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .icon-holder {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-between;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${getTheme("colors.text.hint")};
      }
    }
    .add-cart {
      display: none;
      margin-top: auto;
      align-items: center;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 768px) {
    .details {
      .add-cart {
        display: flex;
      }
    }
  }
`;

// =======================================================================
interface ProductCard1Props extends CardProps {
  off?: number;
  slug: string;
  title: string;
  price: number;
  imgUrl?: string;
  rating?: number;
  images?: string[];
  id?: string | number;
  description?: string;
}
// =======================================================================

const ProductCard1: FC<ProductCard1Props> = ({
  id,
  off,
  slug,
  title,
  price,
  imgUrl,
  images,
  description,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useAppContext();
  const cartItem = state.cart.find((item) => item.id === id);

  const toggleDialog = useCallback(() => setOpen((open) => !open), []);

  const handleCartAmountChange = (amount: number) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { id, slug, price, imgUrl, name: title, qty: amount },
    });
  };

  return (
    <>
      <Wrapper {...props}>
        <div className="image-holder">
          {!!off && (
            <Chip
              top="10px"
              left="10px"
              p="5px 10px"
              fontSize="10px"
              fontWeight="600"
              bg="primary.main"
              position="absolute"
              color="primary.text"
              zIndex={1}
            >
              {off}% off
            </Chip>
          )}

          <FlexBox className="extra-icons">
            <Icon
              color="secondary"
              variant="small"
              mb="0.5rem"
              onClick={toggleDialog}
            >
              eye-alt
            </Icon>

            <Icon className="favorite-icon outlined-icon" variant="small">
              heart
            </Icon>
          </FlexBox>

          <Link href={`/product/${slug}`}>
            <a>
              <Image
                alt={title}
                width={100}
                src={imgUrl}
                height={100}
                objectFit="cover"
                layout="responsive"
              />
            </a>
          </Link>
        </div>

        <div className="details">
          <FlexBox>
            <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
              <Link href={`/product/${slug}`}>
                <a>
                  <H3
                    mb="10px"
                    title={title}
                    fontSize="14px"
                    textAlign="left"
                    fontWeight="600"
                    className="title"
                    color="text.secondary"
                  >
                    {title}
                  </H3>
                </a>
              </Link>
              <H6
                fontSize="12px"
                fontWeight="100"
                color="text.secondary"
                style={{
                  marginTop: "10px",
                  textAlign: "left",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  lineHeight: "1",
                }}
              >
                {description}
              </H6>
              <FlexBox alignItems="center" mt="10px">
                <SemiSpan pr="0.5rem" fontWeight="600" color="primary.main">
                  {/* {calculateDiscount(price, off)} */}
                  {currency(price)}
                </SemiSpan>

                {!!off && (
                  <SemiSpan color="text.muted" fontWeight="600">
                    <del>{currency(price)}</del>
                  </SemiSpan>
                )}
              </FlexBox>
            </Box>

            <FlexBox
              width="30px"
              alignItems="center"
              flexDirection="column-reverse"
              justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"}
            >
              <Button
                size="none"
                padding="3px"
                color="primary"
                variant="outlined"
                borderColor="primary.light"
                onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
              >
                <Icon variant="small">plus</Icon>
              </Button>

              {!!cartItem?.qty && (
                <Fragment>
                  <SemiSpan color="text.primary" fontWeight="600">
                    {cartItem.qty}
                  </SemiSpan>

                  <Button
                    size="none"
                    padding="3px"
                    color="primary"
                    variant="outlined"
                    borderColor="primary.light"
                    onClick={handleCartAmountChange(cartItem.qty - 1)}
                  >
                    <Icon variant="small">minus</Icon>
                  </Button>
                </Fragment>
              )}
            </FlexBox>
          </FlexBox>
        </div>
      </Wrapper>

      <ProductQuickView
        open={open}
        onClose={toggleDialog}
        product={{ images, title, price, id, slug }}
      />
    </>
  );
};

export default ProductCard1;
