import Link from "next/link";
import Image from "next/image";

const FeaturedProductZX9 = () => {
  return (
    <section className=" max-w-screen-xl mx-auto overflow-hidden bg-secondary flex items-center justify-around  rounded-lg text-white bg-no-repeat  bg-[url('/assets/home/desktop/pattern-circles.svg')] p-32 h-[560px] mt-32">
      <div className="relative w-2/3 h-full ">
        <Image
          src="/assets/home/desktop/image-speaker-zx9.png"
          alt="speaker"
          height={300}
          width={360}
          className="-mb-96"
        />
      </div>
      <div className="flex flex-col gap-4 items-start justify-center w-1/3">
        <h2 className="text-6xl font-bold uppercase tracking-widest">
          ZX9 Speaker
        </h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Link
          className="uppercase font-bold text-sm tracking-widest bg-[#0e0e0e] px-4 py-3"
          href="/product/zx9-speaker"
        >
          See Product
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProductZX9; 