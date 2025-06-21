import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CategoryLinks from "@/components/CategoryLinks";
import FeaturedProductZX9 from "@/components/FeaturedProductZX9";
import FeaturedProductZX7 from "@/components/FeaturedProductZX7";
import FeaturedProductYX1 from "@/components/FeaturedProductYX1";
import BestGear from "@/components/BestGear";

export default function Home() {
  return (
    <>
      <header className="bg-[#0e0e0e] py-8 px-6">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />

          <div className="relative flex flex-col max-w-screen-xl mx-auto text-white lg:flex-row pt-8 border-t border-white/10">
            <div className="w-full lg:w-1/2 absolute top-1/2 -translate-y-1/2 left-0 lg:relative z-10 flex flex-col items-center lg:items-start justify-center text-center lg:text-left px-4 lg:px-0">
              <h1 className="text-sm md:text-lg uppercase tracking-widest mb-4 md:mb-8 text-secondary">
                New Product
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 max-w-md">
                XX99 Mark II Headphones
              </h2>
              <p className="mb-8 md:mb-16 max-w-sm md:max-w-md opacity-75">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link
                className="uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-4 hover:bg-[#FBAF85] transition-colors duration-300"
                href="/product/xx99-mark-two-headphones"
              >
                See Product
              </Link>
            </div>
            <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] ">
              <Image
                src="/assets/home/desktop/image-hero.png"
                alt="hero"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-[#0e0e0e] "></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e] "></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <CategoryLinks />

        <FeaturedProductZX9 />

        <FeaturedProductZX7 />

        <FeaturedProductYX1 />

        <BestGear />
      </main>
      <Footer />
    </>
  );
}
