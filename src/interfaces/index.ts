export type deviceOptions = "xs" | "sm" | "md" | "lg";
export type shadowOptions =
  | "small"
  | "regular"
  | "large"
  | "badge"
  | "border"
  | "none";
export type colorOptions =
  | "primary"
  | "secondary"
  | "warn"
  | "error"
  | "inherit"
  | "dark"
  | "ihavecpu"
  | "social";

type NavItem = { icon: string; title: string; href: string };

export type NavWithChild = {
  href: string;
  title: string;
  child?: Omit<NavItem, "icon">[];
};

export type Meta = {
  page: number;
  total: number;
  pageSize: number;
  totalPage: number;
};
