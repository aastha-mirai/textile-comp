import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { PageHero, SectionBanner } from "@components";
import {
  AboutUs,
  CapabilitiesSection,
  Feature,
} from "@containers";

const About = () => {
  return (
    <div>
      <PageHero
        height="h-96"
        bgImage={aboutBg}
        title="Quality Products We Offer"
      />
      <Feature />
      <AboutUs />
      <CapabilitiesSection />
      <SectionBanner />
    </div>
  );
};

export default About;
