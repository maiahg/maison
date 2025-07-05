"use client"

import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CartDrawer from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';
import ProductModal from '@/components/ProductModal';
import { Product } from '@/context/CartContext';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const { cartItemsCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-stone-900 tracking-tight cursor-pointer" onClick={() => router.push('/')}>MAISON</h1>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-stone-700 hover:text-stone-900 transition-colors px-4 py-2">
                      <p className="text-lg">Home</p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-stone-700 hover:text-stone-900 transition-colors">
                    <p className="text-lg">Products</p>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => window.location.href = '/products#products'}
                          className="cursor-pointer"
                        >
                          <div className="text-sm font-medium leading-none">All Products</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our complete furniture collection
                          </p>
                        </button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => window.location.href = '/products?room=living-room#products'}
                          className="cursor-pointer"
                        >
                          <div className="text-sm font-medium leading-none">Living Room</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Comfortable seating and modern furniture
                          </p>
                        </button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => window.location.href = '/products?room=bedroom#products'}
                          className="cursor-pointer"
                        >
                          <div className="text-sm font-medium leading-none">Bedroom</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Beds, nightstands, and bedroom essentials
                          </p>
                        </button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => window.location.href = '/products?room=dining-room#products'}
                          className="cursor-pointer"
                        >
                          <div className="text-sm font-medium leading-none">Dining Room</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Tables, chairs, and dining furniture
                          </p>
                        </button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => window.location.href = '/products?room=office#products'}
                          className="cursor-pointer"
                        >
                          <div className="text-sm font-medium leading-none">Home Office</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Desks, chairs, and workspace solutions
                          </p>
                        </button>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <button
                          onClick={() => window.location.href = '/products?onSale=true#products'}
                          className="cursor-pointer"
                        >
                          <div className="text-sm font-medium leading-none">Sale Items</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            All products on sale
                          </p>
                        </button>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#about" className="text-stone-700 hover:text-stone-900 transition-colors px-4 py-2">
                      <p className="text-lg">About</p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#contact" className="text-stone-700 hover:text-stone-900 transition-colors px-4 py-2">
                      <p className="text-lg">Contact</p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Search 
                className="h-5 w-5 text-stone-700 cursor-pointer hover:text-stone-900 transition-colors"
                onClick={() => setIsSearchOpen(true)}
              />
              <div className="relative">
                <ShoppingCart 
                  className="h-5 w-5 text-stone-700 cursor-pointer hover:text-stone-900 transition-colors"
                  onClick={() => setIsCartOpen(true)}
                />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-stone-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </div>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-stone-700" />
                ) : (
                  <Menu className="h-5 w-5 text-stone-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <Link href="/" className="block text-stone-700 hover:text-stone-900 transition-colors">Home</Link>
              <Link href="/#products" className="block text-stone-700 hover:text-stone-900 transition-colors">Products</Link>
              <div className="pl-4 space-y-2">
                <Link href="/products?room=living-room#products" className="block text-stone-600 hover:text-stone-800 transition-colors text-sm">Living Room</Link>
                <Link href="/products?room=bedroom#products" className="block text-stone-600 hover:text-stone-800 transition-colors text-sm">Bedroom</Link>
                <Link href="/products?room=dining-room#products" className="block text-stone-600 hover:text-stone-800 transition-colors text-sm">Dining Room</Link>
                <Link href="/products?room=office#products" className="block text-stone-600 hover:text-stone-800 transition-colors text-sm">Home Office</Link>
                <Link href="/products?onSale=true#products" className="block text-stone-600 hover:text-stone-800 transition-colors text-sm">Sale Items</Link>
              </div>
              <Link href="/#about" className="block text-stone-700 hover:text-stone-900 transition-colors">About</Link>
              <Link href="/#contact" className="block text-stone-700 hover:text-stone-900 transition-colors">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onProductSelect={handleProductSelect}
      />
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Header;