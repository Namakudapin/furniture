import ProductSection from "./components/ProductSection";
import WhyChooseUs from "./components/WhyChooseUsSection";

export default function HomePage() {
    return (
      <div className="bg-white min-h-screen">
       <ProductSection />
       <WhyChooseUs />
      </div>
    );
  }