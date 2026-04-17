import serviceBg from "@assets/imgs/service-section-bg-image.webp";
import { PageHero } from "@components";

const Services = () => {
  return (
    <div>
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
