
"use client";

import { useState, useMemo } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { vendors, products, categories } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/product-card';

export default function VendorPublicPage({ params }: { params: { id: string } }) {
  const vendor = vendors.find((v) => v.id === params.id);
  
  if (!vendor) {
    notFound();
  }

  const [maxPrice, setMaxPrice] = useState('');

  const vendorProducts = useMemo(() => {
    return products.filter(p => p.vendorId === vendor.id);
  }, [vendor.id]);

  const filteredProducts = useMemo(() => {
    const price = parseFloat(maxPrice);
    if (isNaN(price) || price <= 0) {
      return vendorProducts;
    }
    return vendorProducts.filter(product => product.price <= price);
  }, [vendorProducts, maxPrice]);

  const vendorCategories = [...new Set(vendorProducts.map(p => p.category))].map(catName => categories.find(c => c.name === catName)).filter(Boolean);

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
            <CardHeader>
              <CardTitle className="font-headline text-lg">Filter Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Category Filter */}
              {vendorCategories.length > 0 && (
                <div>
                  <h3 className="font-semibold">Category</h3>
                  <div className="mt-4 space-y-2">
                    {vendorCategories.map((category) => category && (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox id={`cat-${category.id}`} />
                        <Label htmlFor={`cat-${category.id}`}>{category.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold">Maximum Price</h3>
                <Input
                  type="number"
                  placeholder="e.g., 500000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="mt-2"
                />
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
                No products match the selected price range.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
