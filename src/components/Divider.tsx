import styled from "styled-components";
import { color, ColorProps, layout, LayoutProps, space, SpaceProps } from "styled-system";

const Divider = styled.div<SpaceProps & LayoutProps & ColorProps>`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  ${color}
  ${space}
  ${layout}
`;

export default Divider;
