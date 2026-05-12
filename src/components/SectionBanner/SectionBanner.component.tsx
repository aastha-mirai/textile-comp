import { useScreenSize } from "@utils/useScreenSize";
import { Typography, Button } from "@components";
import { ROUTES, SOCIAL_ICON_LINKS } from "@utils/constants";
import { useNavigate } from "react-router-dom";

const SectionBanner: React.FC = () => {
  const { isMobile } = useScreenSize();
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex flex-col items-center justify-center bg-secondary gap-6 md:gap-3 pt-6 pb-4 md:p-8 px-10 md:px-0 w-full text-center">
        <Typography
          variant={isMobile ? "headline" : "h4"}
          text="Looking for a reliable fabrication partner? Connect with us today."
          color="white"
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            text="GET QUOTE"
            iconName="send"
            onClick={() => navigate(ROUTES.CONTACT)}
          />
          <Button
            text="WHATSAPP ENQUIRY"
            iconName="whatsapp"
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
    </section>
  );
};

export default SectionBanner;
