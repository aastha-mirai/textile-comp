import heroBg from "@assets/imgs/hero-section-bg-image.webp";
import { PageHero } from "@components";
import {
  AboutUs,
  Feature,
  Footer,
  Product,
  ProjectGallery,
  WhyChooseUs,
} from "@containers";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <PageHero
        height="h-[640px]"
        bgImage={heroBg}
        titleWidth="3/4"
        titleVariant="h1"
        title="High-Quality MS Fabrication & Industrial Equipment Solutions"
      />
      <AboutUs />
      <Feature />
      <Product />
      <WhyChooseUs />
      <ProjectGallery />
      <Footer />
    </div>
  );
};

export default HomePage;
