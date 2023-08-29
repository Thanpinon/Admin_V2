import styled from "styled-components";
import { deviceSize, layoutConstant } from "@utils/constants";

type WrapperProps = { isSidenavFixed: boolean };

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: ${layoutConstant.containerWidth};

  .sidenav {
    transition: top 300ms ease;
    width: ${layoutConstant.grocerySidenavWidth};
    position: ${({ isSidenavFixed }) => (isSidenavFixed ? "fixed" : "relative")};
    top: ${({ isSidenavFixed }) => (isSidenavFixed ? layoutConstant.headerHeight : 0)};
    height: calc(100vh - ${layoutConstant.headerHeight});
    bottom: 0;
  }

  .content {
    position: relative;
    left: ${({ isSidenavFixed }) =>
      isSidenavFixed ? layoutConstant.grocerySidenavWidth : "unset"};
    width: calc(100% - 1.75rem - ${layoutConstant.grocerySidenavWidth});
    margin-left: 1.75rem;
  }

  .section-1 {
    margin-bottom: 3rem;
    margin-top: 1.75rem;
  }

  @media only screen and (max-width: ${deviceSize.md}px) {
    .sidenav {
      display: none;
    }

    .content {
      width: calc(100% - 2rem) !important;
      left: 0px !important;
      margin-left: 1rem !important;
      margin-right: 1rem !important;
    }

    .section-1 {
      background: red;
      margin-top: 1rem;
    }
  }
`;

export default Wrapper;
