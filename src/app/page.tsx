import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import { CartProvider } from "@/context/CartContext";
import React from "react";
import SurveyPopup from "@/components/SurveyPopup";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50">
        <Header />
        <Hero />
        <FeaturedSection />
        <ContactSection />
        <Footer />
        <SurveyPopup />
      </div>
    </CartProvider>
  );
}
