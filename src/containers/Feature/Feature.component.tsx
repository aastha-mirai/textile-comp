import { FeatureStat } from "@components";
import { featureStatsCard } from "@mockData";

const Feature = () => {
  return (
    <section
      aria-label="Stats Section"
      className="h-auto flex bg-theme-gradient items-center justify-center gap-2 px-1 xl:gap-0 py-6 flex-wrap"
    >
      {featureStatsCard.map((card, index) => (
        <div key={card.id} className="flex items-center">
          <FeatureStat
            {...card}
            textVariant="headline"
            textVariantForMobile="body"
          />

          {/* Divider except last item */}
          {index !== featureStatsCard.length - 1 && (
            <div className="xl:w-[2px] xl:h-12 xl:bg-white xl:mx-12" />
          )}
        </div>
      ))}
    </section>
  );
};

export default Feature;
