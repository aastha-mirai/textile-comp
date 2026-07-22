import { Typography, Button, type ProductCardProps } from "@components";

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { title, image, onClick } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Product-Card"
      onClick={onClick}
      className="flex gap-4 justify-between w-xs min-h-100 cursor-pointer"
    >
      <div className="flex flex-col text-center shadow-lg rounded-sm overflow-hidden">
        <div className="h-80 border-b border-offWhite pb-1">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain border-b border-offWhite"
          />
        </div>

        <div className="mt-2 mb-3 text-center px-2">
          <Typography
            variant="headline"
            text={title}
            color="secondary"
            weight="medium"
            uppercase
          />
        </div>

        <div className="mt-auto mb-3 w-62 mx-auto">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            text="VIEW DETAILS"
            iconName="arrowUp"
            size="full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
