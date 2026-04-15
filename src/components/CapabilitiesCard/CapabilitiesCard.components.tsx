import type { CapabilitiesPropsTypes } from "./CapabilitiesCard.types";
import { Button, Typography } from "@components";

const CapabilitiesCard: React.FC<CapabilitiesPropsTypes> = (props) => {
  const { title, image, des } = props;

  return (
    <div className="flex flex-col md:flex-row md:gap-11 w-full shadow-xl md:w-7xl bg-white border border-offWhite">
      <div className="md:w-md">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-2xl px-4 pt-5">
        <Typography text={title} variant="h3" weight="bold" />
        <div className="p-4">
          <ul className="list-disc px-3 space-y-1">
            {des.map((des, index) => (
              <li key={index}>
                <Typography text={des} variant="subtitle" weight="medium" />
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              onClick={() => {}}
              text="Request Quotation & Manufacturing"
              iconName="arrowUp"
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesCard;
