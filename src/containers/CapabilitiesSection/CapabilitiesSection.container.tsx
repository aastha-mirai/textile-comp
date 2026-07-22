import { CapabilitiesCard, Typography } from "@components";
import { capabilitiesData } from "@mockData";
import { SOCIAL_ICON_LINKS } from "@utils/constants";
import { useScreenSize } from "@utils/useScreenSize";

const CapabilitiesSection = () => {
  const { isMobile } = useScreenSize();
  return (
    <section
      aria-label="Capabilities Section"
      className="h-auto flex flex-col items-center justify-center bg-whiteSmoke py-6 md:py-10 px-5 w-full"
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        text="Our Capabilities"
        weight="bold"
        color="secondary"
      />
      <div className="p-px bg-theme-gradient h-1 md:h-1.5 w-48 mt-3 md:mt-4 rounded-full" />
      <div className="mt-6 md:mt-10 lg:mt-15 flex flex-col items-center justify-center gap-4 md:gap-9">
        {capabilitiesData.map((item) => (
          <CapabilitiesCard
            key={item.id}
            {...item}
            onClick={() => {
              window.open(
                SOCIAL_ICON_LINKS.WHATSAPP,
                "_blank",
                "noopener,noreferrer",
              );
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
