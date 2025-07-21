
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
import { cn } from '@/lib/utils';

export default function Home() {
  const trendingProductIds = ['14', '28', '31', '30'];
  const trendingProducts = trendingProductIds
    .map(id => products.find(p => p.id === id))
    .filter(p => p !== undefined) as (typeof products)[0][];

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    carouselApi.on('select', onSelect);
    // Set initial slide
    setCurrentSlide(carouselApi.selectedScrollSnap());


    return () => {
      carouselApi.off('select', onSelect);
    };
  }, [carouselApi]);

  const heroSlides = [
    {
      title: 'Style for a Better Earth',
      description: 'Industri fashion merupakan salah satu sektor dengan pertumbuhan tercepat di dunia, namun juga menjadi penyumbang limbah terbesar. Setiap tahunnya, dunia menghasilkan sekitar 92 juta ton limbah tekstil, dengan industri fashion menyumbang 10% dari emisi karbon global (European Parliament, 2020). Di Indonesia, sekitar 2,3 juta ton limbah pakaian dihasilkan setiap tahun setara dengan 12% limbah rumah tangga nasional (Indotextiles, 2023).',
      bgImageUrl: 'https://i.ibb.co/6cXqZPF7/Frame-1-11.png',
      bgAiHint: 'fashion store',
      productImageUrl: 'https://i.ibb.co/TxfJfH54/uohouho-1.png',
      productAiHint: 'fashion accessory',
      buttonText: 'Selengkapnya',
      buttonLink: 'https://youtu.be/tZh7lBC_Z7o?si=ee0KbHIfiAs1q7ny',
    },
    {
      title: 'Potensi Marina yang Terlupakan',
      description: 'Masuki dunia inspiratif para pelaku ekonomi kreatif di pesisir utara, kita diajak melihat bagaimana limbah cangkang kerang yang biasanya terbuang diolah menjadi kerajinan bernilai tinggi: mulai dari dekorasi rumah, aksesori, hingga produk fungsional. Penuh detail proses kreatif yang apik, video ini memotret dengan dekat perjuangan, teknik tradisional, dan semangat inovasi masyarakat pesisir.',
      bgImageUrl: 'https://i.ibb.co/tTYXpQR7/Frame-1-14.png',
      bgAiHint: 'modern gadgets',
      productImageUrl: 'https://i.ibb.co/nNY3YG1m/uohouho-2.png',
      productAiHint: 'smart watch',
      buttonText: 'Selengkapnya',
      buttonLink: 'https://youtu.be/LvjrbFRXMPw?si=BMiX-ooO9Cjz1_tu',
    },
    {
      title: 'Limbah Sawit Juga Berguna!',
      description: 'Limbah tandan kosong kelapa sawit (TKKS) ternyata menyimpan potensi besar untuk diolah menjadi bahan tekstil ramah lingkungan yang kuat, tahan lama, dan biodegradable. Dari limbah menjadi kain, lalu berubah menjadi tas, sepatu, hingga aksesori fashion, inovasi ini tidak hanya mengurangi pencemaran tetapi juga membuka peluang kolaborasi antara petani, industri, dan desainer lokal mewujudkan gaya yang berpihak pada bumi.',
      bgImageUrl: 'https://i.ibb.co/kVTLdbx2/Frame-1-16.png',
      bgAiHint: 'living room decor',
      productImageUrl: 'https://i.ibb.co/YBkz1c0W/uohouho-3.png',
      productAiHint: 'decorative lamp',
      buttonText: 'Selengkapnya',
      buttonLink: '/blog/smart-home-guide',
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
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover"
                    data-ai-hint={slide.bgAiHint}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 container mx-auto px-4 h-full grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="flex justify-start items-center h-full">
                       <div className={cn("relative w-full h-full", {"animate-fade-in-left-then-float": index === currentSlide})}>
                          <Image 
                              src={slide.productImageUrl} 
                              alt={slide.title} 
                              fill={true}
                              className="object-contain"
                              data-ai-hint={slide.productAiHint}
                          />
                       </div>
                    </div>
                    <div className={cn("flex flex-col items-center justify-center text-center md:items-start md:text-left text-white p-4", {"animate-fade-in-up": index === currentSlide})}>
                      <h1 className="font-headline text-4xl font-bold md:text-6xl">
                        {slide.title}
                      </h1>
                      <p className="mt-4 max-w-lg text-lg text-justify">
                        {slide.description}
                      </p>
                      <Button
                        asChild
                        className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
                        size="lg"
                      >
                        <Link 
                          href={slide.buttonLink}
                          {...(slide.buttonLink.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
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

      {/* Trending Products Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-headline mb-8 text-center text-3xl font-bold">
            🔥 Trending Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} isTrending />
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
