import Navbar from "@/components/navbar";
import HeroSection from "./components/HeroSection";


export default function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <main>{children}</main>
    </div>
  );
}