import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@components";
import { ROUTES, SOCIAL_ICON_LINKS } from "@utils/constants";
import { useScreenSize } from "@utils/useScreenSize";
import type { PageHeroProps } from "./PageHero.types";

const PageHero = ({
  bgImage,
  height = "h-full",
  title,
  titleWidth = "full",
  titleVariant = "h2",
}: PageHeroProps) => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      <div className="absolute inset-0 flex items-center">
        <img
          src={bgImage}
          alt="Hero background"
          className={`absolute inset-0 h-full w-full object-cover object-center`}
          loading="lazy"
        />
        {/* Content overlay */}
        <div className="relative z-level-1 px-4 md:px-16 max-w-3xl lg:max-w-5xl">
          <div
            className={`w-full sm:w-${titleWidth} border-b-2 border-lightGray mb-1 md:mb-4`}
          >
            {/* main text */}
            <Typography
              variant={isMobile ? "h3" : titleVariant}
              text={title}
              color="white"
              weight="bold"
              textShadow
            />
          </div>
          <div className="md:tracking-widest">
            <Typography
              variant={isMobile ? "caption" : "headline"}
              weight="bold"
              text="MS Kettle | Storage Tank | Chimney | Baby Boiler"
              color="white"
              textShadow
            />
          </div>

          <div className="mt-2 md:mt-10 flex flex-col sm:flex-row gap-2 sm:gap-4 max-w-sm ">
            <Button
              text="Get Quote"
              iconName="send"
              size="sm"
              onClick={() => navigate(ROUTES.CONTACT)}
            />
            <Button
              text="Whatsapp Us"
              iconName="whatsapp"
              size="sm"
              bgColor="whatsapp-gradient"
              onClick={() => {
                window.open(
                  SOCIAL_ICON_LINKS.WHATSAPP,
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
