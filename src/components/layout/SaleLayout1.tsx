import { FC, ReactNode } from "react";
import Head from "next/head";
import Topbar from "@component/topbar";
import { Header } from "@component/header";
import { Footer1 } from "@component/footer";
import Navbar from "@component/navbar/Navbar";
import MobileNavigationBar from "@component/mobile-navigation";
import StyledAppLayout from "./AppLayoutStyle";

// ==============================================================
type Props = { title?: string; children: ReactNode };
// ==============================================================

const SaleLayout1: FC<Props> = ({ children, title = "Multivendor Ecommerce | Sale" }) => (
  <StyledAppLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Topbar />
    <Header />
    <Navbar />

    {children}

    <MobileNavigationBar />
    <Footer1 />
  </StyledAppLayout>
);

export default SaleLayout1;
