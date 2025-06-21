"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CartModal from "./CartModal";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalCartItems } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center text-white pb-8">
        <div className="flex items-center gap-4">
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="menu"
            width={24}
            height={20}
            className="cursor-pointer md:hidden block"
            onClick={toggleMobileMenu}
          />
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="logo"
            width={143}
            height={25}
          />
        </div>
        <ul className="gap-4 hidden md:flex">
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
        <button onClick={toggleCart} className="relative cursor-pointer">
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart"
            width={24}
            height={24}
          />
          {totalCartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalCartItems}
            </span>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute top-0 left-0 w-80 h-full bg-white text-black p-8 transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-12">
              <Image
                src="/assets/shared/desktop/logo.svg"
                alt="logo"
                width={143}
                height={25}
                className="filter brightness-0"
              />
              <button
                onClick={toggleMobileMenu}
                className="text-black text-2xl"
              >
                ×
              </button>
            </div>
            <ul className="space-y-6">
              <li>
                <Link
                  className="uppercase font-bold text-sm tracking-widest hover:text-secondary transition-colors duration-300"
                  href="/"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="uppercase font-bold text-sm tracking-widest hover:text-secondary transition-colors duration-300"
                  href="/headphones"
                  onClick={toggleMobileMenu}
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  className="uppercase font-bold text-sm tracking-widest hover:text-secondary transition-colors duration-300"
                  href="/speakers"
                  onClick={toggleMobileMenu}
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  className="uppercase font-bold text-sm tracking-widest hover:text-secondary transition-colors duration-300"
                  href="/earphones"
                  onClick={toggleMobileMenu}
                >
                  Earphones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {isCartOpen && <CartModal onClose={toggleCart} />}
    </>
  );
};

export default Navbar;
