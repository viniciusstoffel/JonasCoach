import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Methodology from "@/components/Methodology/Methodology";
import Results from "@/components/Results/Results";
import Benefits from "@/components/Benefits/Benefits";
import Testimonials from "@/components/Testimonials/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import Faq from "@/components/Faq/Faq";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import WhatsappFloat from "@/components/WhatsappFloat/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Methodology />
        <Results />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
