import { Icon, Typography } from "@components";
import type { FeatureStatProps } from "./FeatureStat.types";
import { useScreenSize } from "@utils/useScreenSize";

const FeatureStat: React.FC<FeatureStatProps> = (props) => {
  const {
    id,
    icon,
    text,
    textVariant,
    textVariantForMobile,
    textWeightVariant,
  } = props;
  const { isMobile } = useScreenSize();
  return (
    <div
      key={id}
      className="flex items-center justify-start sm:justify-center gap-2 md:gap-4 min-w-48"
    >
      <Icon icon={icon} size={isMobile ? 24 : 48} color="white" />
      <Typography
        variant={isMobile ? textVariantForMobile : textVariant}
        text={text}
        color="white"
        weight={isMobile ? "bold" : (textWeightVariant ?? "bold")}
      />
    </div>
  );
};

export default FeatureStat;
