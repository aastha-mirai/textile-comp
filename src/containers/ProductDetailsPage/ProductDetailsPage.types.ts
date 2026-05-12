export type BulletItem = {
  title?: string;
  text: string;
};

export type ProductPageData = {
  heading: string;
  description: string;
  heroImage: string;
  secondaryImage: string;
  tertiaryImage?: string;
  keyFunction: {
    title: string;
    text: string;
  };
  construction: {
    title: string;
    text?: string;
    points: BulletItem[];
  };
  whyChooseUs: {
    title: string;
    points: BulletItem[];
  };
  applications: {
    title: string;
    text: string;
  };
  cta1?: {
    label: string;
    onClick?: () => void;
  };
  cta2?: {
    label: string;
    onClick?: () => void;
  };
  cta3?: {
    label: string;
    onClick?: () => void;
  };
};

export type ProductDetailsPageProps = {
  data: ProductPageData;
};
