import styled from "styled-components";
import systemCss from "@styled-system/css";
import { color, compose, variant } from "styled-system";
import { RatingProps } from "./index";

const StyledRating = styled.div<RatingProps>(
  ({ readonly }) =>
    systemCss({
      display: "flex",
      margin: "0px -1px",
      "& svg": { margin: "0px 1px", cursor: readonly ? "default" : "pointer" },
    }),
  variant({
    prop: "size",
    variants: {
      small: { "& svg": { height: 16, width: 16 } },
      medium: { "& svg": { height: 20, width: 20 } },
      large: { "& svg": { height: 28, width: 28 } },
    },
  }),
  compose(color)
);

StyledRating.defaultProps = { size: "small" };

export default StyledRating;
