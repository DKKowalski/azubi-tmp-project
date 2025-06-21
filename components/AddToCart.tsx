"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity} x ${product.name} added to cart!`);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center bg-gray-100">
        <button
          onClick={decreaseQuantity}
          className="px-4 py-3 hover:bg-gray-200 text-black/50"
        >
          -
        </button>
        <span className="px-4 py-3 font-bold">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="px-4 py-3 hover:bg-gray-200 text-black/50"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-3 text-white hover:bg-light-orange"
      >
        Add to Cart
      </button>
    </div>
  );
}
