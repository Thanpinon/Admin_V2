import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import Box from "@component/Box";
import Container from "@component/Container";
import { deviceSize, layoutConstant } from "utils/constants";

// styled component
const StyledContainer = styled(Container)`
  display: flex;
  padding-top: 24px;
  position: relative;

  .sidenav {
    top: 0;
    bottom: 0;
    position: relative;
    width: ${layoutConstant.grocerySidenavWidth};
    min-width: ${layoutConstant.grocerySidenavWidth};
    height: calc(100vh - ${layoutConstant.headerHeight});
  }

  .fixed {
    position: fixed;
    scroll-behavior: unset;
    top: ${layoutConstant.headerHeight};
  }

  .pageContent {
    left: unset;
    position: relative;
    margin-left: 1.75rem;
    width: calc(100% - 2rem - ${layoutConstant.grocerySidenavWidth});
  }

  .pageContentShifted {
    left: ${layoutConstant.grocerySidenavWidth};
  }

  .section1 {
    margin-bottom: 3rem;
    margin-top: 1.75rem;
  }

  @media (max-width: ${deviceSize.md}px) {
    .sidenav {
      display: none;
    }

    .pageContent {
      left: 0px !important;
      width: 100% !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
`;

// ================================================================
type SidenavContainerProps = {
  SideNav: any;
  children: ReactNode;
  navFixedComponentID: string;
};
// ================================================================

const SidenavContainer: FC<SidenavContainerProps> = (props) => {
  const { SideNav, children, navFixedComponentID } = props;

  const [isSidenavFixed, setSidenavFixed] = useState<boolean>(false);

  const scrollListener = useCallback(() => {
    const element: HTMLElement = document.getElementById(navFixedComponentID);
    const elementBottom = element.getBoundingClientRect().bottom;

    const position = elementBottom + window.scrollY - 80;
    setSidenavFixed(window.pageYOffset > position);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <StyledContainer>
      <Box className={clsx({ sidenav: true, fixed: isSidenavFixed })}>
        <SideNav />
      </Box>

      <Box className={clsx({ pageContent: true, pageContentShifted: isSidenavFixed })}>
        {children}
      </Box>
    </StyledContainer>
  );
};

export default SidenavContainer;
