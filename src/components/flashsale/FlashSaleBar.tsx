import React, { FC } from "react";
import Countdown from "react-countdown";
import Icon from "@component/icon/Icon";
import StyledFlashSaleBar from "./styles";

export interface FlashSaleBarProps {
  dateExpired?: string;
}
const FlashSaleBar: FC<FlashSaleBarProps> = (props) => {
  const { dateExpired } = props;
  const endTime = new Date(`${dateExpired}`).getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (!completed) {
      return (
        <StyledFlashSaleBar>
          <div className="flash-sale-container">
            <div className="flash-sale-left">
              <Icon variant="small">flash</Icon>
              Flash Sale :
            </div>
            <div className="flash-sale-right">
              {days > 0 && `${days} D `} {hours} H {minutes} M {seconds} S
            </div>
          </div>
        </StyledFlashSaleBar>
      );
    }
  };

  return (
    <div>
      <Countdown date={endTime} renderer={renderer} />
    </div>
  );
};

export default FlashSaleBar;
