
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Store } from "lucide-react";
import type { Product } from "@/lib/mock-data";
import { vendors } from "@/lib/mock-data";
import { Badge } from "./ui/badge";
import { useStore } from "@/context/store-context";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

interface ProductCardProps {
  product: Product;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, addToWishlist, isInWishlist, isLoaded } = useStore();
  const { toast } = useToast();
  const vendor = vendors.find(v => v.id === product.vendorId);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setIsWishlisted(isInWishlist(product.id));
    }
  }, [isLoaded, isInWishlist, product.id]);


  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ ...product, quantity: 1, productId: product.id });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
       action: (
        <Link href="/cart">
          <Button variant="outline" size="sm">
            View Cart
          </Button>
        </Link>
      ),
    });
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    addToWishlist(product);
    // The useEffect will update the isWishlisted state reactively
    toast({
      title: !isWishlisted ? "Added to Wishlist" : "Removed from Wishlist",
      description: `${product.name} has been ${!isWishlisted ? 'added to' : 'removed from'} your wishlist.`,
    });
  };


  return (
    <Card className="group flex flex-col overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="flex flex-1 flex-col p-0">
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
            className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
            aria-label="Add to wishlist"
            onClick={handleAddToWishlist}
            disabled={!isLoaded}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
        <div className="flex flex-1 flex-col bg-accent p-4 text-accent-foreground">
          <div className="flex items-center justify-between text-sm text-accent-foreground/80">
            <span>{product.category}</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{product.rating}</span>
            </div>
          </div>
          <h3 className="font-headline mt-2 truncate font-semibold">
            <Link href={`/product/${product.id}`} className="hover:text-accent-foreground/80">
              {product.name}
            </Link>
          </h3>
          {vendor && (
            <Link href={`/vendor/${vendor.id}`} className="mt-1 text-xs text-accent-foreground/80 hover:underline">
              <Badge variant="secondary" className="bg-white/20 text-accent-foreground font-normal">
                <Store className="mr-1 h-3 w-3" />
                {vendor.name}
              </Badge>
            </Link>
          )}
          <div className="mt-4 flex flex-1 items-end justify-between">
            <p className="text-lg font-bold text-white">{formatPrice(product.price)}</p>
            <Button size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-9" onClick={handleAddToCart} aria-label="Add to Cart">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
