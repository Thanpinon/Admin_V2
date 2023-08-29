import { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import Box from "@component/Box";
import Hidden from "@component/hidden";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";
import AppLayout from "../AppLayout";
import { DashboardNavigationWrapper, StyledDashboardNav } from "./styles";

const linkList = [
  { href: "/vendor/dashboard", title: "Dashboard", iconName: "board" },
  { href: "/vendor/products", title: "Products", iconName: "box", count: 300 },
  { href: "/vendor/add-product", title: "Add New Product", iconName: "upload" },
  { href: "/vendor/orders", title: "Orders", iconName: "shopping-cart", count: 40 },
  { href: "/vendor/account-settings", title: "Account Settings", iconName: "gear-2" },
];

// ======================================================
type Props = { children: ReactNode };
// ======================================================

const VendorDashboardLayout: FC<Props> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <AppLayout navbar={<Navbar />}>
      <Container my="2rem">
        <Grid container spacing={6}>
          <Hidden as={Grid} item lg={3} xs={12} down={1024}>
            <DashboardNavigationWrapper px="0px" py="1.5rem" color="gray.900">
              {linkList.map((item) => (
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
            </DashboardNavigationWrapper>
          </Hidden>

          <Grid item lg={9} xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default VendorDashboardLayout;
