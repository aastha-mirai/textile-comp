import { Typography, Button, type ProductCardProps } from "@components";

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { title, image, onClick } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Product-Card"
      onClick={onClick}
      className="flex gap-4 px-2 pb-6 justify-between"
    >
      <div className="w-xs h-100 text-center shadow-xl rounded">
        <div className="h-72">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover border-b border-lightGray"
          />
        </div>
        <div className="my-2 text-center">
          <Typography variant="headline" text={title} weight="medium" />
        </div>
        <Button onClick={onClick} text="VIEW DETAILS" iconName="arrowUp" />
      </div>
    </div>
  );
};

export default ProductCard;
