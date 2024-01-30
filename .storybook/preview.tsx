import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import { Preview, ReactRenderer } from "@storybook/react";
import fonts from "../src/fonts";
import { lightTheme } from "../src/theme/LigthTheme";

const decorators = [
  withThemeFromJSXProvider<ReactRenderer>({
    themes: {
      light: lightTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: fonts, // Adds your GlobalStyle component to all stories
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators,
};

export default preview;
