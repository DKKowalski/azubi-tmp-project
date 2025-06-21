"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThankYouModal from "@/components/ThankYouModal";

const cartItems = [
  {
    name: "XX99 MK II",
    price: 2999,
    quantity: 1,
    image: "/assets/cart/image-xx99-mark-two-headphones.jpg",
  },
  {
    name: "XX59",
    price: 899,
    quantity: 2,
    image: "/assets/cart/image-xx59-headphones.jpg",
  },
  {
    name: "YX1",
    price: 599,
    quantity: 1,
    image: "/assets/cart/image-yx1-earphones.jpg",
  },
];

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("eMoney");
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping;

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault();
    setIsThankYouModalOpen(true);
  };

  return (
    <>
      <header className="bg-[#0e0e0e] px-4 pt-8">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
        </div>
      </header>

      <div className="bg-gray-100 ">
        <div className="max-w-screen-xl mx-auto py-8 px-6">
          <Link href="/" className="text-gray-500 mb-8 block">
            Go Back
          </Link>
          <div className="flex gap-8 items-start">
            <div className="bg-white p-8 rounded-lg shadow-lg w-2/3">
              <h1 className="text-3xl font-bold uppercase mb-8">Checkout</h1>
              <form id="checkout-form" onSubmit={handleCheckout}>
                <div className="mb-8">
                  <h2 className="text-secondary uppercase font-bold text-sm mb-4">
                    Billing Details
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-xs">Name</label>
                      <input
                        type="text"
                        placeholder="Alexei Ward"
                        className="w-full border rounded-lg p-3 mt-1"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-xs">Email Address</label>
                      <input
                        type="email"
                        placeholder="alexei@mail.com"
                        className="w-full border rounded-lg p-3 mt-1"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-xs">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 202-555-0136"
                        className="w-full border rounded-lg p-3 mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-secondary uppercase font-bold text-sm mb-4">
                    Shipping Info
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-2">
                      <label className="font-bold text-xs">Your Address</label>
                      <input
                        type="text"
                        placeholder="1137 Williams Avenue"
                        className="w-full border rounded-lg p-3 mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-xs">ZIP Code</label>
                        <input
                          type="text"
                          placeholder="10001"
                          className="w-full border rounded-lg p-3 mt-1"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-xs">City</label>
                        <input
                          type="text"
                          placeholder="New York"
                          className="w-full border rounded-lg p-3 mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-bold text-xs">Country</label>
                      <input
                        type="text"
                        placeholder="United States"
                        className="w-full border rounded-lg p-3 mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-secondary uppercase font-bold text-sm mb-4">
                    Payment Details
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="font-bold text-xs">Payment Method</label>
                    <div className="space-y-4">
                      <div
                        className={`flex items-center border rounded-lg p-3 ${
                          paymentMethod === "eMoney" ? "border-secondary" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="eMoney"
                          checked={paymentMethod === "eMoney"}
                          onChange={() => setPaymentMethod("eMoney")}
                          className="mr-3"
                        />
                        <label>e-Money</label>
                      </div>
                      <div
                        className={`flex items-center border rounded-lg p-3 ${
                          paymentMethod === "cash" ? "border-secondary" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={paymentMethod === "cash"}
                          onChange={() => setPaymentMethod("cash")}
                          className="mr-3"
                        />
                        <label>Cash on Delivery</label>
                      </div>
                    </div>
                  </div>
                  {paymentMethod === "eMoney" && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="font-bold text-xs">
                          e-Money Number
                        </label>
                        <input
                          type="text"
                          placeholder="238521993"
                          className="w-full border rounded-lg p-3 mt-1"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-xs">e-Money PIN</label>
                        <input
                          type="text"
                          placeholder="6891"
                          className="w-full border rounded-lg p-3 mt-1"
                        />
                      </div>
                    </div>
                  )}
                  {paymentMethod === "cash" && (
                    <div className="flex items-center gap-4 mt-4 text-gray-500">
                      <Image
                        src="/assets/checkout/icon-cash-on-delivery.svg"
                        alt="Cash on Delivery"
                        width={48}
                        height={48}
                      />
                      <p>
                        The &apos;Cash on Delivery&apos; option enables you to
                        pay in cash when our delivery courier arrives at your
                        residence. Just make sure your address is correct so
                        that your order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-bold uppercase mb-8">Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-gray-500">
                          $ {item.price.toLocaleString()}
                        </p>
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
                className="block w-full mt-8 text-center uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-3 text-white cursor-pointer"
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-32">
        <Footer />
      </footer>
      {isThankYouModalOpen && (
        <ThankYouModal onClose={() => setIsThankYouModalOpen(false)} />
      )}
    </>
  );
}
