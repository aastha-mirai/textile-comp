import { useNavigate } from "react-router-dom";

import mainImage from "@assets/imgs/hero-section-a-man-working-in-a-factory.webp";
import { Button, Icon, Typography } from "@components";
import { useScreenSize } from "@utils/useScreenSize";
import { ROUTES } from "@utils/constants";
import type { AboutProps } from "./About.types";

const AboutUs: React.FC<AboutProps> = ({ isHomeVariant = false }) => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();
  return (
    <section
      aria-label="About Us Section"
      className="w-full pt-9 pb-8 md:py-18 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 lg:pl-4 justify-items-between items-center">
          {/* text-section */}
          <div className="max-w-5xl flex flex-col justify-between gap-6 lg:mx-auto sm:mx-16 mx-5 order-2 lg:order-1">
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
                  With over 10 years of experience in MS fabrication, we manufacture storage tanks, kettles, filter tanks, process equipment, and custom industrial products tailored to client drawings, BOQ, and technical specifications.
                  <br />
                  <br />
                  Based in Patna City, Bihar, our modern manufacturing facility and skilled team deliver precision-engineered solutions for the chemical, pharmaceutical, food processing, water treatment, engineering, and manufacturing industries. Whether it's a custom fabrication job, bulk order, or large-scale industrial project, we ensure exceptional quality, durability, safety, and performance at every stage.
                  <br />
                  <br />
                  As a GST and MSME-registered company, we are equipped to execute commercial projects and government tenders with strict quality control, competitive pricing, transparent communication, and on-time delivery. Our goal is to provide reliable, cost-effective manufacturing solutions that build lasting partnerships with our clients.
                  </>
              }
              color="lightGray"
            />
            {isHomeVariant && (
              <div className="w-auto">
                <Button
                  text="Learn More"
                  iconName="arrowRight"
                  size="sm"
                  bgColor="primary"
                  isShadow
                  onClick={() => navigate(ROUTES.ABOUT)}
                />
              </div>
            )}
          </div>
          {/* img-section */}
          <div className="flex justify-center max-h-96 mx-4 lg:m-auto order-1 lg:order-2">
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
