import Image from "next/image";

const BestGear = () => {
  return (
    <section className="py-16 max-w-screen-xl mx-auto md:mt-32 flex flex-col md:flex-row gap-4 px-4 mt-8">
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-start justify-center">
        <div className="flex flex-col gap-12 items-start justify-center md:max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center md:text-left">
            Bringing you the <span className="text-secondary">best</span> audio
            gear
          </h2>
          <p className="text-center md:text-left">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of
          </p>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 h-80 md:h-96 lg:h-[588px] rounded-lg overflow-hidden order-first md:order-last">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="best-gear"
          fill
        />
      </div>
    </section>
  );
};

export default BestGear;
