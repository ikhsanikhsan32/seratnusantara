
"use client";

import { useState, useMemo, ChangeEvent } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { vendors, products, categories } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';

// Helper to format number with dots
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default function VendorPublicPage({ params }: { params: { id: string } }) {
  const vendor = vendors.find((v) => v.id === params.id);
  
  if (!vendor) {
    notFound();
  }

  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [displayPrice, setDisplayPrice] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const vendorProducts = useMemo(() => {
    return products.filter(p => p.vendorId === vendor.id);
  }, [vendor.id]);

  const vendorCategories = useMemo(() => {
    const allVendorCategories = [...new Set(vendorProducts.map(p => p.category))];
    return categories.filter(c => allVendorCategories.includes(c.name));
  }, [vendorProducts]);

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, '');
    if (/^\d*$/.test(rawValue)) {
      const numericValue = rawValue === '' ? '' : parseInt(rawValue, 10);
      setMaxPrice(numericValue);
      setDisplayPrice(numericValue === '' ? '' : formatNumber(numericValue));
    }
  };

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategories(prev => 
      prev.includes(categorySlug) 
        ? prev.filter(slug => slug !== categorySlug) 
        : [...prev, categorySlug]
    );
  };

  const resetFilters = () => {
    setMaxPrice('');
    setDisplayPrice('');
    setSelectedCategories([]);
  };
  
  const filteredProducts = useMemo(() => {
    let productsToFilter = vendorProducts;
    
    if (maxPrice !== '' && maxPrice > 0) {
      productsToFilter = productsToFilter.filter(product => product.price <= maxPrice);
    }
    
    if (selectedCategories.length > 0) {
        const selectedCategoryNames = categories
            .filter(c => selectedCategories.includes(c.slug))
            .map(c => c.name);
        productsToFilter = productsToFilter.filter(product => selectedCategoryNames.includes(product.category));
    }

    return productsToFilter;
  }, [vendorProducts, maxPrice, selectedCategories]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Vendor Header */}
      <header className="mb-8 flex flex-col items-center gap-6 rounded-lg bg-card p-8 text-center md:flex-row md:text-left">
        <Image 
          src={vendor.logoUrl}
          alt={`${vendor.name} logo`}
          width={150}
          height={150}
          className="rounded-full border-4 border-primary"
          data-ai-hint="logo"
        />
        <div>
          <h1 className="font-headline text-4xl font-bold">{vendor.name}</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{vendor.description}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-headline text-lg">Filter Products</CardTitle>
              <Button variant="ghost" size="sm" onClick={resetFilters}>Reset</Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Category Filter */}
              {vendorCategories.length > 0 && (
                <div>
                  <h3 className="font-semibold">Category</h3>
                  <div className="mt-4 space-y-2">
                    {vendorCategories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`cat-${category.id}`}
                          checked={selectedCategories.includes(category.slug)}
                          onCheckedChange={() => handleCategoryChange(category.slug)}
                        />
                        <Label htmlFor={`cat-${category.id}`}>{category.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold">Maximum Price</h3>
                 <div className="relative mt-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">Rp</span>
                  <Input
                    type="text"
                    placeholder="e.g. 500.000"
                    value={displayPrice}
                    onChange={handlePriceChange}
                    className="pl-9"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-12 text-center h-full">
              <h2 className="mt-6 font-headline text-xl font-semibold">No products found</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                No products match the selected filters.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
