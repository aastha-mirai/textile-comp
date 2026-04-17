import { Icon, Typography } from "@components";
import type { FeatureStatsCardData } from "./FeatureStat.types";

const FeatureStat: React.FC<FeatureStatsCardData> = (props) => {
  const { id, icon, text } = props;
  return (
    <div key={id} className="flex items-center justify-center gap-4  min-w-48">
      <Icon icon={icon} size={48} color="white" />
      <Typography variant="headline" text={text} color="white" weight="bold" />
    </div>
  );
};

export default FeatureStat;
