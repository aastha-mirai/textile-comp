import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { PageHero } from "@components";

const Contact = () => {
  return (
    <div>
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
