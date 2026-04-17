import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { PageHero } from "@components";
import { AboutUs } from "@containers";

const About = () => {
  return (
    <div>
      <PageHero
        height="h-96"
        bgImage={aboutBg}
        titleWidth="3/4"
        title="Quality Products We Offer"
      />
      <AboutUs />
    </div>
  );
};

export default About;
