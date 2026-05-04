import type { IconName } from "@components";

export interface ContactInfoProps {
  id: number;
  icon: IconName;
  type: string;
  title: string;
  description: string;
}

export interface SocialIconLink {
  to: string;
  icon: IconName;
}

