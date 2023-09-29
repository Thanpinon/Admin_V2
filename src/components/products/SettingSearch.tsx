// SettingSearch.tsx
import React from "react";
import { Small } from "@component/Typography";
import { ButtonSearch } from "@component/buttons/ButtonSearch";
import ButtonDeleteLoading from "@component/buttons/ButtonDeleteLoading";
import Icon from "../icon/Icon";

type SettingSearchProps = {
  items: string;
  handleItemRemove: (itemToRemove: string) => void;
};

const SettingSearch: React.FC<SettingSearchProps> = ({
  items,
  handleItemRemove,
}) => {
  const itemArray = items.split(", ");

  const handleRemoveClick = (itemToRemove: string) => {
    handleItemRemove(itemToRemove);
  };
  // mock up cpu brand
  const brandList = [
    { id: "204", title: "AMD" },
    { id: "205", title: "Intel" },
  ];
  // mock up socket type
  const socketTypeList = [
    { id: "AMD AM4", title: "AMD AM4" },
    { id: "Intel LGA-1200", title: "Intel LGA-1200" },
    { id: "Intel LGA-1700", title: "Intel LGA-1700" },
    { id: "AMD AM5", title: "AMD AM5" },
  ];

  const getTitleById = (itemId, ...arrays) => {
    for (const array of arrays) {
      const item = array.find((item) => item.id === itemId);
      if (item) {
        return item.title;
      }
    }
    return "";
  };

  return (
    <div style={{ marginTop: "15px" }}>
      {itemArray.map((itemId) => (
        <ButtonSearch
          key={itemId}
          p="0.30rem 2rem"
          bg={`error.light`}
          style={{
            border: "10px",
            marginBottom: "8px",
            marginLeft: "2px",
            position: "relative",
            alignItems: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis", // Add ellipsis for text overflow
          }}
        >
          <Small color={`error.main`} style={{ flex: 1 }}>
            {getTitleById(itemId, brandList, socketTypeList)}
          </Small>
          <ButtonDeleteLoading onClick={() => handleRemoveClick(itemId)}>
            <Icon defaultcolor="auto" pl="3px" size="10px" color={`error`}>
              _close
            </Icon>
          </ButtonDeleteLoading>
        </ButtonSearch>
      ))}
    </div>
  );
};

export default SettingSearch;
