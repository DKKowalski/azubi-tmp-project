import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CategoryLinks from "@/components/CategoryLinks";
import BestGear from "@/components/BestGear";
import ProductCard from "@/components/ProductCard";

const EarphonesPage = () => {
  return (
    <>
      <header className="bg-[#0e0e0e] py-8 px-6 mb-16">
        <div className="max-w-screen-xl mx-auto ">
          <Navbar />
          <h1 className="text-white text-4xl text-center font-bold uppercase tracking-widest py-16">
            Earphones
          </h1>
        </div>
      </header>
      <main>
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

        <CategoryLinks />

        <BestGear />
      </main>
      <Footer />
    </>
  );
};

export default EarphonesPage;
