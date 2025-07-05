"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { getRoomFromQuery, getOnSaleFromQuery, updateURLWithRoom, updateURLWithOnSale } from '@/lib/utils';

export interface FilterState {
  category: string;
  room: string;
  material: string;
  priceRange: [number, number];
  onSale: boolean;
  search: string;
}

const ProductGrid = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    room: '',
    material: '',
    priceRange: [0, 2000],
    onSale: false,
    search: ''
  });

  useEffect(() => {
    const roomFromQuery = getRoomFromQuery();
    if (roomFromQuery) {
      setFilters(prev => ({
        ...prev,
        room: roomFromQuery
      }));
    }
  }, []);

  useEffect(() => {
    const onSaleFromQuery = getOnSaleFromQuery();
    setFilters(prev => ({
      ...prev,
      onSale: onSaleFromQuery
    }));
  }, []);

  useEffect(() => {
    updateURLWithRoom(filters.room);
  }, [filters.room]);

  useEffect(() => {
    updateURLWithOnSale(filters.onSale);
  }, [filters.onSale]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filters.category && product.category !== filters.category) return false;
      if (filters.room && product.room !== filters.room) return false;
      if (filters.material && product.material !== filters.material) return false;
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
      if (filters.onSale && !product.isOnSale) return false;
      if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
      return true;
    });
  }, [filters]);

  return (
    <section className="py-16 bg-stone-50">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4">
            <ProductFilters filters={filters} onFiltersChange={handleFiltersChange} />
          </aside>
          
          <main className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-stone-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-stone-500 text-lg">No products match your current filters.</p>
                <button 
                  onClick={() => handleFiltersChange({
                    category: '',
                    room: '',
                    material: '',
                    priceRange: [0, 2000],
                    onSale: false,
                    search: ''
                  })}
                  className="mt-4 text-stone-900 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
    </section>
  );
};

export default ProductGrid;