import { PageHero } from "@components";
import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { Feature } from "@containers";
import { galleryImages } from "@utils/galleryImages";

const Photos = () => {
  return (
    <>
      <PageHero
        height="h-96"
        bgImage={aboutBg}
        titleWidth="3/4"
        title="Explore Our Gallery"
      />
      <Feature />
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 p-4 md:p-10 lg:p-15">
        {galleryImages.map((img, index) => (
          <div key={index} className="mb-4 break-inside-avoid overflow-hidden">
            <img
              src={img}
              alt=""
              className={`w-full  object-cover hover:scale-105 transition duration-300`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Photos;
