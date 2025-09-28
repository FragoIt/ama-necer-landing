import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";

import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Hero />
        <Mission />
        <Services />
        <Benefits />
        <Testimonials />
        <Gallery />
        <CallToAction />
        <Contact />
      </main>
      <WhatsAppFloat link="https://wa.me/573006514386?text=Hola,%20quiero%20más%20información" />
      <InstagramFloat link="https://www.instagram.com/amanecer.mamboreta?igsh=MXJ6NXlwM3QzY2o4dA==" />
    </>
  );
};

export default Index;