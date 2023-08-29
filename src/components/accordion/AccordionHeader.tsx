import { FC, ReactNode } from "react";
import styled from "styled-components";
import { FlexboxProps, SpaceProps } from "styled-system";
import Icon from "../icon/Icon";
import FlexBox from "@component/FlexBox";

type HeaderProps = { open: boolean };
// styled component
export const AccordionHeaderWrapper = styled(FlexBox)<HeaderProps>`
  .caret-icon {
    transition: transform 250ms ease-in-out;
    transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;

// ==================================================================================
type AccordionHeaderProps = {
  open?: boolean;
  showIcon?: boolean;
  children: ReactNode;
  [key: string]: unknown;
};

type Props = AccordionHeaderProps & SpaceProps & FlexboxProps;
// ==================================================================================

const AccordionHeader: FC<Props> = ({ open, children, showIcon, ...props }) => {
  return (
    <AccordionHeaderWrapper
      open={open}
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      {children}

      {showIcon && (
        <Icon className="caret-icon" variant="small" defaultcolor="currentColor">
          chevron-right
        </Icon>
      )}
    </AccordionHeaderWrapper>
  );
};

AccordionHeader.defaultProps = { showIcon: true, py: "0.5rem", px: "1rem" };

export default AccordionHeader;
