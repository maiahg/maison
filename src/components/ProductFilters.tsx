"use client";
import React from 'react';
import { FilterState } from '@/components/ProductGrid';
import { Search } from 'lucide-react';

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, onFiltersChange }) => {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    const clearedFilters: FilterState = {
      category: '',
      room: '',
      material: '',
      priceRange: [0, 2000] as [number, number],
      onSale: false,
      search: ''
    };
    onFiltersChange(clearedFilters);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-stone-900">Filters</h3>
        <button 
          onClick={clearFilters}
          className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">Category</label>
          <select
            value={filters.category}
            onChange={(e) => updateFilter('category', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            <option value="seating">Seating</option>
            <option value="tables">Tables & Desks</option>
            <option value="lighting">Lighting</option>
            <option value="storage">Storage</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">Room</label>
          <select
            value={filters.room}
            onChange={(e) => updateFilter('room', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
          >
            <option value="">All Rooms</option>
            <option value="living-room">Living Room</option>
            <option value="dining-room">Dining Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="office">Office</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">Material</label>
          <select
            value={filters.material}
            onChange={(e) => updateFilter('material', e.target.value)}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-stone-500 focus:border-transparent"
          >
            <option value="">All Materials</option>
            <option value="wood">Wood</option>
            <option value="metal">Metal</option>
            <option value="leather">Leather</option>
            <option value="fabric">Fabric</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-stone-700 mb-3">
            Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </label>
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={filters.priceRange[1]}
              onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-stone-500">
              <span>$0</span>
              <span>$2000+</span>
            </div>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={filters.onSale}
              onChange={(e) => updateFilter('onSale', e.target.checked)}
              className="rounded border-stone-300 text-stone-600 focus:ring-stone-500"
            />
            <span className="text-sm font-medium text-stone-700">On Sale Only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;