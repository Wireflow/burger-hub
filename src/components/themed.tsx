/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
    Text as DefaultText,
    View as DefaultView,
    TextStyle,
  } from "react-native";
  
 
  type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
  };
  
  export type TextProps = ThemeProps & DefaultText["props"];
  export type ViewProps = ThemeProps & DefaultView["props"];
  
  export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: string
  ) {
    const theme =  "light";
    const colorFromProps = props[theme];
  
    if (colorFromProps) {
      return colorFromProps;
    } else {
     }
  }
  
  export function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: lightColor }, "text");
  
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  }
  
  export function View(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
      { light: lightColor, dark: lightColor },
      "background"
    );
  
    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
  }
  export enum TextStyleKey {
    XXLarge = "xxlarge",
    XLarge = "xlarge",
    Large = "large",
    Paragraph = "paragraph",
    Lead = "lead",
    Small = "small",
    XSmall = "xsmall",
    Header = "header",
  }
  
  export type TextStyleOptions =
    | "xxlarge"
    | "xlarge"
    | "large"
    | "paragraph"
    | "lead"
    | "small"
    | "xsmall"
    | "header";
  
  export const textStyles: Record<TextStyleKey, TextStyle> = {
    [TextStyleKey.XXLarge]: {
      fontSize: 32,
      fontWeight: "bold",
    },
    [TextStyleKey.XLarge]: {
      fontSize: 24,
      fontWeight: "bold",
    },
    [TextStyleKey.Large]: {
      fontSize: 20,
      fontWeight: "normal",
    },
    [TextStyleKey.Paragraph]: {
      fontSize: 16,
      fontWeight: "normal",
    },
    [TextStyleKey.Lead]: {
      fontSize: 18,
      fontWeight: "bold",
    },
    [TextStyleKey.Small]: {
      fontSize: 14,
      fontWeight: "normal",
    },
    [TextStyleKey.XSmall]: {
      fontSize: 12,
      fontWeight: "normal",
    },
    [TextStyleKey.Header]: {
      fontSize: 20,
      fontWeight: "500",
    },
  };