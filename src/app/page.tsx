
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/product-card';
import { products, categories } from '@/lib/mock-data';
import NewsletterPopup from '@/components/newsletter-popup';
import { ArrowRight, Mail } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCurrentSlide(carouselApi.selectedScrollSnap());

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);

    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  const heroSlides = [
    {
      title: 'Style for Every Story',
      description: 'Discover our new collection of curated items, designed to fit your life.',
      bgImageUrl: 'https://i.ibb.co/GfV0m8NV/Frame-1-9.png',
      bgAiHint: 'fashion store',
      productImageUrl: 'https://i.ibb.co/TxfJfH54/uohouho-1.png',
      productAiHint: 'fashion accessory',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
    },
    {
      title: 'Latest in Electronics',
      description: 'Explore cutting-edge gadgets that redefine your world.',
      bgImageUrl: 'https://placehold.co/1600x900.png',
      bgAiHint: 'modern gadgets',
      productImageUrl: 'https://placehold.co/400x500.png',
      productAiHint: 'smart watch',
      buttonText: 'Explore Gadgets',
      buttonLink: '/shop?category=electronics',
    },
    {
      title: 'Cozy Home Essentials',
      description: 'Transform your space with our unique home decor items.',
      bgImageUrl: 'https://placehold.co/1600x900.png',
      bgAiHint: 'living room decor',
      productImageUrl: 'https://placehold.co/400x500.png',
      productAiHint: 'decorative lamp',
      buttonText: 'Decorate Your Home',
      buttonLink: '/shop?category=home',
    },
  ];

  return (
    <div className="flex flex-col">
      <NewsletterPopup />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          setApi={setCarouselApi}
          className="w-full h-full group/hero"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[70vh] md:h-[80vh] w-full">
                  <Image
                    src={slide.bgImageUrl}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    data-ai-hint={slide.bgAiHint}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 container mx-auto px-4 h-full grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="hidden md:flex justify-start items-center h-full">
                       <div key={`image-${currentSlide}`} className="relative w-full h-full animate-fade-in-left">
                          <Image 
                              src={slide.productImageUrl} 
                              alt={slide.title} 
                              fill={true}
                              className="object-contain"
                              data-ai-hint={slide.productAiHint}
                          />
                       </div>
                    </div>
                    <div key={`text-${currentSlide}`} className="flex flex-col items-center justify-center text-center md:items-start md:text-left text-white p-4 animate-fade-in-up">
                      <h1 className="font-headline text-4xl font-bold md:text-6xl">
                        {slide.title}
                      </h1>
                      <p className="mt-4 max-w-lg text-lg">
                        {slide.description}
                      </p>
                      <Button
                        asChild
                        className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
                        size="lg"
                      >
                        <Link href={slide.buttonLink}>
                          {slide.buttonText} <ArrowRight className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 z-10 transition-opacity opacity-0 group-hover/hero:opacity-100" />
          <CarouselNext className="absolute right-4 z-10 transition-opacity opacity-0 group-hover/hero:opacity-100" />
        </Carousel>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-headline mb-8 text-center text-3xl font-bold">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-headline mb-8 text-center text-3xl font-bold">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <Link href={`/shop?category=${category.slug}`} key={category.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={category.aiHint}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-headline text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-lg bg-card p-8 text-center shadow-lg">
            <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="font-headline text-3xl font-bold">
              Stay in the Know
            </h2>
            <p className="mt-2 text-muted-foreground">
              Subscribe to our newsletter for the latest updates, new arrivals, and exclusive offers.
            </p>
            <form className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-sm"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="w-full bg-primary sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
