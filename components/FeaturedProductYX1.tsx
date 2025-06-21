import Link from "next/link";

const FeaturedProductYX1 = () => {
  return (
    <section className="max-w-screen-xl mx-4 md:mx-auto flex flex-col md:flex-row gap-6 mt-12">
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden h-52 md:h-80">
        <picture className="w-full h-full">
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="w-full md:w-1/2 bg-light-gray rounded-lg p-6 md:p-12 lg:p-24 flex flex-col items-start justify-center h-52 md:h-80">
        <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">
          YX1 Earphones
        </h2>
        <Link
          className="uppercase font-bold text-sm tracking-widest border border-black px-8 py-4 text-black hover:bg-black hover:text-white transition-colors duration-300"
          href="/product/yx1-earphones"
        >
          See Product
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProductYX1;
