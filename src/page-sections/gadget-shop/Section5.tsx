import { FC } from "react";
import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import { ProductCard2 } from "@component/product-cards";
import CategorySectionCreator from "@component/CategorySectionCreator";
import useVisibleSilde from "./hooks/useVisibleSilde";
import Product from "@models/product.model";

// =============================================
type Props = { products: Product[] };
// =============================================

const Section5: FC<Props> = ({ products }) => {
  const { visibleSlides } = useVisibleSilde({ initialSlide: 6, xs: 2, sm: 3, md: 4 });

  return (
    <CategorySectionCreator title="New Arrivals">
      <Carousel totalSlides={products.length} visibleSlides={visibleSlides}>
        {products.map((item) => (
          <Box key={item.id}>
            <ProductCard2
              slug={item.slug}
              price={item.price}
              title={item.title}
              imgUrl={item.thumbnail}
            />
          </Box>
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

// const productList = [
//   {
//     price: 150,
//     title: "Sunglass",
//     productUrl: "/product/c1",
//     imgUrl: "/assets/images/products/imagegoggles.png",
//   },
//   {
//     price: 250,
//     title: "Makeup",
//     productUrl: "/product/c12",
//     imgUrl: "/assets/images/products/lipstick (2).png",
//   },
//   {
//     price: 350,
//     title: "Smart Watch",
//     productUrl: "/product/c14",
//     imgUrl: "/assets/images/products/bgwatch.png",
//   },
//   {
//     price: 15,
//     title: "Lipstick",
//     productUrl: "/product/c156",
//     imgUrl: "/assets/images/products/lipstick (1).png",
//   },
//   {
//     price: 55,
//     title: "Green plant",
//     productUrl: "/product/c145",
//     imgUrl: "/assets/images/products/lipstick (4).png",
//   },
//   {
//     price: 535,
//     title: "Bonsai tree",
//     productUrl: "/product/c176",
//     imgUrl: "/assets/images/products/lipstick (3).png",
//   },
//   {
//     price: 150,
//     title: "Sunglass",
//     productUrl: "/product/c1sg",
//     imgUrl: "/assets/images/products/imagegoggles.png",
//   },
//   {
//     price: 250,
//     title: "Makeup",
//     productUrl: "/product/c123",
//     imgUrl: "/assets/images/products/lipstick (2).png",
//   },
//   {
//     price: 350,
//     title: "Smart Watch",
//     productUrl: "/product/c1r23",
//     imgUrl: "/assets/images/products/bgwatch.png",
//   },
// ];

export default Section5;
