import { FC } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import Icon from "../icon/Icon";
import FlexBox from "../FlexBox";
import Typography from "../Typography";

const StyledImage = styled(NextImage)`
  border-radius: 5px;
`;

type MobileCategoryImageBoxProps = {
  icon?: string;
  title: string;
  imgUrl?: string;
};

const MobileCategoryImageBox: FC<MobileCategoryImageBoxProps> = ({ title, imgUrl, icon }) => {
  return (
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center">
      {imgUrl ? (
        <StyledImage src={imgUrl} width={100} height={100} objectFit="cover" />
      ) : (
        icon && <Icon size="48px">{icon}</Icon>
      )}

      <Typography
        className="ellipsis"
        textAlign="center"
        fontSize="11px"
        lineHeight="1"
        mt="0.5rem"
      >
        {title}
      </Typography>
    </FlexBox>
  );
};

export default MobileCategoryImageBox;
