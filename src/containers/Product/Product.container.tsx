import { Button, Icon, Typography } from "@components";
import { useScreenSize } from "@utils/useScreenSize";

const Product = () => {
  const { isMobile } = useScreenSize();
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
            text="Our Products"
            color="secondary"
          />
        </div>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          weight="bold"
          text="Premium Industrial Product Range"
          color="secondary"
        />
        <div className="w-4/5">
          <Typography
            variant={isMobile ? "caption" : "subtitle"}
            text="Our products deliver durable, high-performance industrial solutions with precision engineering and reliable quality."
            color="lightGray"
          />
        </div>
      </div>
      <div className="flex border border-red-800 h-[400px] flex-col items-center w-full mt-12 mb-10 md:my-8 mx-auto"></div>
      <div>
        <Button
          text="See All Products"
          bgColor="secondary"
          iconName="arrowRight"
          radius="lg"
        />
      </div>
    </section>
  );
};

export default Product;
