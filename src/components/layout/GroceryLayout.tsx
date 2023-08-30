import { FC, ReactNode } from "react";
import Head from "next/head";
import Sticky from "@component/sticky";
import { HeaderTwo } from "@component/header";
import Navbar2 from "@component/navbar/Navbar2";
import MobileNavigationBar from "@component/mobile-navigation";
import StyledAppLayout from "./AppLayoutStyle";

// =========================================================================
type Props = { title?: string; showNavbar?: boolean; children: ReactNode };
// =========================================================================

const GroceryLayout: FC<Props> = ({
  children,
  showNavbar = true,
  title = "ถ้าคุณขอบคอมพิวเตอร์ เราคือเืพื่อนกัน",
}) => (
  <StyledAppLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {/* HEADER AREA */}
    <Sticky fixedOn={0}>
      <HeaderTwo />
    </Sticky>

    {/* CONDITIONALLY RENDER NAVBAR AREA */}
    {showNavbar && (
      <div className="section-after-sticky">
        <Navbar2 />
      </div>
    )}

    {children}

    {/* SMALLER DEVICE NAVIGATION AREA */}
    <MobileNavigationBar />
  </StyledAppLayout>
);

export default GroceryLayout;
