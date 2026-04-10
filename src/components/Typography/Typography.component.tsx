import "@src/index.css";

import {
  type TypographyProps,
  colorClasses,
  variantClasses,
  variantToTagMap,
  weightClasses,
} from "./Typography.types.ts";

/**
 * Typography Component
 *
 * A flexible and reusable text component that supports multiple
 * variants, colors, underline, and optional HTML tag customization.
 *
 * Additional features:
 * - letter-based ellipsis support
 *
 * @param ellipsis Enable letter-based ellipsis
 * @param ellipsisCount Number of letter to show before ellipsis
 * @param variant Typography variant to control the visual style of the text.
 * @param text The content to render inside the Typography component.
 * @param color Optional color to apply to the text.
 * @param weight Optional prop to apply font-weight to the text.
 * @param underline Optional prop to apply underline. If true, applies underline in same color as text.
 * @param component  Optional HTML tag to render as the root element.
 * @returns A styled text element based on the given props.
 *
 * @example
 * <Typography variant='subtitle' text='Demo text for example' color='primary' underline />
 */
const Typography: React.FC<TypographyProps> = (props) => {
  const {
    variant,
    weight = "regular",
    text,
    color = "darkGray",
    component,
    underline = false,
    ellipsis = false,
    ellipsisCount = 15,
    isNumberTypography = false,
    uppercase = false,
    textShadow = false,
  } = props;

  const baseClass = "font-poppins";
  const shadowClass = textShadow ? "text-shadow-lg/60" : "";
  const isNumericValue = typeof text === "number";
  const colorClass =
    isNumberTypography && isNumericValue
      ? text > 0
        ? colorClasses.darkGreen
        : text < 0
          ? colorClasses.primary
          : colorClasses[color]
      : colorClasses[color];
  const underlineClass = underline ? `underline decoration-${color}` : "";

  const weightClass = weightClasses[weight];

  const uppercaseClass = uppercase ? "uppercase" : "";

  const getEllipsisText = () => {
    if (!ellipsis) {
      return text;
    }

    const trimmedText = String(text)?.trim();

    if (trimmedText.length <= ellipsisCount) {
      return trimmedText;
    }

    return `${trimmedText.slice(0, ellipsisCount)}...`;
  };

  /** combine all valid class names */
  const finalClassName = [
    baseClass,
    weightClass,
    variantClasses[variant],
    colorClass,
    underlineClass,
    uppercaseClass,
    shadowClass,
  ]
    .filter(Boolean)
    .join(" ");

  /** Determine which HTML tag to use */
  const Tag = component || variantToTagMap[variant];

  const content = <Tag className={finalClassName}>{getEllipsisText()}</Tag>;

  return content;
};

export default Typography;
