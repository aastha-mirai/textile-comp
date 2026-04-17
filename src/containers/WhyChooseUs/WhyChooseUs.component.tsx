import { FeatureStat, Typography } from "@components";
import { whyChooseUsStat } from "@mockData";
import bgImage from "@assets/imgs/why-choose-us-section-bg-image.webp";
import { useScreenSize } from "@utils/useScreenSize";

const WhyChooseUs = () => {
  const { isMobile } = useScreenSize();
  return (
    <section
      aria-label="Why Choose Us Section"
      className="relative flex items-center justify-center flex-wrap md:pt-11 md:pb-19 py-8 md:px-2 px-5"
    >
      <img
        src={bgImage}
        className="z-n-level-2 overflow-hidden absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex flex-col items-center justify-center gap-10 md:gap-16">
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
          {whyChooseUsStat.map((card, index) => (
            <div key={card.id} className="flex items-center">
              <div className="lg:max-w-64">
                <FeatureStat {...card} />
              </div>

              {/* Divider except last item */}
              {index !== whyChooseUsStat.length - 1 && (
                <div className="xl:w-[2px] xl:h-12 xl:bg-white xl:mx-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
