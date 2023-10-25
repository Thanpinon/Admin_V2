import { FC } from "react";
import Card from "@component/Card";
import SettingSearch from "./SettingSearch";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import CheckBox from "@component/CheckBox";
import ButtonText from "@component/buttons/ButtonText";
import TextField from "@component/text-field";
import { H5, H6, SemiSpan } from "@component/Typography";
import { useState } from "react";
import Box from "@component/Box";
import { RangeSlider } from "next-range-slider";
type ProductFilterCardProps = {
  selectedBrands?: string[];
  onBrandCheckboxChange?: (brand: string) => void;
  selectedSocketType?: string[];
  onSocketTypeCheckboxChange?: (brand: string) => void;
  minPrice?: string | null;
  onMinPriceChange?: (value: string) => void;
  maxPrice?: string | null;
  onMaxPriceChange?: (value: string) => void;
  clearFilters?: () => void;
  handleItemRemove?: (itemToRemove: string) => void;
  clearBrands?: () => void;
  clearSocket?: () => void;
};
const ProductFilterCard: FC<ProductFilterCardProps> = ({
  selectedBrands,
  onBrandCheckboxChange,
  selectedSocketType,
  onSocketTypeCheckboxChange,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  clearFilters,
  handleItemRemove,
  clearBrands,
  clearSocket,
}) => {
  const [low, setLow] = useState(minPrice);
  const [high, setHigh] = useState(maxPrice);
  // get selected items names
  const getSelectedItemsNames = () => {
    const selectedItems = [...selectedBrands, ...selectedSocketType];
    return selectedItems.join(", ");
  };

  return (
    <Card p="18px 27px" elevation={5}>
      {/* SHOW SELECTED ITEMS */}
      {getSelectedItemsNames().length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <H5>การค้นหา</H5>
            <ButtonText onClick={clearFilters}>ล้างทั้งหมด</ButtonText>
          </div>
          <Box m="6px">
            <SettingSearch
              items={getSelectedItemsNames()}
              handleItemRemove={handleItemRemove}
            ></SettingSearch>
          </Box>
          <Divider mt="18px" mb="24px" />
        </>
      ) : null}

      {/* PRICE RANGE FILTER */}
      <H6 mb="16px">ช่วงราคา</H6>
      <FlexBox justifyContent="space-between" alignItems="center">
        <TextField
          placeholder="0"
          type="number"
          fullwidth
          value={low}
          onChange={(e) => {
            const value = e.target.value;
            setLow(String(e.target.value));
            onMinPriceChange(value);
          }}
        />

        <H5 color="text.muted" px="0.5rem">
          -
        </H5>

        <TextField
          placeholder="250"
          type="number"
          fullwidth
          value={high}
          onChange={(e) => {
            const value = e.target.value;
            setHigh(String(e.target.value));
            onMaxPriceChange(value);
          }}
        />
      </FlexBox>
      <RangeSlider
        min={0}
        max={12000}
        step={50}
        options={{
          leftInputProps: {
            value: low,
            onChange: (e) => {
              const value = String(e.target.value);
              setLow(value);
              onMinPriceChange(value);
            },
          },
          rightInputProps: {
            value: high,
            onChange: (e) => {
              const value = String(e.target.value);
              setHigh(value);
              onMaxPriceChange(value);
            },
          },
        }}
      />

      <Divider my="24px" />

      {/* CPU BRANDS FILTER MOCKUP */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <H6>CPU Brands</H6>
        {selectedBrands.length > 0 ? (
          <ButtonText onClick={clearBrands}>ล้าง</ButtonText>
        ) : null}
      </div>

      {brandList.map((item) => (
        <CheckBox
          my="10px"
          key={item.id}
          name={item.title}
          value={item.id}
          color="ihavecpu"
          label={<SemiSpan color="inherit">{item.title}</SemiSpan>}
          onChange={() => onBrandCheckboxChange(item.id)}
          checked={selectedBrands.includes(item.id)}
        />
      ))}

      <Divider my="24px" />

      {/* SOCKET TYPE FILTER MOCKUP */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <H6>CPU SOCKET TYPE</H6>
        {selectedSocketType.length > 0 ? (
          <ButtonText onClick={clearSocket}>ล้าง</ButtonText>
        ) : null}
      </div>
      {otherOptions.map((item) => (
        <CheckBox
          my="10px"
          key={item.id}
          name={item.id}
          value={item.id}
          color="ihavecpu"
          label={<SemiSpan color="inherit">{item.title}</SemiSpan>}
          onChange={() => onSocketTypeCheckboxChange(item.id)}
          checked={selectedSocketType.includes(item.id)}
        />
      ))}

      <Divider my="24px" />
    </Card>
  );
};

// mock up cpu socket type
const otherOptions = [
  { id: "AMD AM4", title: "AMD AM4" },
  { id: "Intel LGA-1200", title: "Intel LGA-1200" },
  { id: "Intel LGA-1700", title: "Intel LGA-1700" },
  { id: "AMD AM5", title: "AMD AM5" },
];
// mock up cpu brands
const brandList = [
  { id: "204", title: "AMD" },
  { id: "205", title: "Intel" },
];

export default ProductFilterCard;
