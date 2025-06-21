import Link from "next/link";
import Image from "next/image";

const categoryData = [
  {
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    title: "Headphones",
    link: "/headphones",
  },
  {
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    title: "Speakers",
    link: "/speakers",
  },
  {
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    title: "Earphones",
    link: "/earphones",
  },
];

const CategoryLinks = () => {
  return (
    <section className="py-16 max-w-screen-xl mx-4 md:mx-auto flex flex-col items-center justify-center md:flex-row md:items-end gap-8 mt-16 px-4">
      {categoryData.map((item, index) => (
        <div
          key={index}
          className=" relative  w-full md:w-4/12 flex flex-col gap-4 justify-center"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={260}
            height={100}
            className=" -mb-48 z-10 self-center"
          />
          <div className=" flex flex-col gap-4 items-center justify-center bg-[#f1f1f1] shadow-md pt-40 pb-8 rounded-lg">
            <h2 className="text-xl font-bold uppercase tracking-widest">
              {item.title}
            </h2>
            <Link
              href={item.link}
              className="flex items-center gap-2 hover:text-secondary transition-colors duration-300"
            >
              <span className="uppercase font-bold text-sm tracking-widest">
                Shop
              </span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow"
                width={10}
                height={10}
              />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryLinks;
