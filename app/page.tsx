import Image from "next/image";
import TopNav from "./components/TopNav";
import Navbar1 from "./components/Navbar1";
import HeroSection from "./components/HeroSection";
import TextSection from "./components/TextSection";
import ProductsSection from "./components/productsSection";
import Categories from "./components/categories";
import SellingProducts from "./components/sellingProducts";
import SpeakerSection from "./components/speakerSection";
import OurProducts from "./components/ourProducts";
import NewArrival from "./components/newArrival";
import Footer1 from "./components/Footer1";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <TopNav />
      <Navbar1 />
      <HeroSection />
      <TextSection title="Today,s"/>
      <ProductsSection/>
      <TextSection title="Categories"/>
      <Categories/>
      <TextSection title="This Month"/>
      <SellingProducts/>
      <SpeakerSection/>
      <TextSection title="Our Products"/>
      <OurProducts/>
      <TextSection title="Featured"/>
      <NewArrival/>
      <Footer1/>
      <Footer/>
      

      
    </div>
  );
}
