import CategoryLinks from "@/components/CategoryLinks";
import Footer from "@/components/footer";
import BestGear from "@/components/BestGear";
import Navbar from "@/components/navbar";

export default function ProductPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-[#0e0e0e] pt-8 px-6 mb-16">
        <div className="max-w-screen-xl mx-auto ">
          <Navbar />
        </div>
      </header>
      <main>
        {children}
        <CategoryLinks />
        <BestGear />
      </main>
      <Footer />
    </>
  );
}
