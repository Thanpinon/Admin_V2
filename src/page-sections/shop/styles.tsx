import styled from "styled-components";
import Card from "../../components/Card";
import { colors } from "@utils/themeColors";
import { convertHexToRGB } from "@utils/utils";

export const ShopIntroWrapper = styled(Card)`
  .cover-image {
    background-image: url(/assets/images/banners/shop-cover.png);
    background-size: cover;
    background-position: center;
  }

  .description-holder {
    min-width: 250px;

    @media only screen and (max-width: 500px) {
      margin-left: 0px;
    }
  }
`;

type ShopWrapperProps = { coverImgUrl: string };

export const ShopCard1Wrapper = styled(Card)<ShopWrapperProps>`
  .black-box {
    background-image: linear-gradient(
        to bottom,
        rgba(${convertHexToRGB(colors.gray[900])}, 0.8),
        rgba(${convertHexToRGB(colors.gray[900])}, 0.8)
      ),
      url(${(props) => props.coverImgUrl || "/assets/images/banners/cycle.png"});
    background-size: cover;
    background-position: center;
    color: white;
  }
`;
