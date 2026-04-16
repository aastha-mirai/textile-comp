import { Icon, Typography } from "@components";
import type {
  ButtonProps,
  ButtonRadius,
  ButtonSize,
  IconBtnSize,
} from "./Button.types";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-3",
  md: "px-11 py-3",
  lg: "px-14 py-2",
  xl: "px-15 py-4",
  full: "py-2 w-full",
};

const iconOnlySizeClasses: Record<IconBtnSize, string> = {
  sm: "p-2",
  md: "p-3",
};

const radiusClasses: Record<ButtonRadius, string> = {
  sm: "rounded-sm",
  lg: "rounded-lg",
};

/**
 * Button Component
 *
 * A flexible and reusable button component that supports:
 * - Text and icon combinations with customizable icons
 * - Icon-only and text button variants
 * - Configurable size, radius, colors, and shadow
 * - Disabled state
 *
 * Props:
 *
 * @param {ButtonSize} size Controls the padding and overall size of the button.
 *
 * @param {string} text Optional text content displayed inside the button.
 *
 * @param {IconName} iconName Optional icon to display inside the button.
 *
 * @param {boolean} isShadow Enables shadow effect below the button.
 *
 * @param {ButtonColor} bgColor Background color variant of the button.
 *
 * @param {ButtonColor} textColor Text color variant of the button.
 *
 * @param {ButtonRadius} radius Controls border radius of the button (e.g. sm, lg).
 *
 * @example
 * <Button text="Submit" size="md" iconName="check" isShadow />
 * <Button iconName="edit" size="sm" />
 * <Button text="Buy Now" size="lg" bgColor="primary" textColor="white" radius="lg" />
 */

const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = "md",
    text,
    disabled = false,
    iconName,
    onClick = () => {},
    isShadow = false,
    bgColor,
    textColor,
    radius = "sm",

    ...rest
  } = props;

  const isIconOnly = !text;

  /** Dynamically generate class names based on size, loading state and disabled state. */
  const buttonClasses = `relative inline-flex items-center justify-center gap-3  bg-${bgColor ?? "theme-gradient"} text-${textColor ?? "white"} ${isIconOnly ? "rounded-full" : radiusClasses[radius ?? "sm"]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${isIconOnly ? iconOnlySizeClasses[size === "sm" || size === "md" ? size : "md"] : sizeClasses[size]} ${isShadow ? "hover:shadow-2xl" : ""}`;

  /** Determine icon size based on button state */
  const iconSize = isIconOnly ? (size === "md" ? 24 : 20) : 24;

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      <>
        {text && <Typography variant="subtitle" text={text} color="inherit" />}
        {iconName && (
          <Icon icon={iconName} size={iconSize} cursorPointer color="inherit" />
        )}
      </>
    </button>
  );
};

export default Button;
