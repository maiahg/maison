"use client";
import React, { useState } from 'react';
import { Product, useCart } from '@/context/CartContext';
import ProductModal from '@/components/ProductModal';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <>
      <div 
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-square overflow-hidden">
          {product.isOnSale && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              SALE
            </div>
          )}
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-stone-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-stone-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-stone-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-stone-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors duration-200 text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ProductModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
