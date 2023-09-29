import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  space,
  SpaceProps,
} from "styled-system";
import { ColorCircleProps } from "./index";

type Props = ColorCircleProps & BorderProps & ColorProps & SpaceProps;

const StyledColor = styled.div<Props>`
  display: block;
  font-weight: 600;
  overflow: hidden;
  position: relative;
  text-align: center;
  min-width: ${(props) => props.size}px;
  font-size: ${(props) => props.size / 2}px;
  border-radius: ${(props) => props.size}px;
  transition: border 0.3s ease-in-out, transform 0.3s;
  box-sizing: border-box;

  &:hover {
    border: 5px solid white;
    transform: scale(1.1);
  }

  &:focus {
    border: 10px solid white;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  & > * {
    top: 50%;
    left: 50%;
    line-height: 0;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  ${(props) =>
    props.selected &&
    `
    border: 3px solid #c9c9c9; 
  `}
  ${color}
  ${space}
  ${border}
  ${layout}
`;

export default StyledColor;
