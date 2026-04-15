import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { PageHero } from "@components";

const Contact = () => {
  return (
    <div className="w-full h-screen pt-16 md:pt-28">
      <PageHero
        height="h-96"
        bgImage={aboutBg}
        titleWidth="3/4"
        title="Request a Quote"
      />
    </div>
  );
};

export default Contact;
