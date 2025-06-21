"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  const { cartItems, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-24 mx-6 h-fit"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold uppercase">
                Cart ({cartItems.length})
              </h1>
              <button
                onClick={clearCart}
                className="text-gray-500 underline hover:text-secondary"
              >
                Remove all
              </button>
            </div>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={item.image.desktop.replace("./", "/")}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-bold">
                        {item.name
                          .replace(" Headphones", "")
                          .replace(" Wireless Earphones", "")
                          .replace(" Speaker", "")}
                      </h2>
                      <p className="text-gray-500">
                        $ {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center bg-gray-100">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-4 py-2 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-8">
              <p className="text-gray-500 uppercase">Total</p>
              <p className="text-2xl font-bold">$ {total.toLocaleString()}</p>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full mt-8 text-center uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-3 text-white"
            >
              Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
