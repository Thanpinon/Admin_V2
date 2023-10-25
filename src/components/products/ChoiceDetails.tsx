import React, { FC } from "react";
import Grid from "@component/grid/Grid";
import { ButtonChoice } from "@component/buttons";

type Props = {
  open: boolean;
  title: string;
  product_id: string;
  choice: string;
  selected: boolean;
  bg?: string;
  onClick: () => void;
};

const ChoiceDetail: FC<Props> = (props) => {
  const { choice, bg, selected, onClick } = props;
  const contentWidth = `${choice.length * 10}px`;

  const containerStyle = {
    marginBottom: "10px",
  };

  return (
    <Grid container style={containerStyle}>
      <ButtonChoice
        mr="5px"
        size="extrasmall"
        color="ihavecpu"
        variant="containOutlined"
        style={{
          flex: 1,
          width: contentWidth,
          cursor: "pointer",
          color: selected ? "white" : bg,
          backgroundColor: selected ? "#d4001a" : bg,
        }}
        onClick={onClick}
      >
        {choice}
      </ButtonChoice>
    </Grid>
  );
};

export default ChoiceDetail;
