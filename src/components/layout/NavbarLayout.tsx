import { FC, ReactNode } from "react";
import AppLayout from "./AppLayout";
import Container from "@component/Container";
import Navbar from "@component/navbar/Navbar";

// ======================================================
type Props = { children: ReactNode };
// ======================================================

const NavbarLayout: FC<Props> = ({ children }) => {
  return (
    <AppLayout navbar={<Navbar />}>
      <Container my="2rem">{children}</Container>
    </AppLayout>
  );
};

export default NavbarLayout;
