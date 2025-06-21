import React from "react";

import ProductCard from "@/components/ProductCard";

const SpeakersPage = () => {
  return (
    <>
      <div className="bg-[#0e0e0e] -mt-16">
        <h1 className="text-white text-4xl text-center font-bold uppercase tracking-widest py-16 border-t border-white/10 max-w-screen-xl mx-auto">
          Speakers
        </h1>
      </div>
      <section className="max-w-screen-xl mx-auto py-16 space-y-32">
        <ProductCard
          imageSrc="/assets/product-zx9-speaker/desktop/image-product.jpg"
          altText="ZX9 Speaker"
          isNew={true}
          name="ZX9 Speaker"
          description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          productLink="/product/zx9-speaker"
          reverseLayout={false}
        />
        <ProductCard
          imageSrc="/assets/product-zx7-speaker/desktop/image-product.jpg"
          altText="ZX7 Speaker"
          isNew={false}
          name="ZX7 Speaker"
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          productLink="/product/zx7-speaker"
          reverseLayout={true}
        />
      </section>
    </>
  );
};

export default SpeakersPage;
