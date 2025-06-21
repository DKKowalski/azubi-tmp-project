import Link from "next/link";

const FeaturedProductZX7 = () => {
  return (
    <section className="py-16 max-w-screen-xl mx-auto bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat h-[320px] mt-16 rounded-lg px-16 flex flex-col gap-4 items-start justify-center">
      <h2 className="text-4xl font-bold uppercase tracking-widest">
        ZX7 Speaker
      </h2>
      <Link
        className="uppercase font-bold text-sm tracking-widest border border-black px-4 py-3 text-black"
        href="/product/zx7-speaker"
      >
        See Product
      </Link>
    </section>
  );
};

export default FeaturedProductZX7;
