import { FC } from "react";
import { BorderProps, ColorProps } from "styled-system";
import StyledColor from "./styles";

export interface ColorCircleProps extends BorderProps, ColorProps {
  src?: string;
  size?: number;
  children?: any;
  [key: string]: any;
}

const ColorCircle: FC<ColorCircleProps> = ({
  src,
  size,
  children,
  ...props
}) => {
  return (
    <StyledColor size={size} {...props}>
      {src && <img src={src} alt="avatar" />}
      {!src && children && <span>{children}</span>}
    </StyledColor>
  );
};

ColorCircle.defaultProps = { size: 48 };

export default ColorCircle;
