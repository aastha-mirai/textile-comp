import type { IconName } from "@components";

/** Available size variants for the Button component */
export type ButtonSize = "small" | "medium";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Size of the button */
  size?: ButtonSize;
  /** Text to show inside the button */
  text?: string;
  /** Name of the icon to display in the button */
  iconName?: IconName;
  /** Show loading spinner instead of icon */
  isLoading?: boolean;
}
