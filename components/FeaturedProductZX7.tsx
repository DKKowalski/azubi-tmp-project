import Link from "next/link";

const FeaturedProductZX7 = () => {
  return (
    <section className="relative max-w-screen-xl mx-4 md:mx-auto h-[320px] mt-12 rounded-lg overflow-hidden">
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
          />
          <img
            src="/assets/home/mobile/image-speaker-zx7.jpg"
            alt="ZX7 Speaker"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="relative z-10 h-full flex flex-col gap-8 items-start justify-center px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">
          ZX7 Speaker
        </h2>
        <Link
          className="uppercase font-bold text-sm tracking-widest border border-black px-8 py-4 text-black hover:bg-black hover:text-white"
          href="/product/zx7-speaker"
        >
          See Product
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProductZX7;
