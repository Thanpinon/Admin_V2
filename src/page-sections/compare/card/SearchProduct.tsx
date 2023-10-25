import React, { FC, useState, useEffect } from "react";
import Box from "@component/Box";
import Icon from "@component/icon/Icon";
import TextField from "@component/text-field";
import SearchBoxStyle from "./styled";

export interface SearchProductProps {
  productDetail: any[];
  onSearchResultChange: (filteredProducts: any[], term: string) => void;
}

const SearchProduct: FC<SearchProductProps> = ({
  productDetail,
  onSearchResultChange,
}) => {
  const [resultList, setResultList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredProducts = productDetail.filter((product) =>
      product.name_th.toLowerCase().includes(value.toLowerCase())
    );

    setResultList(filteredProducts);
    onSearchResultChange(filteredProducts, value);
  };
  useEffect(() => {
    setResultList([]);
  }, [productDetail]);

  return (
    <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto">
      <SearchBoxStyle>
        <Icon className="search-icon" size="18px">
          search
        </Icon>
        <TextField
          fullwidth
          onChange={handleSearchChange}
          className="search-field"
          placeholder="ค้นหาสินค้า"
          value={searchTerm}
        />
        {resultList}
      </SearchBoxStyle>
    </Box>
  );
};

export default SearchProduct;
