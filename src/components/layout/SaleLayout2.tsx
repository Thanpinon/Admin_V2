import { FC, ReactNode } from "react";
import Head from "next/head";
import Topbar from "@component/topbar";
import Sticky from "@component/sticky";
import Divider from "@component/Divider";
import { Header } from "@component/header";
import { Footer1 } from "@component/footer";
import SaleNavbar from "@component/navbar/SaleNavbar";
import MobileNavigationBar from "@component/mobile-navigation";
import StyledAppLayout from "./AppLayoutStyle";

// ======================================================================
type Props = { title?: string; children: ReactNode };
// ======================================================================

const SaleLayout2: FC<Props> = ({ children, title = "Multivendor Ecommerce | Sale" }) => {
  return (
    <StyledAppLayout>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Topbar />
      <Header />
      <Divider />

      <Sticky fixedOn={0}>
        <SaleNavbar saleCategoryList={saleCategoryList} />
      </Sticky>

      <div className="section-after-sticky">{children}</div>

      <MobileNavigationBar />
      <Footer1 />
    </StyledAppLayout>
  );
};

const saleCategoryList = [
  { icon: "t-shirt", title: "Men" },
  { icon: "women-dress", title: "Women" },
  { icon: "beauty-products", title: "Cosmetics" },
  { icon: "watch", title: "Accessories" },
  { icon: "camera", title: "Eelctronics" },
  { icon: "sofa", title: "Furniture" },
  { icon: "basket-ball", title: "Sport" },
  { icon: "wheel", title: "Automobile" },
  { icon: "drill-machine", title: "Hardware" },
  { icon: "baby-feeder", title: "Baby products" },
  { icon: "picture", title: "Photos" },
  { icon: "t-shirt", title: "Clothes" },
];

export default SaleLayout2;
