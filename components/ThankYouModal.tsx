"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface ThankYouModalProps {
  onClose: () => void;
}

export default function ThankYouModal({ onClose }: ThankYouModalProps) {
  const { cartItems } = useCart();
  const grandTotal =
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50; // Including shipping

  const firstItem = cartItems[0];

  if (!firstItem) {
    return null; // Don't render modal if cart is empty
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
      <div
        className="bg-white p-4 lg:p-12 rounded-lg shadow-lg w-full max-w-lg flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="Order Confirmation"
          width={64}
          height={64}
          className="mb-8"
        />
        <h1 className="text-3xl font-bold uppercase mb-6">
          Thank you
          <br />
          for your order
        </h1>
        <p className="text-gray-500 mb-8">
          You will receive an email confirmation shortly.
        </p>
        <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg overflow-hidden mb-8 w-full">
          <div className="p-6 w-full lg:w-2/3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-md overflow-hidden">
                  <Image
                    src={firstItem.image.desktop.replace("./", "/")}
                    alt={firstItem.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold">
                    {firstItem.name
                      .replace(" Headphones", "")
                      .replace(" Wireless Earphones", "")
                      .replace(" Speaker", "")}
                  </h2>
                  <p className="text-gray-500">
                    $ {firstItem.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="font-bold text-gray-500">x{firstItem.quantity}</p>
            </div>
            {cartItems.length > 1 && (
              <p className="text-center text-xs text-gray-500 pt-3 border-t mt-3">
                and {cartItems.length - 1} other item(s)
              </p>
            )}
          </div>
          <div className="bg-black text-white p-6 w-full lg:w-1/3 flex flex-col justify-center">
            <p className="text-gray-400 uppercase text-sm mb-2">Grand Total</p>
            <p className="text-xl font-bold">$ {grandTotal.toLocaleString()}</p>
          </div>
        </div>
        <Link
          href="/"
          onClick={onClose}
          className="block w-full text-center uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-4 text-white hover:bg-[#FBAF85] transition-colors duration-300 cursor-pointer"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
