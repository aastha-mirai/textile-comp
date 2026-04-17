import heroBg from "@assets/imgs/hero-section-bg-image.webp";
import { PageHero } from "@components";
import { AboutUs } from "@containers";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <PageHero
        height="h-full"
        bgImage={heroBg}
        titleWidth="3/4"
        titleVariant="h1"
        title="MS FABRICATION & INDUSTRIAL EQUIPMENT MANUFACTURER"
      />
      <AboutUs />
    </div>
  );
};

export default HomePage;
