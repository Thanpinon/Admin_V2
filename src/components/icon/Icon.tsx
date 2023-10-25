import { FC } from "react";
import { SpaceProps } from "styled-system";
import { colorOptions } from "../../interfaces";
import StyledIcon from "./styles";

export interface IconProps {
  size?: string;
  children: string;
  transform?: string;
  color?: colorOptions;
  variant?: "small" | "medium" | "large";
  defaultcolor?: "currentColor" | "auto";
  className?: string;
  onClick?: () => void;
}

type ComponentProps = IconProps & SpaceProps;

const Icon: FC<ComponentProps> = ({ children, onClick, ...props }) => {
  return (
    <StyledIcon
      src={`/assets/images/icons/${children}.svg`}
      fallback={() => <span>{children?.trim()}</span>}
      {...props}
      onClick={onClick}
    >
      {children?.trim()}
    </StyledIcon>
  );
};

Icon.defaultProps = { variant: "medium", defaultcolor: "currentColor" };

export default Icon;
