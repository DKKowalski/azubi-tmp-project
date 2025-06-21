import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white pb-12 px-6">
      <div className="grid grid-cols-12 justify-center">
        <div className="h-1 bg-secondary w-24 md:col-start-3 col-start-5 text-center"></div>
      </div>
      <div className="max-w-screen-xl mx-auto relative pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-9 gap-8">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            width={143}
            height={25}
          />
          <ul className="flex gap-4 flex-col md:flex-row items-center justify-center">
            <li>
              <Link
                className="uppercase font-bold text-sm tracking-widest hover:text-secondary transition-colors duration-300"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="uppercase font-bold text-sm tracking-widest hover:text-secondary transition-colors duration-300"
                href="/headphones"
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link
                className="uppercase font-bold text-sm tracking-widest hover:text-secondary transition-colors duration-300"
                href="/speakers"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                className="uppercase font-bold text-sm tracking-widest hover:text-secondary transition-colors duration-300"
                href="/earphones"
              >
                Earphones
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-white/50 text-center md:text-left">
              Audiophile is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we are open 7 days a week.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-14">
          <p className="text-xs text-white/50 ">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
