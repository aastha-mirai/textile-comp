import type { IconName } from "components/Icon";

export interface AddressInfoProps {
  id: number;
  icon: IconName;
  type: string;
  description: string;
}

export interface ContactInfoProps {
  id: number;
  icon: IconName;
  limit?: number;
  type: string;
  title: string;
  description: string;
}

export interface ContactDataProps {
  limit?: number;
}
