import { FC } from "react";
import Card from "@component/Card";
import MegaMenu3 from "./MegaMenu3";
import CategoryMenuItem from "../CategoryMenuItem";
import { StyledMegaMenu1 } from "./styles";
import { MegaMenu2Props } from "./type";

const MegaMenu2: FC<MegaMenu2Props> = ({ data }) => {
  return (
    <StyledMegaMenu1 className="mega-menu">
      <Card ml="1rem" py="0.5rem" boxShadow="regular">
        {data?.map((item) => (
          <CategoryMenuItem
            key={item.title}
            href={item.href}
            icon={item.icon}
            title={item.title}
            caret={!!item.menuData}
          >
            {item.menuData && <MegaMenu3 minWidth="560px" data={item.menuData} />}
          </CategoryMenuItem>
        ))}
      </Card>
    </StyledMegaMenu1>
  );
};

export default MegaMenu2;
