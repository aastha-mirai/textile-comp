import heroBg from "@assets/imgs/hero-section-bg-image.webp";
import { PageHero } from "@components";

const HomePage = () => {
  return (
    <div className="w-full h-screen pt-16 md:pt-28">
      <PageHero
        height="h-full"
        bgImage={heroBg}
        titleWidth="3/4"
        titleVariant="h1"
        title="MS FABRICATION & INDUSTRIAL EQUIPMENT MANUFACTURER"
      />
    </div>
  );
};

export default HomePage;
