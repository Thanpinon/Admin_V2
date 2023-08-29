import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import Box from "./Box";

type FlexBoxProps = FlexboxProps & LayoutProps & SpaceProps & ColorProps & BorderProps & FlexProps;

const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;
  flex-direction: row;
  ${layout}
  ${color}
  ${flexbox}
  ${space}
  ${border}
`;

export default FlexBox;
