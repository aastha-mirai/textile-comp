import { Typography, Button, type CardItem } from "@components";

const ProductCard: React.FC<CardItem> = (props) => {
  const { title, image } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <button 
      onClick={() => {}}
      className="flex  gap-4 px-2 pb-6 justify-between overflow"
    >
      <div className="w-xs h-[403px] text-center shadow-xl rounded">
        <div className="w-xs h-72">
          <img
            src={image}
            alt={title} 
            className="w-full h-full object-cover border-b  border-lightGray"
          />
        </div>
        <div>
          <div className="mt-2 mb-2 text-center">
            <Typography variant="headline" text={title} weight="medium" />
          </div>

          <div>
            <Button
              onClick={handleClick}
              text="VIEW DETAILS"
              iconName="arrowUp"
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
