import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/context/CartContext';
import Image from 'next/image';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProductSelect: (product: Product) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onProductSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.room.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 8);
  }, [searchQuery]);

  const handleProductClick = (product: Product) => {
    onProductSelect(product);
    setSearchQuery('');
    onClose();
  };

  const handleClose = () => {
    setSearchQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden">
        <div className="p-4 border-b border-stone-200">
          <div className="flex items-center space-x-3">
            <Search className="h-5 w-5 text-stone-500" />
            <input
              type="text"
              placeholder="Search for products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-lg outline-none placeholder-stone-400"
              autoFocus
            />
            <button
              onClick={handleClose}
              className="p-1 hover:bg-stone-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-stone-500" />
            </button>
          </div>
        </div>
        
        <div className="max-h-80 overflow-y-auto">
          {searchQuery.trim() && filteredProducts.length === 0 && (
            <div className="p-8 text-center text-stone-500">
              <p>No products found for &quot;{searchQuery}&quot;</p>
            </div>
          )}
          
          {filteredProducts.map(product => (
            <button
              key={product.id}
              onClick={() => handleProductClick(product)}
              className="w-full p-4 hover:bg-stone-50 transition-colors flex items-center space-x-4 text-left"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium text-stone-900">{product.name}</h3>
                <p className="text-sm text-stone-500 capitalize">
                  {product.category} • ${product.price}
                </p>
              </div>
            </button>
          ))}
          
          {!searchQuery.trim() && (
            <div className="p-8 text-center text-stone-500">
              <p>Start typing to search for products...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
