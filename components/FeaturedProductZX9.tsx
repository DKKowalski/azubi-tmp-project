import Link from "next/link";

const FeaturedProductZX9 = () => {
  return (
    <section className="max-w-screen-xl md:mx-auto bg-secondary rounded-lg text-white mt-32 overflow-hidden bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-cover lg:bg-auto mx-4">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around p-8 lg:p-0 lg:pt-24 gap-8 lg:gap-36 text-center lg:text-left">
        <div className="relative w-full md:w-1/2 lg:w-1/3 flex justify-center lg:self-end">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/home/desktop/image-speaker-zx9.png"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/home/tablet/image-speaker-zx9.png"
            />
            <img
              src="/assets/home/mobile/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              className="w-48 md:w-56 lg:w-[410px] lg:h-auto"
            />
          </picture>
        </div>
        <div className="flex flex-col gap-6 items-center lg:items-start justify-center w-full lg:w-1/3 pb-8 lg:pb-0">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest">
            ZX9 Speaker
          </h2>
          <p className="max-w-xs">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            className="uppercase font-bold text-sm tracking-widest bg-black px-8 py-4 text-white hover:bg-gray-700"
            href="/product/zx9-speaker"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductZX9;
