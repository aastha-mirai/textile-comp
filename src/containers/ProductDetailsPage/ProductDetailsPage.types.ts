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
  cta?: {
    label: string;
    href?: string;
  };
};

export type ProductDetailsPageProps = {
  data: ProductPageData;
};
