import React from "react";

import ProductCard from "@/components/ProductCard";

const headphonesData = [
  {
    imageSrc:
      "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    altText: "XX99 Mark II Headphones",
    isNew: true,
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    productLink: "/product/xx99-mark-two-headphones",
    reverseLayout: false,
  },
  {
    imageSrc:
      "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
    altText: "XX99 Mark I Headphones",
    isNew: false,
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    productLink: "/product/xx99-mark-one-headphones",
    reverseLayout: true,
  },
  {
    imageSrc: "/assets/product-xx59-headphones/desktop/image-product.jpg",
    altText: "XX59 Headphones",
    isNew: false,
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    productLink: "/product/xx59-headphones",
    reverseLayout: false,
  },
];

const HeadphonesPage = () => {
  return (
    <>
      <div className="bg-[#0e0e0e] -mt-16">
        <h1 className="text-white text-4xl text-center font-bold uppercase tracking-widest py-16 border-t border-white/10 max-w-screen-xl mx-auto">
          Headphones
        </h1>
      </div>
      <section className="max-w-screen-xl mx-auto py-16 space-y-32">
        {headphonesData.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            altText={product.altText}
            isNew={product.isNew}
            name={product.name}
            description={product.description}
            productLink={product.productLink}
            reverseLayout={product.reverseLayout}
          />
        ))}
      </section>
    </>
  );
};

export default HeadphonesPage;
