import type { IconName, TypoColor } from "@components";

/** Available size variants for the Button component */
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "full";

/** Available size variants for icon-only buttons */
export type IconBtnSize = "sm" | "md";

/** Available radius variants for the Button component */
export type ButtonRadius = "sm" | "lg";

/** Available color variants for button background and text */
export const buttonColors = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  white: "bg-white",
  offWhite: "bg-offWhite",
  whiteSmoke: "bg-whiteSmoke",
  lightGray: "bg-lightGray",
  darkGray: "bg-darkGray",
  lightGreen: "bg-lightGreen",
  darkGreen: "bg-darkGreen",
  brightBlue: "bg-brightBlue",
  vividPurple: "bg-vividPurple",
  "whatsapp-gradient": "bg-whatsapp-gradient",
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
  textColor?: TypoColor;
  /** Border radius variant of the button. */
  radius?: ButtonRadius;
}
