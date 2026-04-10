import React from "react";

import { type IconProps, iconColor } from "./Icon.types";
import { icons } from "./SvgIcons";

/**
 * Icon Component
 *
 * Renders SVG icon
 * Can be used to display any svg icon from the icon gallery throughout the app with consistent styling.
 *
 * Props:
 * @param {IconName} icon Name of the icon to be displayed (only predefined icons permitted)/s
 * @param {number} size Size of the icon in pixels (supports 16 | 20 | 24 | 48 | 68). Defaults to 20
 * @param {string} color Color of the icon (fill/stroke). Defaults to design system color
 * @param {function} onClick If provided, icon becomes clickable and renders as a <button>
 * @param {boolean} cursorPointer Enables pointer cursor styling when true. Defaults to true.
 *
 * @example
 *  <Icon icon='view' size={24} color="smokyBlack" onClick={()=> console.log("clicked")} />
 */
const Icon: React.FC<IconProps> = (props) => {
  // Destructure props with default values for size and color
  const {
    icon,
    size = 20,
    color = "darkGray",
    onClick,
    cursorPointer = false,
    className,
  } = props;

  // Retrieve the icon rendering function based on the provided icon name
  const renderIcon = icons[icon];

  // Look up the corresponding CSS variable for the given theme color name
  const themeColorVar = iconColor[color];

  // Use <button> if clickable, otherwise <span>
  const Tag = onClick ? "button" : "span";

  const commonProps = {
    onClick,
    className,
    style: {
      display: "inline-block",
      color: `var(${themeColorVar})`,
      background: "none",
      border: "none",
      padding: 0,
      cursor: onClick || cursorPointer ? "pointer" : "default",
    },
    ...(onClick ? { type: "button" } : {}),
  };
  return React.createElement(Tag, commonProps, renderIcon(size));
};

export default Icon;
