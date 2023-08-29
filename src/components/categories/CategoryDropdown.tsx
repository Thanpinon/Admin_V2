import { FC } from "react";
import navigations from "@data/navigations";
import MegaMenu1 from "./mega-menu/MegaMenu1";
import MegaMenu2 from "./mega-menu/MegaMenu2";
import CategoryMenuItem from "./CategoryMenuItem";
import { StyledCategoryDropdown } from "./styles";

// =========================================
type CategoryDropdownProps = {
  open: boolean;
  position?: "absolute" | "relative";
};
// =========================================

const CategoryDropdown: FC<CategoryDropdownProps> = ({ open, position }) => {
  const megaMenu = { MegaMenu1, MegaMenu2 };

  return (
    <StyledCategoryDropdown open={open} position={position}>
      {navigations.map((item) => {
        let MegaMenu = megaMenu[item.menuComponent];

        return (
          <CategoryMenuItem
            key={item.title}
            href={item.href}
            icon={item.icon}
            title={item.title}
            caret={!!item.menuData}
          >
            <MegaMenu data={item.menuData || {}} />
          </CategoryMenuItem>
        );
      })}
    </StyledCategoryDropdown>
  );
};

CategoryDropdown.defaultProps = { position: "absolute" };

export default CategoryDropdown;
