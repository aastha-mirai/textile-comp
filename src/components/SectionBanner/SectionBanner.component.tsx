import { useScreenSize } from "@utils/useScreenSize";
import { Typography, Button } from "@components";

const SectionBanner: React.FC = () => {
  const { isMobile } = useScreenSize();

  return (
    <section>
      <div className="flex flex-col items-center justify-center bg-secondary gap-6 md:gap-3 pt-6 pb-4 md:p-8 px-10 md:px-0 w-full">
        <Typography
          variant={isMobile ? "headline" : "h4"}
          text="Looking for a reliable fabrication partner? Connect with us today."
          color="white"
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button text="GET QUOTE" iconName="send" />
          <Button
            text="WHATSAPP ENQUIRY"
            iconName="whatsapp"
            bgColor="whatsapp-gradient"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
