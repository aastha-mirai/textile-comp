import serviceBg from "@assets/imgs/service-section-bg-image.webp";
import { PageHero } from "@components";

const Services = () => {
  return (
    <div className="w-full h-screen pt-16 md:pt-28">
      <PageHero
        height="h-96"
        bgImage={serviceBg}
        titleWidth="3/4"
        title="Quality Fabrication You Can Trust"
      />
    </div>
  );
};

export default Services;
