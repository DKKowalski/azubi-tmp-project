import { promises as fs } from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "@/types";
import AddToCart from "@/components/AddToCart";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: productSlug } = await params;

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
    <div className="max-w-screen-xl mx-auto py-4 px-4">
      <Link href="/" className="text-gray-500 mb-8 block">
        Go Back
      </Link>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="relative w-full lg:w-1/2 h-80 md:h-96 lg:h-[600px] rounded-lg overflow-hidden">
          <Image
            src={desktopImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
            <div className="w-full lg:w-1/2">
            {product.new && (
            <h1 className="text-lg uppercase tracking-widest mb-8 text-secondary">
              New Product
            </h1>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 uppercase">
            {product.name}
          </h2>
          <p className="mb-8 lg:mb-16 max-w-md mx-auto lg:mx-0 ">
            {product.description}
          </p>
          <p className="text-2xl font-bold mb-8">
            $ {product.price.toLocaleString()}
          </p>

          <AddToCart product={product} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-32 gap-16">
        <div className="w-full lg:w-2/3">
          <h3 className="text-4xl font-bold uppercase mb-8">Features</h3>
          <p className="text-gray-500 whitespace-pre-line">
            {product.features}
          </p>
        </div>
        <div className="w-full lg:w-1/3">
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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-32">
        <div className="col-span-1 lg:col-span-2 space-y-8">
          <div className="relative h-80 md:h-96 lg:h-[280px] rounded-lg overflow-hidden">
            <Image
              src={product.gallery.first.desktop.replace("./", "/")}
              alt={`${product.name} gallery image 1`}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 md:h-96 lg:h-[280px] rounded-lg overflow-hidden">
            <Image
              src={product.gallery.second.desktop.replace("./", "/")}
              alt={`${product.name} gallery image 2`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative col-span-1 lg:col-span-3 h-[520px] md:h-full lg:h-full rounded-lg overflow-hidden">
          <Image
            src={product.gallery.third.desktop.replace("./", "/")}
            alt={`${product.name} gallery image 3`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-32 text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-16">
          You May Also Like
        </h3>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {product.others.map((other, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-8 w-full lg:w-4/12"
            >
              <div className="relative w-full h-80 md:h-96 lg:h-[320px] rounded-lg overflow-hidden">
                <Image
                  src={other.image.desktop.replace("./", "/")}
                  alt={other.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-3xl font-bold uppercase">{other.name}</h4>
              <Link
                className="uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-3 text-white"
                href={`/product/${other.slug}`}
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
