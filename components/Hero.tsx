import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-[#0e0e0e] text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/home/desktop/image-hero.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/home/tablet/image-header.jpg"
            />
            <img
              src="/assets/home/mobile/image-header.jpg"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 pt-28 pb-36">
          <h1 className="text-lg uppercase tracking-[10px] mb-4 text-white/50">
            New Product
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
            XX99 Mark II Headphones
          </h2>
          <p className="mb-10 max-w-md text-white/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            className="uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-4 text-white hover:bg-light-orange"
            href="/product/xx99-mark-two-headphones"
          >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}
