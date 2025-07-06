import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import SurveyPopup from '@/components/SurveyPopup';
import { CartProvider } from '@/context/CartContext';
import Image from 'next/image';
import React from 'react';

const Products = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-50">
        <Header />
        
        <section className="relative h-64">
        <Image
          src="/assets/products-hero.jpg"
          alt="Modern living room"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-medium mb-4">All Products</h1>
              <p className="text-xl font-light">Discover our complete furniture collection</p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="products">
          <ProductGrid />
        </div>
        
        <Footer />
        <SurveyPopup />
      </div>
    </CartProvider>
  );
};

export default Products;