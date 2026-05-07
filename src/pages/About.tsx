import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { PageHero, SectionBanner } from "@components";
import {
  AboutUs,
  CapabilitiesSection,
  Feature,
  ProjectGallery,
} from "@containers";

const About = () => {
  return (
    <div>
      <PageHero
        height="h-96"
        bgImage={aboutBg}
        titleWidth="3/4"
        title="Quality Products We Offer"
      />
      <Feature />
      <AboutUs />
      <CapabilitiesSection />
      <SectionBanner />
      <ProjectGallery />
    </div>
  );
};

export default About;
