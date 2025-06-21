import Link from "next/link";
import Image from "next/image";

const FeaturedProductYX1 = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-row gap-4 h-[320px] mt-16">
      <div className="relative w-1/2 rounded-lg overflow-hidden">
        <Image
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          alt="earphones"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-1/2 bg-[#f1f1f1] rounded-lg p-16 space-y-8 flex flex-col items-start justify-center">
        <h2 className="text-4xl font-bold uppercase tracking-widest">
          YX1 Earphones
        </h2>
        <Link
          className="uppercase font-bold text-sm tracking-widest border border-[#0e0e0e] px-4 py-3 text-[#0e0e0e]"
          href="/product/yx1-earphones"
        >
          See Product
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProductYX1;
