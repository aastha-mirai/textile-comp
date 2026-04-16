import { FeatureStat, Typography } from "@components";
import { featureStatsCard } from "@mockData";
import bgImage from "@assets/imgs/why-choose-us-section-bg-image.webp";
import { useScreenSize } from "@utils/useScreenSize";

const WhyChooseUs = () => {
  const { isMobile } = useScreenSize();
  return (
    <section
      aria-label="Stats Section"
      className="relative flex items-center justify-center flex-wrap py-12"
    >
      <img
        src={bgImage}
        className=" z-n-level-2 w-full overflow-hidden absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex flex-col items-center justify-center gap-8">
        {/* title */}
        <Typography
          color="white"
          text="Why Choose Us"
          uppercase
          variant={isMobile ? "h4" : "h3"}
          weight="bold"
        />
        {/* content */}
        <div className="flex flex-wrap justify-center gap-12 w-full">
          {featureStatsCard.map((card, index) => (
            <div key={card.id} className="flex items-center">
              <FeatureStat {...card} />

              {/* Divider except last item */}
              {index !== featureStatsCard.length - 1 && (
                <div className="xl:w-[2px] xl:h-12 xl:bg-darkGray xl:mx-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
