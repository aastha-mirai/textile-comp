import { Typography, Button, type CardItem } from "@components";

const ProductCard: React.FC<CardItem> = (props) => {
  const { title, image } = props;

  return (
    <div className="flex overflow-x-auto gap-4 px-2 pb-6 justify-between">
      <div className="w-xs h-[403px] text-center shadow-xl rounded">
        <div className="w-xs h-72">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover border-b  border-lightGray"
          />
        </div>
        <div>
          <div className="mt-2 mb-2 text-center">
            <Typography variant="headline" text={title} weight="medium" />
          </div>

          <div>
            <Button text="VIEW DETAILS" iconName="arrowUp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
