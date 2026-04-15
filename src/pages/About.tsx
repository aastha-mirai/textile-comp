import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { PageHero } from "@components";

const About = () => {
  return (
    <div className="w-full h-screen pt-16 md:pt-28">
      <PageHero
        bgImage={aboutBg}
        titleWidth="3/4"
        title="Quality Products We Offer"
      />
    </div>
  );
};

export default About;
