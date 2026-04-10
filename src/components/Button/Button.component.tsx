import { Icon, Typography } from "@components";
import type { ButtonProps, ButtonSize } from "./Button.types";

const sizeClasses: Record<ButtonSize, string> = {
  small: "p-2",
  medium: "px-5 py-4",
};

const iconOnlySizeClasses: Record<ButtonSize, string> = {
  small: "p-2",
  medium: "p-4",
};

/**
 * Button Component
 *
 * A flexible and reusable button component that supports:
 * - Text and icon combinations and Customizable icons.
 * - Disabled state
 *
 * Props:
 * @param {ButtonSize} Controls the padding and size of the button.
 * @param {string} Optional text content displayed in the button.
 * @param {boolean} Whether the button is disabled.
 * @param {IconName} Optional icon to display.
 * @param {function} Callback function triggered on button click.
 * @param {boolean} shown loader and disable button if true.
 *
 * @example
 * <Button text="Submit" size="medium" iconName="check" isLoading={true} />
 * <Button iconName="edit" size="small" disabled />
 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = "medium",
    text,
    disabled = false,
    iconName,
    onClick = () => {},
    isLoading = false,
    ...rest
  } = props;

  const isIconOnly = !text;

  /** Dynamically generate class names based on size, loading state and disabled state. */
  const buttonClasses = `relative inline-flex items-center justify-center gap-2 bg-secondary text-white ${isIconOnly ? "rounded-full" : "rounded-xl"} ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer group button-wave overflow-hidden transition-colors duration-300 hover:shadow-lg hover:text-secondary"} ${isIconOnly ? iconOnlySizeClasses[size] : sizeClasses[size]}`;

  /** Determine icon sizere based on button state */
  const iconSize = isIconOnly ? (size === "medium" ? 24 : 20) : 20;

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? (
        <>
          {text && <Typography variant="subtitle" text={text} />}
          <Icon
            icon="loading"
            color="white"
            className="animate-spin"
            size={iconSize}
          />
        </>
      ) : (
        <>
          {text && <Typography variant="subtitle" text={text} />}

          {iconName && <Icon icon={iconName} size={iconSize} color="inherit" />}
        </>
      )}
    </button>
  );
};

export default Button;
