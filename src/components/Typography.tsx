import { FC } from "react";
import styled, { CSSProperties } from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

interface CustomProps
  extends TypographyProps,
    SpaceProps,
    ColorProps,
    FlexProps,
    LayoutProps,
    BorderProps {
  ref?: any;
  as?: any;
  title?: string;
  className?: string;
  ellipsis?: boolean;
  style?: CSSProperties;
  onClick?: (e) => void;
  [key: string]: any;
}

const Typography: FC<CustomProps> = styled.div<CustomProps>`
  ${(props) =>
    props.ellipsis
      ? `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  `
      : ""}

  ${border}
  ${typography}
  ${space}
  ${color}
  ${flex}
  ${layout}
`;

export const H1: FC<CustomProps> = (props) => (
  <Typography as="h1" mb="0" mt="0" fontSize="30px" {...props} />
);
export const H2: FC<CustomProps> = (props) => (
  <Typography as="h2" mb="0" mt="0" fontSize="25px" {...props} />
);
export const H3: FC<CustomProps> = (props) => (
  <Typography as="h3" mb="0" mt="0" fontSize="20px" {...props} />
);
export const H4: FC<CustomProps> = (props) => (
  <Typography as="h4" mb="0" mt="0" fontWeight="600" fontSize="17px" {...props} />
);
export const H5: FC<CustomProps> = (props) => (
  <Typography as="h5" mb="0" mt="0" fontWeight="600" fontSize="16px" {...props} />
);
export const H6: FC<CustomProps> = (props) => (
  <Typography as="h6" mb="0" mt="0" fontWeight="600" fontSize="14px" {...props} />
);

export const Paragraph: FC<CustomProps> = (props) => <Typography as="p" mb="0" mt="0" {...props} />;

export const Span: FC<CustomProps> = (props) => <Typography as="span" fontSize="16px" {...props} />;

export const SemiSpan: FC<CustomProps> = (props) => (
  <Typography as="span" fontSize="14px" color="text.muted" {...props} />
);

export const Small: FC<CustomProps> = (props) => (
  <Typography as="span" fontSize="12px" {...props} />
);

export const Tiny: FC<CustomProps> = (props) => <Typography as="span" fontSize="10px" {...props} />;

export default Typography;
