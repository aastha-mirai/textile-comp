import type { IconColor, IconName, IconSize } from "@components";

/** Represents a single social link configuration */
export interface SocialLink {
  /** Destination URL (e.g., social profile, tel:) */
  to: string;
  /** Icon name to represent the social platform */
  icon: IconName;
}

/** Props for the SocialIcons component */
export interface SocialIconsProps {
  /** Click handler for social icon interaction */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** Size of the social icons */
  size: IconSize;
  /** Color variant of the icons */
  color?: IconColor;
  /** Additional custom class names */
  className?: string;
}
