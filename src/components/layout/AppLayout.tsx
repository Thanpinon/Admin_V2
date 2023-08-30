import { FC, ReactElement, ReactNode } from "react";
import Head from "next/head";
import Topbar from "@component/topbar";
import Sticky from "@component/sticky";
import { Header } from "@component/header";
import { Footer1 } from "@component/footer";
import MobileNavigationBar from "@component/mobile-navigation";
import StyledAppLayout from "./AppLayoutStyle";

// ===============================================================================
type Props = { title?: string; navbar?: ReactElement; children: ReactNode };
// ===============================================================================

const AppLayout: FC<Props> = ({ navbar, children, title = "ถ้าคุณชอบคอมพิวเตอร์ เราคือเพื่อนกัน" }) => (
  <StyledAppLayout>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Topbar />

    <Sticky fixedOn={0}>
      <Header />
    </Sticky>

    {navbar && <div className="section-after-sticky">{navbar}</div>}
    {!navbar ? <div className="section-after-sticky">{children}</div> : children}

    <MobileNavigationBar />
    <Footer1 />
  </StyledAppLayout>
);

export default AppLayout;
