import Link from "next/link";
import { FC } from "react";
import FlexBox from "./FlexBox";
import Icon from "./icon/Icon";
import { H4, SemiSpan } from "./Typography";
import { colorOptions } from "../interfaces";

export interface CategorySectionHeaderProps {
  title?: string;
  iconName?: string;
  seeMoreLink?: string;
  color?: colorOptions;
}

const CategorySectionHeader: FC<CategorySectionHeaderProps> = ({
  title,
  iconName,
  seeMoreLink,
  color,
}) => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center" mb="1.5rem">
      <FlexBox alignItems="center">
        {iconName && (
          <Icon defaultcolor="auto" color={color ?? null} mr="0.5rem">
            {iconName}
          </Icon>
        )}
        <H4 fontWeight="bold" lineHeight="1">
          {title}
        </H4>
      </FlexBox>

      {seeMoreLink && (
        <Link href={seeMoreLink}>
          <a>
            <FlexBox alignItems="center" ml="0.5rem" color="text.muted">
              <SemiSpan mr="0.5rem">ดูทั้งหมด</SemiSpan>
              <Icon size="12px" defaultcolor="currentColor">
                right-arrow
              </Icon>
            </FlexBox>
          </a>
        </Link>
      )}
    </FlexBox>
  );
};

export default CategorySectionHeader;
