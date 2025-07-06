"use client";
import React from "react";
import { TruckIcon, ShieldCheckIcon, ArrowLeftCircleIcon, MessageCircleIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-gradient-to-r from-stone-100 to-stone-200 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Modern living room"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto my-30 px-6">
        <div className="text-center flex flex-col items-center justify-center">
          <p className="text-2xl text-stone-200 mb-8 leading-relaxed">
            THE SUMMER SALE IS HERE
          </p>
          <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
            MAISON COLLECTIONS
          </h1>
          <p className="text-2xl text-stone-200 mb-8 leading-relaxed">
            For a limited time, selected products are 30% off
          </p>
          <button onClick={() => window.location.href = '/products?onSale=true#products'} className="bg-white text-stone-900 px-8 py-4 rounded-sm font-bold hover:bg-stone-200 transition-colors duration-300 shadow-lg cursor-pointer">
            Shop Now - Save Big!
          </button>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <TruckIcon className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-white font-medium text-sm">
                  Free Shipping Over $50
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <ShieldCheckIcon className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-white font-medium text-sm">
                  Quality Assurance
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <ArrowLeftCircleIcon className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-white font-medium text-sm">
                  Return within 14 days
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MessageCircleIcon className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-white font-medium text-sm">Support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
