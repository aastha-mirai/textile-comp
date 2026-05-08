import serviceBg from "@assets/imgs/service-section-bg-image.webp";
import { PageHero } from "@components";
import {
  CapabilitiesSection,
  Feature,
  Product,
  WhyChooseUs,
} from "@containers";

const Services = () => {
  return (
    <div>
      <PageHero
        height="h-96"
        bgImage={serviceBg}
        title="Quality Fabrication You Can Trust"
      />
      <Feature />
      <Product />
      <WhyChooseUs />
      <CapabilitiesSection />
    </div>
  );
};

export default Services;
