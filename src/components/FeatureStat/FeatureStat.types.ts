import type { IconName, TypoVariant } from "@components";

export interface FeatureStatsCardData {
  id: number;
  icon: IconName;
  text: string;
  textVariant?: TypoVariant;
  textVariantForMobile?: TypoVariant;
}
