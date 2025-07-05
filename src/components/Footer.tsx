"use client";
import React from 'react';
import Link from 'next/link';
import { InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">MAISON</h3>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Crafting beautiful spaces with modern furniture that combines style, 
              comfort, and quality for your perfect home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <MailIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <PhoneIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><a onClick={() => window.location.href = '/products#products'} className="text-stone-400 hover:text-white transition-colors cursor-pointer">All Products</a></li>
              <li><a onClick={() => window.location.href = '/products?room=living-room#products'} className="text-stone-400 hover:text-white transition-colors cursor-pointer">Living Room</a></li>
              <li><a onClick={() => window.location.href = '/products?room=bedroom#products'} className="text-stone-400 hover:text-white transition-colors cursor-pointer">Bedroom</a></li>
              <li><a onClick={() => window.location.href = '/products?room=dining-room#products'} className="text-stone-400 hover:text-white transition-colors cursor-pointer">Dining Room</a></li>
              <li><a onClick={() => window.location.href = '/products?room=office#products'} className="text-stone-400 hover:text-white transition-colors cursor-pointer">Office</a></li>
              <li><a onClick={() => window.location.href = '/products?onSale=true#products'} className="text-stone-400 hover:text-white transition-colors cursor-pointer">Sale Items</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Care</h4>
            <ul className="space-y-3">
              <li><Link href="/#contact" className="text-stone-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/#about" className="text-stone-400 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-stone-400">
            © 2025 MAISON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
