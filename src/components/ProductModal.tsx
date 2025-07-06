import React from 'react';
import { X } from 'lucide-react';
import { Product, useCart } from '@/context/CartContext';
import Image from 'next/image';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-stone-200">
          <h2 className="text-2xl font-semibold text-stone-900">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 cursor-pointer" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div className="aspect-square overflow-hidden rounded-xl relative">
            {product.isOnSale && (
              <div className="absolute bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                SALE
              </div>
            )}
            <Image
              src={product.image}
              alt={product.name}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light text-stone-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-bold text-stone-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-stone-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-3">Description</h3>
              <p className="text-stone-600 leading-relaxed">{product.description}</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-stone-900">Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-stone-500">Category:</span>
                  <span className="ml-2 text-stone-900 capitalize">{product.category}</span>
                </div>
                <div>
                  <span className="text-stone-500">Room:</span>
                  <span className="ml-2 text-stone-900 capitalize">{product.room.replace('-', ' ')}</span>
                </div>
                <div>
                  <span className="text-stone-500">Material:</span>
                  <span className="ml-2 text-stone-900 capitalize">{product.material}</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-stone-200">
              <button
                onClick={handleAddToCart}
                className="w-full bg-stone-900 text-white py-4 rounded-lg hover:bg-stone-800 transition-colors duration-200 font-medium text-lg cursor-pointer"
              >
                Add to Cart - ${product.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
