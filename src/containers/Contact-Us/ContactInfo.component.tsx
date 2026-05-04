import { Icon, SocialIconPanel, Typography } from "@components";
import { contactInfo } from "@mockData";
import { useScreenSize } from "@utils/useScreenSize";
import bgImage from "@assets/imgs/contact-us-section-bg-image.png";

export const ContactInfo: React.FC = () => {
  const { isMobile } = useScreenSize();

  return (
    <div className="relative rounded-2xl p-4 md:pt-10 md:pl-10 md:pr-14 md:pb-14 text-white flex flex-col justify-between gap-16 rounded-xl overflow-hidden">
      <img
        src={bgImage}
        className="z-n-level-2 overflow-hidden absolute inset-0 w-full h-full object-cover"
      />
      <div>
        <Typography
          variant={isMobile ? "headline" : "h4"}
          text="Share your requirements, and our experts will contact you shortly."
          color="white"
          weight="bold"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-10">
        {contactInfo.map((info) => (
          <div key={info.id} className="flex items-center gap-6">
            <div className="">
              <Icon icon={info.icon} size={24} color="white" />
            </div>
            <div className="flex flex-wrap items-center lg:justify-center gap-2">
              <Typography
                variant={isMobile ? "subtitle" : "body"}
                text={`${info.title}:`}
                color="white"
              />
              <Typography
                variant={isMobile ? "subtitle" : "body"}
                text={info.description}
                color="white"
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <SocialIconPanel size={24} color="vividPurple" className="flex" />
      </div>
    </div>
  );
};
