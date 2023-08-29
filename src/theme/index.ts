import getConfig from "next/config";
import { useRouter } from "next/router";
import getThemeOptions from "./themeOptions";

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

const theme = () => {
  const { pathname } = useRouter();
  const { publicRuntimeConfig } = getConfig();

  const theme = getThemeOptions(publicRuntimeConfig, pathname);

  return theme;
};

export default theme;
