"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="p-0">
        <div className="relative">
          <Link href={`/product/${product.id}`}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.aiHint}
            />
          </Link>
          <Button
            size="icon"
            variant="secondary"
            className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm transition-opacity group-hover:opacity-100 md:opacity-0"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{product.category}</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{product.rating}</span>
            </div>
          </div>
          <h3 className="font-headline mt-2 truncate font-semibold">
            <Link href={`/product/${product.id}`} className="hover:text-primary">
              {product.name}
            </Link>
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
