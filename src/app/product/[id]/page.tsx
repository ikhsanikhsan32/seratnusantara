
"use client";

import Image from 'next/image';
import { products } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Star, Heart, ShoppingCart, Minus, Plus, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product-card';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useStore, CartItem } from '@/context/store-context';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

function formatPrice(price: number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
}

// Helper to get default options
const getDefaultOptions = (product?: (typeof products)[0]): Record<string, string> => {
  if (!product?.options) return {};
  return product.options.reduce((acc, option) => {
    acc[option.name] = option.values[0];
    return acc;
  }, {} as Record<string, string>);
};


export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { addToCart, addToWishlist, isInWishlist, isLoaded } = useStore();
  const { toast } = useToast();
  
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const product = useMemo(() => products.find((p) => p.id === params.id), [params.id]);

  const [quantity, setQuantity] = useState(1);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariantId(product.variants?.options[0]?.id ?? null);
      setSelectedOptions(getDefaultOptions(product));
    }
  }, [product]);

  useEffect(() => {
    if (isLoaded && product) {
      setIsWishlisted(isInWishlist(product.id));
    }
  }, [isLoaded, isInWishlist, product]);


  const selectedVariant = useMemo(() => {
    if (product?.variants) {
      return product.variants.options.find(v => v.id === selectedVariantId);
    }
    return null;
  }, [product, selectedVariantId]);

  const price = useMemo(() => {
    if (product?.variants?.options) {
      return selectedVariant?.price ?? product.price ?? 0;
    }
    return product?.price ?? 0;
  }, [product, selectedVariant]);
  
  const handleOptionChange = useCallback((optionName: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionName]: value }));

    if (carouselApi) {
        if (optionName === 'Warna') {
            const colorMap: Record<string, number> = {
                'Hitam': 1, 'Pink': 1, 'Putih': 2, 'Kuning': 3,
                'Purple': 2, 'Grey': 3,
                'Night': 1, 'Day': 2,
                'Ocean': 0, 'Alice': 1, 'Playfull': 2, 'Lissi': 3,
                'Green': 1, 'Orange': 2, 'Yellow': 3,
            };
            const slideIndex = colorMap[value];
            if (slideIndex !== undefined) {
                carouselApi.scrollTo(slideIndex, false);
            }
        }
        if (product?.id === '15' && optionName === 'Model') {
            const modelMap: Record<string, number> = {
                'Model A': 0,
                'Model B': 1,
                'Model C': 2,
            };
            const slideIndex = modelMap[value];
            if (slideIndex !== undefined) {
                carouselApi.scrollTo(slideIndex, false);
            }
        }
    }
  }, [carouselApi, product?.id]);

  const handleVariantHover = useCallback((variantName: string) => {
    if (carouselApi && product?.id === '9' && product.variants?.name === 'Ukuran') {
        const sizeMap: Record<string, number> = {
            'Besar': 1,
            'Sedang': 2,
            'Kecil': 3,
        };
        const slideIndex = sizeMap[variantName];
        if (slideIndex !== undefined) {
            carouselApi.scrollTo(slideIndex, false);
        }
    } else if (carouselApi && product?.id === '13' && product.variants?.name === 'Model') {
        const modelMap: Record<string, number> = {
            'Tote Bag': 0,
            'Sling Bag': 1,
            'Shoulder Bag': 2
        };
        const slideIndex = modelMap[variantName];
        if (slideIndex !== undefined) {
            carouselApi.scrollTo(slideIndex, false);
        }
    } else if (carouselApi && product?.id === '14' && product.variants?.name === 'Model') {
        const modelMap: Record<string, number> = {
            'Full Sawit': 0,
            'Setengah Leather Pria': 1,
            'Setengah Leather Wanita': 2
        };
        const slideIndex = modelMap[variantName];
        if (slideIndex !== undefined) {
            carouselApi.scrollTo(slideIndex, false);
        }
    }
  }, [carouselApi, product]);


  const handleAddToCart = () => {
    if (!product) return;
    const optionText = Object.entries(selectedOptions).map(([key, value]) => `${key}: ${value}`).join(', ');
    const itemToAdd: CartItem = {
      ...product,
      id: selectedVariant ? `${product.id}_${selectedVariant.id}` : product.id,
      productId: product.id,
      price: price,
      quantity: quantity,
      variantName: selectedVariant?.name ? `${selectedVariant.name}${optionText ? ' ('+optionText+')' : ''}` : optionText,
    };
    addToCart(itemToAdd);
    toast({
      title: "Added to Cart",
      description: `${product.name} ${itemToAdd.variantName ? `(${itemToAdd.variantName})` : ''} has been added to your cart.`,
      action: (
        <Link href="/cart">
          <Button variant="outline" size="sm">
            View Cart
          </Button>
        </Link>
      ),
    });
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    addToWishlist(product);
    const inWishlist = isInWishlist(product.id);
    setIsWishlisted(!inWishlist);
    toast({
      title: !inWishlist ? "Added to Wishlist" : "Removed from Wishlist",
      description: `${product.name} has been ${!inWishlist ? 'added to' : 'removed from'} your wishlist.`,
    });
  };

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const images = product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls : [product.imageUrl];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Product Image Carousel */}
        <div>
          <Carousel className="w-full" setApi={setCarouselApi}>
            <CarouselContent>
              {images.map((url, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden rounded-lg">
                    <CardContent className="p-0">
                      <Image
                        src={url}
                        alt={`${product.name} view ${index + 1}`}
                        width={800}
                        height={800}
                        className="h-full w-full object-cover aspect-square"
                        data-ai-hint={product.aiHint}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
             {images.length > 1 && (
                <>
                    <CarouselPrevious className="absolute left-4" />
                    <CarouselNext className="absolute right-4" />
                </>
            )}
          </Carousel>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="font-headline text-3xl font-bold md:text-4xl">{product.name}</h1>
          
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <Badge variant={product.availability === 'In Stock' ? 'default' : 'destructive'} className={product.availability === 'In Stock' ? 'bg-green-600' : ''}>
              {product.availability}
            </Badge>
          </div>

          <p className="mt-4 text-3xl font-bold text-primary">{formatPrice(price)}</p>

          <p className="mt-6 text-muted-foreground whitespace-pre-wrap">{product.description}</p>
          
          <Separator className="my-8" />

          {/* Variants and Options */}
          <div className="space-y-6">
            {product.variants && (
              <div>
                <Label className="text-base font-semibold">{product.variants.name}</Label>
                <RadioGroup 
                  value={selectedVariantId ?? undefined}
                  onValueChange={setSelectedVariantId}
                  className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2"
                >
                  {product.variants.options.map(variant => (
                    <div key={variant.id}>
                      <RadioGroupItem value={variant.id} id={`variant-${variant.id}`} className="peer sr-only" />
                      <Label
                        htmlFor={`variant-${variant.id}`}
                        onMouseEnter={() => {
                          if (product.variants?.name !== 'Ukuran') {
                            handleVariantHover(variant.name);
                          }
                        }}
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>{variant.name}</span>
                        <span className="font-bold text-sm">{formatPrice(variant.price)}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {product.options?.map(option => (
              <div key={option.id}>
                <Label className="text-base font-semibold">{option.name}</Label>
                 <RadioGroup 
                  value={selectedOptions[option.name]}
                  onValueChange={(value) => handleOptionChange(option.name, value)}
                  className="mt-2 flex flex-wrap gap-2"
                >
                  {option.values.map(value => (
                    <div key={value}>
                      <RadioGroupItem value={value} id={`${option.id}-${value}`} className="peer sr-only" />
                      <Label
                        htmlFor={`${option.id}-${value}`}
                        onMouseEnter={() => {
                          if (option.name !== 'Ukuran') {
                            handleOptionChange(option.name, value)
                          }
                        }}
                        className="flex items-center justify-center rounded-md border-2 border-muted bg-popover px-4 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        {value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>


          {/* Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center rounded-md border">
                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center font-bold">{quantity}</span>
                <Button variant="ghost" size="icon" className="h-9 w-9" onClick={() => setQuantity(q => q + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-grow gap-4">
               <Button size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1" onClick={handleAddToWishlist} disabled={!isLoaded}>
                 {isWishlisted ? (
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  ) : (
                    <Heart className="mr-2 h-5 w-5" />
                  )}
                  {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="font-headline text-2xl font-bold">Related Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}

    
