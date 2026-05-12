import { Icon } from "@components";
import { SOCIAL_ICON_LINKS } from "@utils/constants";
import type { SocialIconsProps, SocialLink } from "./SocialIconPanel.types";
import { generateUUID } from "@utils/generateUUID";

const social_icon_links: SocialLink[] = [
  { to: SOCIAL_ICON_LINKS.FACEBOOK, icon: "facebook" },
  { to: SOCIAL_ICON_LINKS.LINKEDIN, icon: "linkedin" },
  { to: SOCIAL_ICON_LINKS.INSTAGRAM, icon: "twitter" },
  { to: SOCIAL_ICON_LINKS.YOUTUBE, icon: "youtube" },
];

const SocialIconPanel: React.FC<SocialIconsProps> = ({
  size = 24,
  color = "white",
  className = "",
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {social_icon_links.map((social) => (
        <a
          key={generateUUID()}
          href={social.to}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={social.icon} size={size} color={color} cursorPointer />
        </a>
      ))}
    </div>
  );
};

export default SocialIconPanel;
