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
      className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 mx-4 lg:mx-0 ${
        reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="relative w-full lg:w-1/2 h-80 md:h-96 lg:h-[600px] rounded-lg overflow-hidden">
        <picture className="w-full h-full">
          <source media="(min-width: 1024px)" srcSet={imageSrc} />
          <source
            media="(min-width: 768px)"
            srcSet={imageSrc.replace("/desktop/", "/tablet/")}
          />
          <img
            src={imageSrc.replace("/desktop/", "/mobile/")}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {isNew && (
          <h1 className="text-sm md:text-lg uppercase tracking-widest mb-4 lg:mb-8 text-secondary">
            New Product
          </h1>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 uppercase">
          {name}
        </h2>
        <p className="mb-8 lg:mb-16 max-w-md mx-auto lg:mx-0">{description}</p>
        <Link
          className="uppercase font-bold text-sm tracking-widest bg-secondary px-8 py-4 text-white hover:bg-[#FBAF85] transition-colors duration-300 inline-block"
          href={productLink}
        >
          See Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
