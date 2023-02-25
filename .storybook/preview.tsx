import React from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
 
SyntaxHighlighter.registerLanguage('tsx', tsx);

import {
  defaultTheme,
  ThemeProvider,
  Preflight
} from "@xstyled/styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Preflight />
        <Story />
      </ThemeProvider>
    )
  ]
};
