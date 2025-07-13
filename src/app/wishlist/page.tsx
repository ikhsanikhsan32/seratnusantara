import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeartCrack } from 'lucide-react';

export default function WishlistPage() {
  const wishlistItems = products.slice(2, 6);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold">Your Wishlist</h1>
        <p className="mt-2 text-muted-foreground">
          Products you've saved for later.
        </p>
      </header>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-12 text-center">
          <HeartCrack className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-6 font-headline text-xl font-semibold">Your wishlist is empty</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Looks like you haven't added anything to your wishlist yet.
          </p>
          <Button asChild className="mt-6">
            <Link href="/shop">Start Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
