import { Children, cloneElement, FC, ReactElement } from "react";
import { FlexboxProps } from "styled-system";
import StyledGrid from "./styles";

export interface GridProps {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  item?: boolean;
  spacing?: number;
  className?: string;
  container?: boolean;
  containerHeight?: string;
  vertical_spacing?: number;
  horizontal_spacing?: number;
  children: ReactElement<GridProps>[] | any;
  [key: string]: unknown;
}

const Grid: FC<GridProps & FlexboxProps> = ({ children, ...props }) => {
  let childList = children;

  if (props.container) {
    childList = Children.map(children, (child) => {
      return cloneElement(child, {
        spacing: props.spacing,
        horizontal_spacing: props.horizontal_spacing,
        vertical_spacing: props.vertical_spacing,
      });
    });
  }

  return <StyledGrid {...props}>{childList}</StyledGrid>;
};

Grid.defaultProps = { spacing: 0, containerHeight: "unset" };

export default Grid;
