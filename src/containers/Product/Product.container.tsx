import { useNavigate } from "react-router-dom";

import { Button, Icon, ProductCard, Typography } from "@components";
import { productCardData } from "@mockData";
import { ROUTES } from "@utils/constants";
import { useScreenSize } from "@utils/useScreenSize";

const Product = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    console.log(id);
    navigate(`/product/${id}`);
  };
  return (
    <section
      aria-label="Our Products Section"
      className="flex flex-col items-center w-full mt-12 mb-10 md:my-16"
    >
      <div className="flex flex-col justify-center items-center gap-5 w-full md:w-3xl text-center px-5">
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
        <div className="md:w-4/5">
          <Typography
            variant={isMobile ? "caption" : "subtitle"}
            text="Our products deliver durable, high-performance industrial solutions with precision engineering and reliable quality."
            color="lightGray"
          />
        </div>
      </div>
      <div className="flex overflow-x-auto whitespace-nowrap no-scrollbar md:justify-center items-center w-full mt-10 mb-2 md:my-5 mx-auto gap-6 px-5 py-3">
        {productCardData.slice(0, 4).map(({ id, ...cardProps }) => (
          <div key={id} className="flex-shrink-0">
            <ProductCard
              id={id}
              {...cardProps}
              onClick={() => handleProductClick(id)}
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
          onClick={() => navigate(ROUTES.SERVICES)}
        />
      </div>
    </section>
  );
};

export default Product;
