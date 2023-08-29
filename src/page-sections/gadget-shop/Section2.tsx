import { FC } from "react";
import Link from "next/link";
import NextImage from "next/image";
import Box from "@component/Box";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { H3, H5 } from "@component/Typography";
import Category from "@models/category.model";

// =====================================================
type Props = { categories: Category[] };
// =====================================================

const Section2: FC<Props> = ({ categories }) => {
  const firstItem = categories[0];

  return (
    <CategorySectionCreator title="Featured Categories">
      <Grid container spacing={6} containerHeight="100%">
        <Grid item md={6} xs={12}>
          <Link href={`product/search/${firstItem.slug}`}>
            <a>
              <Card height="100%" hoverEffect position="relative">
                <NextImage width={100} height={100} layout="responsive" src={firstItem.image} />
                <H3
                  fontWeight="600"
                  style={{ position: "absolute", left: "1.5rem", bottom: "1rem" }}
                >
                  {firstItem.name}
                </H3>
              </Card>
            </a>
          </Link>
        </Grid>

        <Grid item md={6} xs={12}>
          <Box height="100%">
            <Grid container spacing={6} containerHeight="100%">
              {categories.slice(1).map((item) => (
                <Grid item sm={6} xs={12} key={item.id}>
                  <Link href={`product/search/${firstItem.slug}`}>
                    <a>
                      <Card height="100%" hoverEffect>
                        <NextImage src={item.image} width={100} height={100} layout="responsive" />
                        <H5 fontWeight="600" p="1rem" mt="1rem">
                          {item.name}
                        </H5>
                      </Card>
                    </a>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
};

export default Section2;
