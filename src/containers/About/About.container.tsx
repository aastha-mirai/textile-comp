import { useNavigate } from "react-router-dom";

import mainImage from "@assets/imgs/hero-section-a-man-working-in-a-factory.webp";
import { Button, Icon, Typography } from "@components";
import { useScreenSize } from "@utils/useScreenSize";
import { ROUTES } from "@utils/constants";

const AboutUs = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  return (
    <section
      aria-label="About Us Section"
      className="w-full py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-1 lg:pl-4 justify-items-between items-center">
          {/* text-section */}
          <div className="max-w-5xl flex flex-col justify-between gap-6 lg:mx-auto sm:mx-16 mx-4">
            <div className="flex gap-2 items-center">
              <Icon icon="circleTheme" />
              <Typography
                variant="headline"
                text="About us"
                weight="bold"
                color="secondary"
              />
            </div>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              text="Precision-Driven Industrial Manufacturing You Can Trust"
              weight="bold"
              color="secondary"
            />
            <Typography
              variant={isMobile ? "caption" : "subtitle"}
              text={
                <>
                  With 10+ years of experience in MS fabrication, we deliver
                  high-quality storage tanks, kettles, filter tanks, and
                  industrial equipment.Our modern facility in Kachnar, Uttar
                  Pradesh, and skilled team ensure precision and reliability in
                  every project.
                  <br />
                  <br />
                  We specialize in custom fabrication as per drawings and BOQ,
                  catering to diverse industrial requirements. GST & MSME
                  registered, we handle bulk orders and tender projects with a
                  strong commitment to timely delivery.
                </>
              }
              color="lightGray"
            />
            <div className="w-auto">
              <Button
                text="Learn More"
                iconName="arrowRight"
                size="md"
                bgColor="primary"
                isShadow
                onClick={() => navigate(ROUTES.ABOUT)}
              />
            </div>
          </div>
          {/* img-section */}
          <div className="flex justify-center max-h-96 mx-4 lg:m-auto">
            <div className="shadow-lg rounded-tl-[50px] rounded-br-[50px] overflow-hidden">
              <img
                src={mainImage}
                alt="a man working in a factory"
                className="object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
