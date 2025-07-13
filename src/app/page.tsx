import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/product-card';
import { products, categories } from '@/lib/mock-data';
import NewsletterPopup from '@/components/newsletter-popup';
import { ArrowRight, Mail } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      <NewsletterPopup />

      {/* Hero Banner Section */}
      <section className="relative h-[60vh] w-full bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1600x900.png')"}} data-ai-hint="fashion store">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="font-headline text-4xl font-bold md:text-6xl">
            Style for Every Story
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            Discover our new collection of curated items, designed to fit your life.
          </p>
          <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
            <Link href="/shop">Shop Now <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
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
