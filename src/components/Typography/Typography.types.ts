import type React from "react";

/** Allowed typography variants */
export type TypoVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle"
  | "body"
  | "headline"
  | "caption"
  | "smallCaps"
  | "small"
  | "inherit";

/** Allowed text color options for the Typography component */
export type TypoColor =
  | "primary"
  | "secondary"
  | "white"
  | "offWhite"
  | "whiteSmoke"
  | "lightGray"
  | "darkGray"
  | "lightGreen"
  | "darkGreen"
  | "brightBlue"
  | "vividPurple"
  | "inherit";

/** Maps font weights to their corresponding Tailwind css classes */
export type FontWeight = "regular" | "medium" | "bold";

/** Maps each color option to its corresponding Tailwind css text color class */
export const colorClasses: Record<TypoColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  white: "text-white",
  whiteSmoke: "text-whiteSmoke",
  offWhite: "text-offWhite",
  darkGray: "text-darkGray",
  lightGray: "text-lightGray",
  lightGreen: "text-lightGreen",
  darkGreen: "text-darkGreen",
  brightBlue: "text-brightBlue",
  vividPurple: "text-vividPurple",
  inherit: "text-inherit",
};

/** Map each variant to its font size (without weight) */
export const variantClasses: Record<TypoVariant, string> = {
  h1: "text-[60px]",
  h2: "text-[48px]",
  h3: "text-[34px]",
  h4: "text-[24px]",
  headline: "text-[20px]",
  subtitle: "text-[16px]",
  body: "text-[14px]",
  caption: "text-[12px]",
  small: "text-[10px]",
  smallCaps: "text-[8px]",
  inherit: "text-[16px]",
};

/** Map weight prop to Tailwind font classes */
export const weightClasses: Record<FontWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

/** Maps each variant to a default HTML tag */
export const variantToTagMap: Record<
  TypoVariant,
  keyof React.JSX.IntrinsicElements
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  headline: "h5",
  subtitle: "h6",
  body: "p",
  caption: "p",
  small: "p",
  smallCaps: "p",
  inherit: "p",
};

/**  Props for Typography component */
export interface TypographyProps {
  /**
   * Typography variant to control the visual style of the text.
   * Typically affects size, weight, and other styling aspects.
   */
  variant: TypoVariant;
  /**
   * Optional font weight for the text.
   * Overrides the default weight defined by the variant.
   * @default "regular"
   */
  weight?: FontWeight;
  /**
   * The content to render inside the Typography component.
   * Can be a string, number, or any valid React node.
   */
  text: React.ReactNode;
  /**
   * Optional color to apply to the text.
   * Should match one of the predefined color tokens.
   * @default darkGray
   */
  color?: TypoColor;
  /**
   * Optional HTML tag to render as the root element (e.g., 'p', 'span', 'h1').
   * Useful for semantic or structural control.
   */
  component?: keyof React.JSX.IntrinsicElements;
  /** Optional prop to apply underline with the same color as the text. */
  underline?: boolean;
  /** If true, transforms the text to uppercase. */
  uppercase?: boolean;
  /**
   * Enables text truncation with ellipsis (`...`).
   * When true, text will be shortened based on `ellipsisCount`.
   */
  ellipsis?: boolean;
  /**
   * Maximum number of characters (letters) to display
   * before appending ellipsis (`...`).
   *
   * Works only when `ellipsis` is set to true.
   */
  ellipsisCount?: number;

  /**
   * When enabled, the text color changes based on the value:
   * - Negative values are displayed in red
   * - Positive values are displayed in green
   */
  isNumberTypography?: boolean;

  textShadow?: boolean;
}
