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
} from '@/components/ui/carousel';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  const heroSlides = [
    {
      title: 'Style for Every Story',
      description: 'Discover our new collection of curated items, designed to fit your life.',
      imageUrl: 'https://placehold.co/1600x900.png',
      aiHint: 'fashion store',
      buttonText: 'Shop Now',
      buttonLink: '/shop',
    },
    {
      title: 'Latest in Electronics',
      description: 'Explore cutting-edge gadgets that redefine your world.',
      imageUrl: 'https://placehold.co/1600x900.png',
      aiHint: 'modern gadgets',
      buttonText: 'Explore Gadgets',
      buttonLink: '/shop?category=electronics',
    },
    {
      title: 'Cozy Home Essentials',
      description: 'Transform your space with our unique home decor items.',
      imageUrl: 'https://placehold.co/1600x900.png',
      aiHint: 'living room decor',
      buttonText: 'Decorate Your Home',
      buttonLink: '/shop?category=home',
    },
  ];

  return (
    <div className="flex flex-col">
      <NewsletterPopup />

      {/* Hero Banner Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-20 hidden md:flex items-center justify-center pointer-events-none">
           <div className="relative w-1/4 h-1/2 -translate-x-[150%]">
             <div className="absolute inset-0 animate-float">
                <Image 
                    src="https://placehold.co/400x500.png" 
                    alt="Floating promotion" 
                    width={400}
                    height={500}
                    className="object-contain"
                    data-ai-hint="fashion accessory"
                />
             </div>
           </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full h-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div
                  className="relative h-[70vh] md:h-[80vh] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${slide.imageUrl}')` }}
                  data-ai-hint={slide.aiHint}
                >
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="font-headline text-4xl font-bold md:text-6xl">
                      {slide.title}
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 z-10" />
          <CarouselNext className="absolute right-4 z-10" />
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
