import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductCard from "@/components/ProductCard";
import CategoryLinks from "@/components/CategoryLinks";
import BestGear from "@/components/BestGear";

const SpeakersPage = () => {
  return (
    <>
      <header className="bg-[#0e0e0e] py-8 px-6 mb-16">
        <div className="max-w-screen-xl mx-auto ">
          <Navbar />
          <h1 className="text-white text-4xl text-center font-bold uppercase tracking-widest py-16">
            Speakers
          </h1>
        </div>
      </header>
      <main>
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

        <CategoryLinks />

        <BestGear />
      </main>
      <Footer />
    </>
  );
};

export default SpeakersPage;
