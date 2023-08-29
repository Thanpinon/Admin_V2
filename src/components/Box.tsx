import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

interface BoxProps
  extends LayoutProps,
    ColorProps,
    PositionProps,
    SpaceProps,
    FlexProps,
    BorderProps,
    FlexboxProps,
    TypographyProps {
  shadow?: number;
  cursor?: string;
  transition?: string;
}

const Box = styled.div<BoxProps>(
  ({ shadow, cursor, transition, theme }) => ({
    cursor,
    transition,
    boxShadow: theme.shadows[shadow],
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography)
);

Box.defaultProps = { shadow: 0, cursor: "unset" };

export default Box;
