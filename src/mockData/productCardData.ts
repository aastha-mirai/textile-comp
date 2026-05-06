import type { ProductCardProps } from "@components";
import img1 from "@assets/imgs/product-1-resin-kettle.webp";
import img2 from "@assets/imgs/product-2-storage-tank.webp";
import img3 from "@assets/imgs/product-3-shutter-plate.webp";
import img4 from "@assets/imgs/product-4-chimney.webp";
import img5 from "@assets/imgs/product-5-hopper.webp";
import img6 from "@assets/imgs/product-6-height-gauge.webp";
import img7 from "@assets/imgs/product-7-fabrication.webp";

export const productCardData: ProductCardProps[] = [
  {
    id: "glue-kettle",
    title: "Resin Kettle MS/HS",
    image: img1,
    onClick: () => {},
  },
  {
    id: "storage-tank",
    title: "Chemical Storage Tank",
    image: img2,
    onClick: () => {},
  },
  {
    id: "ms-shuttering-plate",
    title: "MS Shuttering Plate",
    image: img3,
    onClick: () => {},
  },
  {
    id: "ms-chimney-fabrication",
    title: "MS CHIMNEY FABRICATION",
    image: img4,
    onClick: () => {},
  },
  {
    id: "linear",
    title: "Linear",
    image: img5,
    onClick: () => {},
  },
  {
    id: "hopper",
    title: "Hopper",
    image: img6,
    onClick: () => {},
  },
  {
    id: "height-gauge",
    title: "Height Gauge",
    image: img7,
    onClick: () => {},
  },
  {
    id: "fabrication",
    title: "FABRICATION as per design",
    image: img4,
    onClick: () => {},
  },
];
