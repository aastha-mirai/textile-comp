import type { icons } from "./SvgIcons";

// IconName is a union type of all valid icon names available in the `icons` object. This ensures type-safe usage of icon names throughout the app.
export type IconName = keyof typeof icons;

// IconSize defines the supported icon sizes in pixels.
export type IconSize = 16 | 20 | 24 | 48 | 68 | 128;

// Mapping of TypoColor names to CSS variable tokens
export const iconColor = {
  primary: "--color-primary",
  secondary: "--color-secondary",
  white: "--color-white",
  offWhite: "--color-offWhite",
  whiteSmoke: "--color-whiteSmoke",
  lightGray: "--color-lightGray",
  darkGray: "--color-darkGray",
  lightGreen: "--color-lightGreen",
  darkGreen: "--color-darkGreen",
  brightBlue: "--color-brightBlue",
  vividPurple: "--color-vividPurple",
  inherit: "inherit",
} as const;

/** A union type representing all valid theme color names used in the iconColor map */
export type IconColor = keyof typeof iconColor;

/** Props associated with Icon Component */
export interface IconProps {
  /** The name of the Icon to be rendered */
  icon: IconName;
  /** Optional size of the icon (in px). Defaults to 20 */
  size?: IconSize;
  /** Optional fill or stroke color. Defaults to icon's native color */
  color?: IconColor;
  /** Optional click handler for the icon  */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** Optional. Enables pointer cursor styling (default: true). */
  cursorPointer?: boolean;
  /** Optional Tailwind or custom class */
  className?: string;
}
