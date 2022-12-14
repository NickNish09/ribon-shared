import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeProviderNative } from "styled-components/native";
import theme from "./theme";

type Props = {
  children: React.ReactNode;
};
export function ThemeProviderComponent({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export function ThemeProviderNativeComponent({ children }: Props) {
  return <ThemeProviderNative theme={theme}>{children}</ThemeProviderNative>;
}
