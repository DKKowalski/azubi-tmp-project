import React from "react";

import ProductCard from "@/components/ProductCard";

const EarphonesPage = () => {
  return (
    <>
      <div className="bg-[#0e0e0e] -mt-16">
        <h1 className="text-white text-4xl text-center font-bold uppercase tracking-widest py-16 border-t border-white/10 max-w-screen-xl mx-auto">
          Earphones
        </h1>
      </div>
      <section className="max-w-screen-xl mx-auto py-16 space-y-32">
        <ProductCard
          imageSrc="/assets/product-yx1-earphones/desktop/image-product.jpg"
          altText="YX1 Earphones"
          isNew={true}
          name="YX1 Earphones"
          description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          productLink="/product/yx1-earphones"
          reverseLayout={false}
        />
      </section>
    </>
  );
};

export default EarphonesPage;
