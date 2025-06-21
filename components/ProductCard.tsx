import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  isNew?: boolean;
  name: string;
  description: string;
  productLink: string;
  reverseLayout?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  altText,
  isNew,
  name,
  description,
  productLink,
  reverseLayout,
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-16 ${
        reverseLayout ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="relative w-1/2 h-[600px] rounded-lg overflow-hidden">
        <Image src={imageSrc} alt={altText} fill className="object-cover" />
      </div>
      <div className="w-1/2">
        {isNew && (
          <h1 className="text-lg uppercase tracking-widest mb-8 text-secondary">
            New Product
          </h1>
        )}
        <h2 className="text-5xl font-bold mb-8 uppercase">{name}</h2>
        <p className="mb-16 max-w-md">{description}</p>
        <Link
          className="uppercase font-bold text-sm tracking-widest bg-secondary px-4 py-3 text-white"
          href={productLink}
        >
          See Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
