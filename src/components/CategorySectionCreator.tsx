import { FC, ReactNode } from "react";
import Box from "./Box";
import Container from "./Container";
import CategorySectionHeader from "./CategorySectionHeader";

// =======================================================
export interface CategorySectionCreatorProps {
  title?: string;
  iconName?: string;
  children: ReactNode;
  seeMoreLink?: string;
}
// =======================================================

const CategorySectionCreator: FC<CategorySectionCreatorProps> = ({
  title,
  iconName,
  children,
  seeMoreLink,
}) => {
  return (
    <Box mb="3.75rem">
      <Container pb="1rem">
        {title && (
          <CategorySectionHeader
            title={title}
            iconName={iconName}
            seeMoreLink={seeMoreLink}
          />
        )}

        {children}
      </Container>
    </Box>
  );
};

export default CategorySectionCreator;
