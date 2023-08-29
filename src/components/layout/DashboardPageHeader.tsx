import { FC } from "react";
import Box from "@component/Box";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import { H2 } from "@component/Typography";
import useWindowSize from "@hook/useWindowSize";
import Sidenav from "@component/sidenav/Sidenav";
import DashboardNavigation from "./DashboardNavigation";

export interface DashboardPageHeaderProps {
  iconName?: string;
  title?: string;
  button?: any;
}

const DashboardPageHeader: FC<DashboardPageHeaderProps> = ({ iconName, title, button }) => {
  const width = useWindowSize();
  const isTablet = width < 1025;

  return (
    <Box mb="1.5rem" mt="-1rem">
      <FlexBox justifyContent="space-between" alignItems="center" mt="1rem">
        <FlexBox alignItems="center">
          <Icon color="primary">{iconName}</Icon>
          <H2 ml="12px" my="0px" lineHeight="1" whitespace="pre">
            {title}
          </H2>
        </FlexBox>

        {isTablet && (
          <Sidenav position="left" handle={<Icon mx="1rem">menu</Icon>}>
            <DashboardNavigation />
          </Sidenav>
        )}

        {!isTablet && button}
      </FlexBox>

      {isTablet && !!button && <Box mt="1rem">{button}</Box>}
    </Box>
  );
};

export default DashboardPageHeader;
