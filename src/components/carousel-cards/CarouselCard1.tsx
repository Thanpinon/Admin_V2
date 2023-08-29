import { FC } from "react";
import styled from "styled-components";
import Box from "@component/Box";
import { Button } from "@component/buttons";
import Typography from "@component/Typography";

// styled component
const StyledCarouselCard1 = styled.div`
  display: flex;
  text-align: left;
  margin-left: 280px;
  align-items: center;
  padding: 1rem 0 1rem 2rem;
  justify-content: space-between;

  .title {
    font-size: 50px;
    margin-top: 0px;
    line-height: 1.2;
    margin-bottom: 1.35rem;
  }

  .image-holder {
    position: relative;
    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 900px) {
    margin-left: 0px;
    padding-left: 0px;

    .title {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 425px) {
    .title {
      font-size: 16px;
    }
    .title + * {
      font-size: 13px;
    }
    .button-link {
      font-size: 13px;
      padding: 0.66rem 0.95rem;
    }
  }
`;

// ===============================================
type Props = {
  title: string;
  image: string;
  buttonText: string;
  description: string;
};
// ===============================================

const CarouselCard1: FC<Props> = ({ title, image, buttonText, description }) => {
  return (
    <StyledCarouselCard1>
      <Box>
        <h1 className="title">{title}</h1>
        <Typography color="secondary.main" mb="1.35rem">
          {description}
        </Typography>

        <Button className="button-link" variant="contained" color="primary" p="1rem 1.5rem">
          {buttonText}
        </Button>
      </Box>

      <div className="image-holder">
        <img src={image} alt="apple-watch-1" />
      </div>
    </StyledCarouselCard1>
  );
};

export default CarouselCard1;
