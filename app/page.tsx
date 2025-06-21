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
          <div className="h-[1px] w-full bg-[#979797] mt-10"></div>

          <div className="flex flex-col gap-4 max-w-screen-xl mx-auto text-white md:flex-row pt-8 items-center justify-center ">
            <div className="w-1/2">
              <h1 className="text-lg uppercase tracking-widest mb-8">
                New Product
              </h1>
              <h2 className="text-7xl font-bold mb-8">
                XX99 Mark II Headphones
              </h2>
              <p className="mb-16 max-w-md">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link
                className="uppercase font-bold text-sm tracking-widest bg-[#d87d4a] px-4 py-3"
                href="/"
              >
                See Product
              </Link>
            </div>
            <div className="relative w-1/2 h-[600px] ">
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
