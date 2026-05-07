import { Button, Typography, type CapabilitiesPropsTypes } from "@components";
import { useScreenSize } from "@utils/useScreenSize";

const CapabilitiesCard: React.FC<CapabilitiesPropsTypes> = (props) => {
  const { title, image, desc, buttonText, onClick } = props;
  const { isMobile } = useScreenSize();

  return (
    <div className="flex flex-col md:flex-row shadow-xl items-center gap-4 md:gap-8 lg:gap-11 w-full md:w-3xl lg:w-5xl xl:w-7xl mx-auto overflow-hidden border border-offWhite">
      <div className="w-full md:w-md">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
      </div>
      <div className="flex flex-col justify-between w-full md:w-3xl mb-5 md:mb-12 md:mt-7 px-3">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          weight="bold"
          text={title}
        />

        <div className="w-full ml-3 mt-4">
          <ul className="list-disc px-4 space-y-3 md:space-y-0">
            {desc.map((des, index) => (
              <li key={index}>
                <Typography
                  text={des}
                  variant={isMobile ? "caption" : "subtitle"}
                  weight="medium"
                  color="darkGray"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 fit">
          <Button
            onClick={onClick}
            text={buttonText}
            iconName="arrowUp"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesCard;
