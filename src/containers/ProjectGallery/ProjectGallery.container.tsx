import { useNavigate } from "react-router-dom";

import { Button, Icon, Typography } from "@components";
import { images } from "@mockData";
import { ROUTES } from "@utils/constants";
import { useScreenSize } from "@utils/useScreenSize";

const ProjectGallery = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
    <section
      aria-label="Our Products Section"
      className="flex flex-col items-center w-full mt-12 mb-10 md:my-16"
    >
      <div className="flex flex-col justify-center items-center gap-5 w-full md:w-3xl text-center">
        <div className="flex items-center gap-2">
          <Icon icon="circleTheme" />
          <Typography
            variant="headline"
            weight="bold"
            text="Our Gallery"
            color="secondary"
          />
        </div>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          weight="bold"
          text="Our Work & Project Gallery"
          color="secondary"
        />
        <div className="w-4/5">
          <Typography
            variant={isMobile ? "caption" : "subtitle"}
            text="Explore our gallery showcasing high-quality fabrication work, industrial equipment, and successfully completed projects."
            color="lightGray"
          />
        </div>
      </div>
      <div className="flex md:flex-wrap overflow-x-auto md:overflow-visible items-center md:justify-center w-auto mx-1 md:mx-0 gap-3 my-8">
        {images.slice(0, 7).map((img, index) => (
          <div key={index} className="h-84 flex-shrink-0">
            <img
              src={img}
              className="h-full w-auto object-cover"
              alt={`product-image-${index}`}
            />
          </div>
        ))}
      </div>
      <div>
        <Button
          text="See All Products"
          bgColor="secondary"
          iconName="arrowRight"
          radius="lg"
          onClick={() => navigate(ROUTES.PHOTOS)}
        />
      </div>
    </section>
  );
};

export default ProjectGallery;
