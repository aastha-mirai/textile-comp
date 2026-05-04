import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { PageHero } from "@components";
import { ContactUs } from "@containers";

const Contact = () => {
  return (
    <div>
      <PageHero
        height="h-96"
        bgImage={aboutBg}
        titleWidth="3/4"
        title="Request a Quote"
      />
      <ContactUs />
    </div>
  );
};

export default Contact;
