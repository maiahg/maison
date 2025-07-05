"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { ArrowRightIcon } from "lucide-react";

const FeaturedSection = () => {
  const router = useRouter();
  const categories = [
    {
      name: "Living Room",
      items: "7 items",
      image: "/assets/living-room.jpg",
      link: "/products?room=living-room#products",
    },
    {
      name: "Bedroom",
      items: "7 items",
      image: "/assets/bedroom.jpg",
      link: "/products?room=bedroom#products",
    },
    {
      name: "Dining Room",
      items: "11 items",
      image: "/assets/dining-room.jpg",
      link: "/products?room=dining-room#products",
    },
    {
      name: "Home Office",
      items: "3 items",
      image: "/assets/office.jpg",
      link: "/products?room=office#products",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <button
              onClick={() => window.location.href = category.link}
              key={category.name}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
                <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                  <h3 className="text-white font-bold text-lg">
                    {category.name}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" id="about">
          <div>
            <p className="text-stone-600 uppercase tracking-wide text-sm mb-4">
              ENLIGHTEN YOUR HOME
            </p>
            <h2 className="text-4xl font-light text-stone-900 mb-6 leading-tight">
              The Art of Living
              <br />
              <span className="font-normal">Modern & Minimalist</span>
            </h2>
            <p className="text-stone-600 mb-8 text-lg leading-relaxed">
              At MAISON, we believe that furniture is more than just functional
              pieces – it's about creating spaces that reflect your personality
              and enhance your daily life. Founded in 2025, we've been dedicated
              to bringing you modern, high-quality furniture that combines
              style, comfort, and affordability.
              <br />
              We're passionate about helping you create the home of your dreams.
              Whether you're furnishing your first apartment or redesigning your
              family home, we provide carefully curated pieces that stand the
              test of time.
            </p>
            <button
              onClick={() => window.location.href = '/products#products'}
              className="bg-stone-900 text-white px-8 py-4 rounded-sm font-bold hover:bg-stone-800 transition-colors duration-300 cursor-pointer flex items-center gap-2"
            >
              Explore Our Products <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <img
              src="/assets/armchair.jpg"
              alt="Modern living room"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
