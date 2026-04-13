import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InventoryPreview from "@/components/InventoryPreview";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <main className="min-h-screen">
    <Navbar />
    <HeroSection />
    <InventoryPreview />
    <ServicesSection />
    <AboutSection />
    <ReviewsSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </main>
);

export default Index;
