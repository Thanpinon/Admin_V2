import { theme } from "@utils/theme";
import { FC, ReactNode } from "react";
import SimpleBar, { Props } from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import styled, { CSSProperties } from "styled-components";

const StyledScrollBar = styled(SimpleBar)({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&.simplebar-visible:before": { opacity: 1 },
    "&:before": { backgroundColor: theme.colors.gray[400] },
  },
  "& .simplebar-track.simplebar-vertical": { width: 9 },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": { height: 6 },
  "& .simplebar-mask": { zIndex: "inherit" },
});

// ===========================================
interface ScrollbarProps extends Props {
  sx?: CSSProperties;
  children: ReactNode;
}
// ===========================================

const Scrollbar: FC<ScrollbarProps> = ({ children, sx, ...props }) => {
  return (
    <StyledScrollBar style={sx} {...props}>
      {children}
    </StyledScrollBar>
  );
};

export default Scrollbar;
