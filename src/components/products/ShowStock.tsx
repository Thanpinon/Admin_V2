import styled from "styled-components";
import {
  color,
  ColorProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

interface ShowStockProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    PositionProps {
  cursor?: string;
  boxShadow?: string;
}

export const ShowStock = styled.div<ShowStockProps>`
  display: inline-flex;
  border-radius: 300px;
  transition: all 150ms ease-in-out;
  cursor: ${(props) => props.cursor || "unset"};
  box-shadow: ${(props) => props.boxShadow || "unset"};
  ${space}
  ${color}
  ${position}
  ${typography}
`;
