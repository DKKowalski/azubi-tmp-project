import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white pb-8">
      <Image
        src="/assets/shared/desktop/logo.svg"
        alt="logo"
        width={143}
        height={25}
      />
      <ul className="flex gap-8">
        <li>
          <Link
            className="uppercase font-bold text-sm tracking-widest"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="uppercase font-bold text-sm tracking-widest"
            href="/headphones"
          >
            Headphones
          </Link>
        </li>
        <li>
          <Link
            className="uppercase font-bold text-sm tracking-widest"
            href="/speakers"
          >
            Speakers
          </Link>
        </li>
        <li>
          <Link
            className="uppercase font-bold text-sm tracking-widest"
            href="/earphones"
          >
            Earphones
          </Link>
        </li>
      </ul>
      <Link href="/cart">
        <Image
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
          width={24}
          height={24}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
