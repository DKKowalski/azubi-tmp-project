import Image from "next/image";

const BestGear = () => {
  return (
    <section className="py-16 max-w-screen-xl mx-auto mt-32 flex flex-row gap-4">
      <div className="w-1/2 flex flex-col gap-4 items-start justify-center">
        <div className="flex flex-col gap-12 items-start justify-center max-w-md">
          <h2 className="text-4xl font-bold uppercase tracking-widest">
            Bringing you the <span className="text-secondary">best</span> audio
            gear
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of
          </p>
        </div>
      </div>
      <div className="relative w-1/2 h-[588px] rounded-lg overflow-hidden">
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
