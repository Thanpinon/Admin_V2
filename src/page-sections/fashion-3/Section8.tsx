import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import { H2 } from "@component/Typography";
import Container from "@component/Container";
import { theme } from "@utils/theme";
import Blog from "@models/blog.model";

// styled components
const ImageWrapper = styled(Box)({
  cursor: "pointer",
  position: "relative",
  ":hover": {
    "::before": { opacity: 0.6 },
    "& svg": { opacity: 1, transform: "rotate(0deg) scale(1)" },
  },
  "::before": {
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "all 0.3s",
    backgroundColor: theme.colors.secondary.main,
  },
});

const StyledIcon = styled(Icon)({
  inset: 0,
  zIndex: 2,
  margin: "auto",
  color: "#fff",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    opacity: 0,
    transition: "all 0.3s",
    transform: "rotate(90deg) scale(2)",
  },
});

// ===========================================================
type Props = { blogs: Blog[] };
// ===========================================================

const Section8: FC<Props> = ({ blogs }) => {
  return (
    <Container mt="4rem">
      <H2 textAlign="center" mb={4}>
        Our Instagram
      </H2>

      <Grid container spacing={2}>
        {blogs.map((item) => (
          <Grid item md={2} sm={4} xs={6} key={item.id}>
            <ImageWrapper>
              <Image alt="post" width={100} height={100} layout="responsive" src={item.thumbnail} />
              <StyledIcon>instagram</StyledIcon>
            </ImageWrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section8;
