import { useParams } from "react-router-dom";

import { Button, PageHero, Typography } from "@components";
import type { BulletItem, ProductPageData } from "./ProductDetailsPage.types";
import { useScreenSize } from "@utils/useScreenSize";
import {
  chimneyData,
  glueKettleData,
  msHopperData,
  msShutteringPlateData,
  storageTankData,
} from "@mockData";
import aboutBg from "@assets/imgs/about-section-bg-image.webp";
import { Feature, Product } from "@containers";

const productDataMap: Record<string, ProductPageData> = {
  "1": glueKettleData,
  "2": storageTankData,
  "3": msShutteringPlateData,
  "4": chimneyData,
  "5": msHopperData,
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useScreenSize();
  return (
    <Typography
      variant={isMobile ? "headline" : "h4"}
      weight="bold"
      text={children}
    />
  );
};

const BulletList = ({ items }: { items: BulletItem[] }) => {
  const { isMobile } = useScreenSize();

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="flex">
          {item.title ? (
            <div className="flex gap-2">
              <p className="text-sm md:text-base">
                <span className="text-sm md:text-base font-bold">
                  {item.title}
                  {": "}
                </span>
                {item.text}
              </p>
            </div>
          ) : (
            <Typography
              variant={isMobile ? "body" : "subtitle"}
              text={item.text}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { isMobile } = useScreenSize();

  const product = productDataMap[productId!];

  if (!product) {
    return <div>Product not found</div>;
  }
  const hasTertiaryImage = Boolean(product.tertiaryImage);

  return (
    <>
      <PageHero
        bgImage={aboutBg}
        titleVariant="h1"
        title={product.heading.split("/")[0].trim()}
      />
      <Feature />
      <div className="bg-whiteSmoke">
        <div className="px-5 py-6 sm:px-6 lg:px-16 lg:pt-11 lg:pb-10 max-w-7xl mx-auto">
          <div className="mx-auto overflow-hidden gap-11 flex flex-col">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
              {/* Left content */}
              <div className="lg:col-span-8 flex flex-col justify-between gap-8">
                <div className="flex gap-5 flex-col">
                  <Typography
                    variant={isMobile ? "h4" : "h3"}
                    text={product.heading}
                    weight="bold"
                    color="darkGray"
                  />
                  <Typography
                    variant={isMobile ? "body" : "headline"}
                    text={product.description}
                    color="darkGray"
                  />
                </div>

                {/* Key function */}
                <div className="flex gap-5 flex-col">
                  <Typography
                    variant={isMobile ? "headline" : "h4"}
                    text={product.keyFunction.title}
                    weight="bold"
                    color="darkGray"
                  />
                  <Typography
                    variant={isMobile ? "body" : "headline"}
                    text={product.keyFunction.text}
                    color="darkGray"
                  />
                </div>
              </div>
              {/* Right image */}
              <div className="lg:col-span-4 flex flex-col items-center gap-6">
                <div className="overflow-hidden">
                  <img
                    src={product.heroImage}
                    alt={product.heading}
                    className="h-56 w-full object-contain sm:h-64 lg:h-[28rem]"
                  />
                </div>

                {product.cta1?.label ? (
                  <Button text={product.cta1.label} />
                ) : null}
              </div>
            </div>

            {/* Middle grid */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 place-items-center">
              <div className="order-2 xl:order-1 lg:col-span-5 flex flex-col items-center gap-6">
                <div className="overflow-hidden">
                  <img
                    src={product.secondaryImage}
                    alt={`${product.heading} detail`}
                    className="h-72 w-full object-contain sm:h-80 lg:h-[28rem]"
                  />
                </div>
                {product.cta2?.label ? (
                  <Button text={product.cta2.label} />
                ) : null}
              </div>

              <div className="order-1 xl:order-2 lg:col-span-7 gap-5 flex flex-col">
                <Typography
                  variant={isMobile ? "headline" : "h4"}
                  text={product.construction.title}
                  weight="bold"
                  color="darkGray"
                />

                <Typography
                  variant={isMobile ? "caption" : "subtitle"}
                  text={product.construction.text}
                  color="darkGray"
                />
                <div className="mt-6">
                  <BulletList items={product.construction.points} />
                </div>
              </div>
            </div>

            {/* Bottom sections */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 place-items-center">
              {hasTertiaryImage && (
                <div className="order-1 xl:order-2 lg:col-span-5 flex flex-col items-center gap-6">
                  <div className="overflow-hidden">
                    <img
                      src={product.tertiaryImage}
                      alt={`${product.heading} detail`}
                      className="h-72 w-full object-contain sm:h-80 lg:h-[28rem]"
                    />
                  </div>
                  {product.cta3?.label ? (
                    <Button text={product.cta3.label} />
                  ) : null}
                </div>
              )}
              <div
                className={`order-2 xl:order-1 gap-11 md:gap-19 flex flex-col ${hasTertiaryImage ? "lg:col-span-7" : "lg:col-span-12"}`}
              >
                <section>
                  <SectionTitle>{product.whyChooseUs.title}</SectionTitle>
                  <div className="mt-5">
                    <BulletList items={product.whyChooseUs.points} />
                  </div>
                </section>
                <section>
                  <SectionTitle>{product.applications.title}</SectionTitle>
                  <div className="mt-6">
                    <Typography
                      variant={isMobile ? "body" : "subtitle"}
                      text={product.applications.text}
                      color="darkGray"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
    </>
  );
};

export default ProductDetailsPage;
