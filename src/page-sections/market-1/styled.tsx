import styled from "styled-components";
import Box from "@component/Box";
import { getTheme } from "@utils/utils";

type StyledProductCategoryProps = { onClick: any };

const StyledProductCategory = styled(Box)<StyledProductCategoryProps>`
  display: flex;
  cursor: pointer;
  min-width: 240px;
  border-radius: 5px;
  align-items: center;
  padding: 0.75rem 1rem;

  &:hover {
    box-shadow: ${getTheme("shadows.4")};
  }

  .product-category-title {
    font-size: 17px;
    font-weight: 600;
    margin-left: 1.5rem;
    text-transform: capitalize;
  }

  .show-all {
    width: 100%;
    font-size: 16px;
    text-align: center;
  }
`;

export default StyledProductCategory;
