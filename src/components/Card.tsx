import { shadowOptions } from "interfaces";
import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import Box from "./Box";

export interface CardProps {
  elevation?: number;
  hoverEffect?: boolean;
  boxShadow?: shadowOptions;
}

const Card = styled(Box)<ColorProps & SpaceProps & LayoutProps & BorderProps & CardProps>`
  background-color: ${({ theme }) => theme.colors.body.paper};
  box-shadow: ${({ theme, boxShadow, elevation }) =>
    `${theme.shadows[boxShadow]}, ${theme.shadows[elevation]}`};

  :hover {
    box-shadow: ${({ theme, hoverEffect }) => hoverEffect && theme.shadows.large};
  }

  ${border}
  ${color}
  ${space}
  ${layout}
`;

Card.defaultProps = { borderRadius: 8, boxShadow: "small", hoverEffect: false };

export default Card;
