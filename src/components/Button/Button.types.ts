import type { IconName } from "@components";

/** Available size variants for the Button component */
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "full";

/** Available size variants for icon-only buttons */
export type IconBtnSize = "sm" | "md";

/** Available radius variants for the Button component */
export type ButtonRadius = "sm" | "lg";

/** Available color variants for button background and text */
export const buttonColors = {
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
  "whatsapp-gradient": "whatsapp-gradient",
  inherit: "inherit",
} as const;

/** A union type representing all valid theme color names used in the iconColor map */
export type ButtonColor = keyof typeof buttonColors;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Size of the button */
  size?: ButtonSize;
  /** Text to show inside the button */
  text?: string;
  /** Name of the icon to display in the button */
  iconName?: IconName;
  /** Enables shadow effect below the button */
  isShadow?: boolean;
  /** Background color variant of the button. */
  bgColor?: ButtonColor;
  /** Text color variant of the button. */
  textColor?: ButtonColor;
  /** Border radius variant of the button. */
  radius?: ButtonRadius;
}
