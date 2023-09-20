import { Fragment } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Typography from "@component/Typography";
import NavLink from "@component/nav-link";
import { getTheme } from "@utils/utils";

// styled component
const DashboardNavigationWrapper = styled(Card)`
  @media only screen and (max-width: 768px) {
    height: calc(100vh - 64px);
    box-shadow: none;
    overflow-y: auto;
  }
`;

const StyledDashboardNav = styled(NavLink)<{ isCurrentPath?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid;
  color: ${({ isCurrentPath }) => (isCurrentPath ? getTheme("colors.primary.main") : "inherit")};
  border-left-color: ${({ isCurrentPath }) =>
    isCurrentPath ? getTheme("colors.primary.main") : "transparent"};

  .dashboard-nav-icon-holder {
    color: ${getTheme("colors.gray.600")};
  }

  :hover {
    border-left-color: ${getTheme("colors.primary.main")};

    .dashboard-nav-icon-holder {
      color: ${getTheme("colors.primary.main")};
    }
  }
`;

const DashboardNavigation = () => {
  const { pathname } = useRouter();

  return (
    <DashboardNavigationWrapper px="0px" pb="1.5rem" color="gray.900">
      {linkList.map((item) => (
        <Fragment key={item.title}>
          <Typography p="26px 30px 1rem" color="text.muted" fontSize="12px">
            {item.title}
          </Typography>

          {item.list.map((item) => (
            <StyledDashboardNav
              px="1.5rem"
              mb="1.25rem"
              href={item.href}
              key={item.title}
              isCurrentPath={pathname.includes(item.href)}
            >
              <FlexBox alignItems="center">
                <Box className="dashboard-nav-icon-holder">
                  <Icon variant="small" defaultcolor="currentColor" mr="10px">
                    {item.iconName}
                  </Icon>
                </Box>

                <span>{item.title}</span>
              </FlexBox>

              <span>{item.count}</span>
            </StyledDashboardNav>
          ))}
        </Fragment>
      ))}
    </DashboardNavigationWrapper>
  );
};

const linkList = [
  {
    title: "รายการ",
    list: [
      { href: "/orders", title: "คำสั่งซื้อ", iconName: "bag", count: 5 },
      { href: "/wish-list", title: "สินค้าที่ถูกใจ", iconName: "heart", count: 19 },
      {
        href: "/support-tickets",
        title: "ช่วยเหลือ",
        iconName: "customer-service",
        count: 1,
      },
    ],
  },
  {
    title: "บัญชี",
    list: [
      { href: "/profile", title: "ข้อมูลส่วนตัว", iconName: "user", count: 3 },
      { href: "/address", title: "ที่อยู่", iconName: "pin", count: 16 },
      { href: "/payment-methods", title: "ช่องทางชำระเงิน", iconName: "credit-card", count: 4 },
    ],
  },
];

export default DashboardNavigation;
