import { FC } from "react";
import Card from "@component/Card";
import Avatar from "@component/avatar";
import Rating from "@component/rating";
import Divider from "@component/Divider";
import FlexBox from "@component/FlexBox";
import CheckBox from "@component/CheckBox";
import TextField from "@component/text-field";
import { Accordion, AccordionHeader } from "@component/accordion";
import { H5, H6, Paragraph, SemiSpan } from "@component/Typography";
import { useState } from "react";
import "next-range-slider/dist/main.css";
import { RangeSlider } from "next-range-slider";
type ProductFilterCardProps = {
  selectedBrands: string[];
  onBrandCheckboxChange: (brand: string) => void;
  selectedSocketType: string[];
  onSocketTypeCheckboxChange: (brand: string) => void;
  minPrice: string | null;
  onMinPriceChange: (value: string) => void;
  maxPrice: string | null;
  onMaxPriceChange: (value: string) => void;
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
}) => {
  const render = (items: string[]) =>
    items.map((name) => (
      <Paragraph
        py="6px"
        pl="22px"
        key={name}
        fontSize="14px"
        color="text.muted"
        className="cursor-pointer"
      >
        {name}
      </Paragraph>
    ));

  const [low, setLow] = useState(minPrice);
  const [high, setHigh] = useState(maxPrice);

  return (
    <Card p="18px 27px" elevation={5}>
      {/* PRICE RANGE FILTER */}
      <H5 mb="16px">การค้นหา</H5>

      <Divider mt="18px" mb="24px" />

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
        max={3000}
        step={50}
        options={{
          leftInputProps: {
            value: low,
            onChange: (e) => {
              const value = String(e.target.value);
              setLow(value); // Update the low state
              onMinPriceChange(value); // Call onMinPriceChange with the new value
            },
          },
          rightInputProps: {
            value: high,
            onChange: (e) => {
              const value = String(e.target.value);
              setHigh(value); // Update the low state
              onMaxPriceChange(value); // Call onMinPriceChange with the new value
            },
          },
        }}
      />

      <Divider my="24px" />

      {/* BRANDS FILTER */}
      <H6 mb="16px">CPU Brands</H6>
      {brandList.map((item) => (
        <CheckBox
          my="10px"
          key={item}
          name={item}
          value={item}
          color="secondary"
          label={<SemiSpan color="inherit">{item}</SemiSpan>}
          onChange={() => onBrandCheckboxChange(item)}
          checked={selectedBrands.includes(item)}
        />
      ))}

      <Divider my="24px" />

      {/* STOCK AND SALES FILTERS */}
      <H6 mb="16px">CPU SOCKET TYPE</H6>
      {otherOptions.map((item) => (
        <CheckBox
          my="10px"
          key={item}
          name={item}
          value={item}
          color="secondary"
          label={<SemiSpan color="inherit">{item}</SemiSpan>}
          onChange={() => onSocketTypeCheckboxChange(item)}
          checked={selectedSocketType.includes(item)}
        />
      ))}

      <Divider my="24px" />

      {/* RATING FILTER */}
      {/* STOCK AND SALES FILTERS */}
      <H6 mb="16px">PROCESSOR</H6>
      {processorList.map((item) => (
        <CheckBox
          my="10px"
          key={item}
          name={item}
          value={item}
          color="secondary"
          label={<SemiSpan color="inherit">{item}</SemiSpan>}
          onChange={() => onSocketTypeCheckboxChange(item)}
          checked={selectedSocketType.includes(item)}
        />
      ))}
    </Card>
  );
};

const categroyList = [
  {
    title: "Bath Preparations",
    child: ["Bubble Bath", "Bath Capsules", "Others"],
  },
  { title: "Eye Makeup Preparations" },
  { title: "Fragrance" },
  { title: "Hair Preparations" },
];

const otherOptions = ["AMD AM4", "Intel LGA-1200", "Intel LGA-1700", "AMD AM5"];
const brandList = ["AMD", "Intel"];
const processorList = [
  "AMD Ryzen™ 5000 Series",
  "AMD Ryzen™ 4000 Series",
  "10th Gen Intel® Core™",
  "12th Gen Intel® Core™",
];

export default ProductFilterCard;
