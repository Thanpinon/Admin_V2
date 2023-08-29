import Link from "next/link";
import { useRouter } from "next/router";
import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { ColorProps, SpaceProps } from "styled-system";
import StyledNavLink from "./styles";

interface NavLinkProps extends SpaceProps, ColorProps {
  as?: string;
  href: string;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

const NavLink: FC<NavLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  as,
  href,
  style,
  children,
  className,
  ...props
}) => {
  let { pathname } = useRouter();

  const checkRouteMatch = () => {
    if (href === "/") return pathname === href;
    return pathname.includes(href);
  };

  return (
    <Link href={href}>
      <StyledNavLink
        href={href}
        style={style}
        className={className}
        isCurrentRoute={checkRouteMatch()}
        {...props}
      >
        {children}
      </StyledNavLink>
    </Link>
  );
};

export default NavLink;
