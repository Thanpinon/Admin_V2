import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import Card from "@component/Card";
import { theme } from "@utils/theme";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import NavLink from "@component/nav-link";
import Scrollbar from "@component/Scrollbar";
import { H4, Span } from "@component/Typography";
import { Accordion, AccordionHeader } from "@component/accordion";
import { NavWithChild } from "interfaces";
import { CategoryItem } from "@models/categoryNavList.model";

// styled components
const NavbarRoot = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "8px",
  position: "relative",
  "& .linkList": {
    padding: "8px 11px",
    transition: "all 0.2s",
    background: theme.colors.gray[100],
    "&:hover": {
      color: theme.colors.primary.main,
      background: theme.colors.primary[100],
    },
  },
}));

const StyledList = styled(FlexBox)(({ theme }) => ({
  transition: "all 0.2s",
  padding: "4px 11px",
  alignItems: "center",
  "& .listCircle": { background: theme.colors.gray[600] },
  "&:hover": {
    color: theme.colors.primary.main,
    background: theme.colors.primary[100],
    "& .listCircle": { background: theme.colors.primary.main },
  },
}));

const Circle = styled("span")({
  width: "4px",
  height: "4px",
  marginLeft: "2rem",
  marginRight: "8px",
  borderRadius: "3px",
});

// =================================================================
type Props = { navList: CategoryItem[] };
// =================================================================

const SideNavbar2: FC<Props> = ({ navList }) => {
  // RENDER THE INNER CHILD CATEGORRY
  const renderChild = (childList: NavWithChild[]) => {
    return childList.map((item) => (
      <NavLink href={item.href} key={item.title} color="gray.700">
        <StyledList>
          <Circle className="listCircle" />
          <Span py={0.75} fontSize={14}>
            {item.title}
          </Span>
        </StyledList>
      </NavLink>
    ));
  };

  return (
    <Scrollbar>
      <NavbarRoot>
        <FlexBox
          padding="10px 18px"
          style={{ borderRadius: "5px 5px 0px 0px", backgroundColor: theme.colors.gray[300] }}
        >
          <H4>Categories</H4>
        </FlexBox>

        {navList.map((item, ind) => {
          return (
            <Box mb="2px" color="gray.700" key={ind}>
              {item.child ? (
                <Accordion>
                  <AccordionHeader px={0} py={0.75} className="linkList">
                    <FlexBox py={0.3} alignItems="center">
                      <Icon mr="10px" size="20px" defaultcolor="currentColor">
                        {item.icon}
                      </Icon>

                      <Span fontWeight={600} fontSize={14}>
                        {item.title}
                      </Span>
                    </FlexBox>
                  </AccordionHeader>

                  {item.child && renderChild(item.child as NavWithChild[])}
                </Accordion>
              ) : (
                <NavLink key={item.title} href={item.href} color="gray.700">
                  <FlexBox className="linkList" py={0.75}>
                    <Icon mr="10px" size="20px" defaultcolor="currentColor">
                      {item.icon}
                    </Icon>

                    <Span fontWeight={600} fontSize={14}>
                      {item.title}
                    </Span>
                  </FlexBox>
                </NavLink>
              )}
            </Box>
          );
        })}
      </NavbarRoot>
    </Scrollbar>
  );
};

export default SideNavbar2;
