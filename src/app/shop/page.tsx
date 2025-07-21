
"use client";

import { useState, useMemo, ChangeEvent } from 'react';
import { ProductCard } from '@/components/product-card';
import { products as allProducts, categories } from '@/lib/mock-data';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Helper to format number with dots
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export default function ShopPage() {
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [displayPrice, setDisplayPrice] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
    let products = allProducts;

    if (maxPrice !== '' && maxPrice > 0) {
      products = products.filter(product => product.price <= maxPrice);
    }
    
    if (selectedCategories.length > 0) {
        const selectedCategoryNames = categories
            .filter(c => selectedCategories.includes(c.slug))
            .map(c => c.name);
        products = products.filter(product => selectedCategoryNames.includes(product.category));
    }
    
    return products;
  }, [maxPrice, selectedCategories]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="font-headline text-4xl font-bold">Shop</h1>
        <p className="mt-2 text-muted-foreground">
          Browse our collection of high-quality products.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-headline text-lg">Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={resetFilters}>Reset</Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold">Category</h3>
                <div className="mt-4 space-y-2">
                  {categories.map((category) => (
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

              {/* Rating Filter */}
              <div>
                <h3 className="font-semibold">Rating</h3>
                <RadioGroup defaultValue="4" className="mt-4 space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                      <Label htmlFor={`rating-${rating}`} className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        ))}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>
    </div>
  );
}
