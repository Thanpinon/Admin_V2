import { GetStaticProps } from "next";
import Box from "@component/Box";
import { Footer2 } from "@component/footer";
import Wrapper from "@sections/grocery-2/Wrapper";
import Section1 from "@sections/grocery-2/Section1";
import Section2 from "@sections/grocery-2/Section2";
import Section3 from "@sections/grocery-2/Section3";
import Section4 from "@sections/grocery-2/Section4";
import Section6 from "@sections/grocery-2/Section6";
import Section9 from "@sections/grocery-2/Section9";
import SidenavBar from "@sections/grocery-2/SidenavBar";
import GroceryLayout from "@component/layout/GroceryLayout";
import useScroll from "@hook/useScroll";
import api from "@utils/__api__/grocery-2";
// data models
import Service from "@models/service.model";
import Product from "@models/product.model";
import Category from "@models/category.model";
import { CategoryItem } from "@models/categoryNavList.model";
import { GroceryTwoCarouselItem } from "@models/carousel.model";

// ========================================================
type Grocery2Props = {
  categories: Category[];
  serviceList: Service[];
  dairyProducts: Product[];
  featuredProducts: Product[];
  bestSellProducts: Product[];
  bestHomeProducts: Product[];
  navigationList: CategoryItem[];
  mainCarouselData: GroceryTwoCarouselItem[];
  testimonials: any[];
  discountBanners: any[];
};
// ========================================================

const GroceryTwo = (props: Grocery2Props) => {
  const { isFixed } = useScroll();

  return (
    <Wrapper isSidenavFixed={isFixed}>
      {/* SIDEBAR NAVIGATION AREA */}
      <Box className="sidenav" pt="1.5rem">
        <SidenavBar isFixed={isFixed} navList={props.navigationList} />
      </Box>

      <Box className="content" pt="1.5rem">
        {/* HERO CAROUSEL AREA */}
        <Section1 carouselData={props.mainCarouselData} />

        {/* SERVICES AREA */}
        <Box mb="3rem" overflow="hidden">
          <Section2 services={props.serviceList} />
        </Box>

        {/* SHOP BY CATEGORY AREA */}
        <Box mb="3rem">
          <Section3 categories={props.categories} />
        </Box>

        {/* FEATURED PRODUCTS AREA */}
        <Box mb="3rem">
          <Section4 title="Featured Items" products={props.featuredProducts} />
        </Box>

        {/* BEST SELLER PRODUCTS AREA */}
        <Box mb="3rem">
          <Section4 title="Best Seller in Your Area" products={props.bestSellProducts} />
        </Box>

        {/* DISCOUNT BANNER CAROUSEL AREA */}
        <Box mb="3rem">
          <Section6 cardList={props.discountBanners} />
        </Box>

        {/* BEST HOME PRODUCTS AREA */}
        <Box mb="3rem">
          <Section4 title="Best of Home Essentials" products={props.bestHomeProducts} />
        </Box>

        {/* SNACK AND DRINKS PRODUCTS AREA */}
        <Box mb="3rem">
          <Section4 title="Snacks, Drinks, Dairy & More" products={props.dairyProducts} />
        </Box>

        {/* TESTIMONIAL CAROUSEL AREA */}
        <Box mb="3rem">
          <Section9 testimonials={props.testimonials} />
        </Box>

        {/* FOOTER AREA */}
        <Footer2 />
      </Box>
    </Wrapper>
  );
};

GroceryTwo.layout = GroceryLayout;

export const getStaticProps: GetStaticProps = async () => {
  const serviceList = await api.getServices();
  const categories = await api.getCategories();
  const testimonials = await api.getTestimonials();
  const dairyProducts = await api.getDairyProducts();
  const navigationList = await api.getNavigationList();
  const mainCarouselData = await api.getMainCarousel();
  const featuredProducts = await api.getFeaturedProducts();
  const bestHomeProducts = await api.getBestHomeProducts();
  const bestSellProducts = await api.getBestSellProducts();
  const discountBanners = await api.getDiscountBannerList();

  return {
    props: {
      categories,
      serviceList,
      testimonials,
      dairyProducts,
      navigationList,
      discountBanners,
      featuredProducts,
      bestSellProducts,
      bestHomeProducts,
      mainCarouselData,
    },
  };
};

export default GroceryTwo;
