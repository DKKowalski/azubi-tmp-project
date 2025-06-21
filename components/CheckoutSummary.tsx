"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CheckoutSummary() {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full ">
      <h2 className="text-xl font-bold uppercase mb-8">Summary</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
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
                <h3 className="font-bold">
                  {item.name
                    .replace(" Headphones", "")
                    .replace(" Wireless Earphones", "")
                    .replace(" Speaker", "")}
                </h3>
                <p className="text-gray-500">$ {item.price.toLocaleString()}</p>
              </div>
            </div>
            <p className="font-bold text-gray-500">x{item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2 mt-8">
        <div className="flex justify-between">
          <p className="text-gray-500 uppercase">Total</p>
          <p className="font-bold">$ {subtotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 uppercase">Shipping</p>
          <p className="font-bold">$ {shipping.toLocaleString()}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 uppercase">VAT (Included)</p>
          <p className="font-bold">$ {vat.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-gray-500 uppercase">Grand Total</p>
        <p className="font-bold text-secondary">
          $ {grandTotal.toLocaleString()}
        </p>
      </div>
      <button
        type="submit"
        form="checkout-form"
        className="block w-full mt-8 text-center uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-3 text-white cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300"
      >
        Continue & Pay
      </button>
    </div>
  );
}
