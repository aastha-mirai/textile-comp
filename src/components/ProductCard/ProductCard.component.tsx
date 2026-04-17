import { Typography, Button, type ProductCardProps } from "@components";

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { title, image, onClick } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Product-Card"
      onClick={onClick}
      className="flex gap-4 justify-between w-xs min-h-100"
    >
      <div className="flex flex-col text-center shadow-lg rounded-sm overflow-hidden">
        <div className="max-h-80 min-h-72 border-b border-lightGray">
          <img src={image} alt={title} className="w-full h-full object-cover"/>
        </div>

        <div className="mt-2 mb-3 text-center px-2">
          <Typography variant="headline" text={title} weight="medium"/>
        </div>

        <div className="mt-auto mb-3 w-62 mx-auto">
          <Button onClick={onClick} text="VIEW DETAILS" iconName="arrowUp" size="full"/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
