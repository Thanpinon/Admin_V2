import { FC } from "react";
import Link from "next/link";
import Icon from "@component/icon/Icon";
import { StyledCategoryMenuItem } from "./styles";

// ===============================================================
type CategoryMenuItemProps = {
  href: string;
  icon?: string;
  title: string;
  caret?: boolean;
  children: any;
};
// ===============================================================

const CategoryMenuItem: FC<CategoryMenuItemProps> = (props) => {
  const { href, icon, title, caret, children } = props;

  return (
    <StyledCategoryMenuItem>
      <Link href={href}>
        <div className="category-dropdown-link">
          {icon && <Icon variant="small">{icon}</Icon>}
          <span className="title">{title}</span>
          {caret && <Icon variant="small">chevron-right</Icon>}
        </div>
      </Link>

      {children}
    </StyledCategoryMenuItem>
  );
};

CategoryMenuItem.defaultProps = { caret: true };

export default CategoryMenuItem;
