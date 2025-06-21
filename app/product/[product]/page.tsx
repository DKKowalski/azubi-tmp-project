import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "@/types";

export default async function ProductPage({
  params,
}: {
  params: { product: string };
}) {
  const { product: productSlug } = params;

  // Read the data.json file
  const jsonPath = path.join(
    process.cwd(),
    "challenge-files",
    "audio_file",
    "data.json"
  );
  const fileContents = await fs.readFile(jsonPath, "utf8");
  const products: Product[] = JSON.parse(fileContents);

  // Find the product by slug
  const product = products.find((p) => p.slug === productSlug);

  // If no product is found, return a 404 page
  if (!product) {
    notFound();
  }

  // Note: The image paths in data.json are relative, like "./assets/...".
  // We need to remove the leading "./" for them to work correctly with the /public directory.
  const desktopImage = product.image.desktop.replace("./", "/");

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-6">
      <Link href="/" className="text-gray-500 mb-8 block">
        Go Back
      </Link>

      <div className="flex items-center justify-between gap-16">
        <div className="relative w-1/2 h-[600px] rounded-lg overflow-hidden">
          <Image
            src={desktopImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-1/2">
          {product.new && (
            <h1 className="text-lg uppercase tracking-widest mb-8 text-secondary">
              New Product
            </h1>
          )}
          <h2 className="text-5xl font-bold mb-8 uppercase">{product.name}</h2>
          <p className="mb-8 max-w-md">{product.description}</p>
          <p className="text-2xl font-bold mb-8">
            $ {product.price.toLocaleString()}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-100">
              <button className="px-4 py-3">-</button>
              <span className="px-4 py-3">1</span>
              <button className="px-4 py-3">+</button>
            </div>
            <Link
              className="uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-3 text-white"
              href="#"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-32 gap-16">
        <div className="w-2/3">
          <h3 className="text-4xl font-bold uppercase mb-8">Features</h3>
          <p className="text-gray-500 whitespace-pre-line">
            {product.features}
          </p>
        </div>
        <div className="w-1/3">
          <h3 className="text-4xl font-bold uppercase mb-8">In the box</h3>
          <ul>
            {product.includes.map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="text-secondary font-bold">
                  {item.quantity}x
                </span>
                <span className="text-gray-500">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
