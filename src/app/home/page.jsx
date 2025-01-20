
import BlogSection from "./components/BlogSection";
import HeroSection from "./components/HeroSection";
import InteriorDesign from "./components/InteriorDesignSection";
import ProductSection from "./components/ProductSection";
import WhyChooseUs from "./components/WhyChooseUsSection";

export default function HomePage() {
    return (
      <div className="bg-[#EFF2F1] min-h-screen ">
       <HeroSection />
       <ProductSection />
       <WhyChooseUs />
       <InteriorDesign />
       <BlogSection />
      </div>
    );
  }