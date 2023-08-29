import { deviceSize } from "./constants";
import { colors } from "./themeColors";
import shadows from "./themeShadows";

export interface ThemeProps {
  theme: {
    space: number[];
    fontSizes: number[];
    colors: {
      blue: string;
      navy: string;
      black: string;
      white: string;
      primary: string;
    };
  };
}

const breakpoints: any = Object.keys(deviceSize).map((key) => deviceSize[key] + "px");

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const theme = { colors, shadows, breakpoints };
