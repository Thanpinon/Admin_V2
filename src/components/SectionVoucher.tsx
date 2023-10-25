import { FC, ReactNode } from "react";
import Box from "./Box";
import Container from "./Container";
import FlexBox from "./FlexBox";
import Icon from "./icon/Icon";
import { H4, SemiSpan } from "./Typography";

// =======================================================
export interface CategorySectionCreatorProps {
  title?: string;
  iconName?: string;
  children: ReactNode;
  seeMoreLink?: string;
  onClickSeeMore?: () => void;
}
// =======================================================

const SectionVoucher: FC<CategorySectionCreatorProps> = ({
  title,
  iconName,
  children,
  onClickSeeMore,
}) => {
  return (
    <Box>
      <Container pb="1rem">
        {title && (
          <FlexBox
            justifyContent="space-between"
            alignItems="center"
            mb="1.5rem"
          >
            <FlexBox alignItems="center" style={{ flex: 1 }}>
              {iconName && (
                <Icon defaultcolor="auto" mr="0.5rem">
                  {iconName}
                </Icon>
              )}
              <H4
                fontWeight="bold"
                lineHeight="1"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </H4>
            </FlexBox>

            <FlexBox alignItems="center" ml="0.5rem" color="text.muted">
              <SemiSpan
                mr="0.5rem"
                onClick={onClickSeeMore}
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                ดูทั้งหมด
              </SemiSpan>
              <Icon size="12px" defaultcolor="currentColor">
                right-arrow
              </Icon>
            </FlexBox>
          </FlexBox>
        )}

        {children}
      </Container>
    </Box>
  );
};

export default SectionVoucher;
