import styled from "styled-components";
import Card from "@component/Card";
import { getTheme } from "@utils/utils";
import FlexBox from "@component/FlexBox";
import NavLink from "@component/nav-link";

export const DetailsWrapper = styled(Card)`
  @media only screen and (max-width: 768px) {
    box-shadow: none;
    overflow-y: auto;
  }
`;

export const StyledWrapper = styled(Card)`
  cursor: default;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: left;
  border-left: 4px solid;
  color: ${"inherit"};
  border-left-color: ${"transparent"};
  border-radius: 0;
  transition: color 0.3s, border-left-color 0.3s;

  .dashboard-nav-icon-holder {
    color: ${getTheme("colors.gray.600")};
  }

  :hover {
    color: ${getTheme("colors.primary.main")};
    border-left-color: ${getTheme("colors.primary.main")};

    .dashboard-nav-icon-holder {
      color: ${getTheme("colors.primary.main")};
    }
  }
`;

export const StyledWrapperPageTitle = styled(FlexBox)``;
