import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { PageHero } from "@components";
import { ContactUs, Feature } from "@containers";

const Contact = () => {
  return (
    <div>
      <PageHero
        height="h-96"
        bgImage={aboutBg}
        title="Request a Quote"
      />
      <Feature />
      <ContactUs />
    </div>
  );
};

export default Contact;
