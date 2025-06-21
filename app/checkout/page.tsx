"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThankYouModal from "@/components/ThankYouModal";
import { useCart } from "@/context/CartContext";
import CheckoutSummary from "@/components/CheckoutSummary";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("eMoney");
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const { cartItems, clearCart } = useCart();

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault();
    setIsThankYouModalOpen(true);
  };

  if (cartItems.length === 0 && !isThankYouModalOpen) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="bg-[#0e0e0e] px-4 pt-8">
          <div className="max-w-screen-xl mx-auto">
            <Navbar />
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-8">Your cart is empty</h1>
            <Link href="/" className="text-secondary underline">
              Go back to shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <header className="bg-[#0e0e0e] px-4 pt-8">
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
        </div>
      </header>

      <div className="bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-8 px-4 md:px-6">
          <Link href="/" className="text-gray-500 mb-8 block">
            Go Back
          </Link>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full lg:w-2/3">
              <h1 className="text-2xl md:text-3xl font-bold uppercase mb-8">
                Checkout
              </h1>
              <form id="checkout-form" onSubmit={handleCheckout}>
                <div className="mb-8">
                  <h2 className="text-secondary uppercase font-bold text-sm mb-4">
                    Billing Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-xs">Name</label>
                      <input
                        type="text"
                        placeholder="Alexei Ward"
                        className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-xs">Email Address</label>
                      <input
                        type="email"
                        placeholder="alexei@mail.com"
                        className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="font-bold text-xs">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 202-555-0136"
                        className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-secondary uppercase font-bold text-sm mb-4">
                    Shipping Info
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="font-bold text-xs">Your Address</label>
                      <input
                        type="text"
                        placeholder="1137 Williams Avenue"
                        className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-xs">ZIP Code</label>
                        <input
                          type="text"
                          placeholder="10001"
                          className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-xs">City</label>
                        <input
                          type="text"
                          placeholder="New York"
                          className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-bold text-xs">Country</label>
                      <input
                        type="text"
                        placeholder="United States"
                        className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-secondary uppercase font-bold text-sm mb-4">
                    Payment Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="font-bold text-xs">Payment Method</label>
                    <div className="space-y-4">
                      <div
                        className={`flex items-center border border-[#CFCFCF] rounded-lg p-3 ${
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
                        className={`flex items-center border border-[#CFCFCF] rounded-lg p-3 ${
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="font-bold text-xs">
                          e-Money Number
                        </label>
                        <input
                          type="text"
                          placeholder="238521993"
                          className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-xs">e-Money PIN</label>
                        <input
                          type="text"
                          placeholder="6891"
                          className="w-full border border-[#CFCFCF] rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary duration-300 placeholder:font-bold placeholder:text-black/50"
                        />
                      </div>
                    </div>
                  )}
                  {paymentMethod === "cash" && (
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 text-gray-500">
                      <Image
                        src="/assets/checkout/icon-cash-on-delivery.svg"
                        alt="Cash on Delivery"
                        width={48}
                        height={48}
                        className="flex-shrink-0"
                      />
                      <p className="text-sm md:text-base">
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
            <div className="w-full lg:w-1/3">
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 md:mt-32">
        <Footer />
      </footer>
      {isThankYouModalOpen && (
        <ThankYouModal
          onClose={() => {
            setIsThankYouModalOpen(false);
            clearCart();
          }}
        />
      )}
    </>
  );
}
