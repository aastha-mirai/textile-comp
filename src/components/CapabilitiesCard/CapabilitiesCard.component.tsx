import { Button, Typography, type CapabilitiesPropsTypes } from "@components";
import { useScreenSize } from "@utils/useScreenSize";

const CapabilitiesCard: React.FC<CapabilitiesPropsTypes> = (props) => {
  const { title, image, des } = props;
  const { isMobile } = useScreenSize();

  return (

    <div className="flex flex-col md:flex-row shadow-xl gap-4 md:gap-11 w-full md:w-7xl overflow-hidden border border-light-Gray  border-offWhite">
      <div className="w-full md:w-md">
        <img src={image} alt={title} className="w-full h-72 object-cover"/>
      </div>
      <div className="flex flex-col justify-between w-full md:w-3xl mb-4 md:mb-12 md:mt-8 px-3">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          weight="bold"
          text={title}
        />

        <div className="w-full ml-3 mt-4">
          <ul className="list-disc px-4 space-y-4 md:space-y-0">
            {des.map((des, index) => (
              <li key={index}>
                <Typography text={des} variant="subtitle" weight="medium" />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 fit">
          <Button
            onClick={() => {}}
            text="Request Quotation & Manufacturing"
            iconName="arrowUp"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesCard;
