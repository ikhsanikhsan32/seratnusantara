"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Store, CheckCircle } from "lucide-react";
import type { Product } from "@/lib/mock-data";
import { vendors } from "@/lib/mock-data";
import { Badge } from "./ui/badge";
import { useStore } from "@/context/store-context";
import { useToast } from "@/hooks/use-toast";

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
  const { addToCart, addToWishlist, isInWishlist } = useStore();
  const { toast } = useToast();
  const vendor = vendors.find(v => v.id === product.vendorId);

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
    toast({
      title: isInWishlist(product.id) ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} has been ${isInWishlist(product.id) ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const isWishlisted = isInWishlist(product.id);

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
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
        <div className="flex flex-1 flex-col p-4">
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
          {vendor && (
            <Link href={`/vendor/${vendor.id}`} className="mt-1 text-xs text-muted-foreground hover:underline">
              <Badge variant="secondary" className="font-normal">
                <Store className="mr-1 h-3 w-3" />
                {vendor.name}
              </Badge>
            </Link>
          )}
          <div className="mt-4 flex flex-1 items-end justify-between">
            <p className="text-lg font-bold text-primary">{formatPrice(product.price)}</p>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
