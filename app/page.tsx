import Faq from "@/components/faq";
import Features1 from "@/components/features1";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/nav-bar";
import Pricing from "@/components/pricing";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stats/>
      <Testimonials/>
      <Features1/>
      <Pricing/>
      <Faq/>
      <Footer/>
    </>
  );
}
