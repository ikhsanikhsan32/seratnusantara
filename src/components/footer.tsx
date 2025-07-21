import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for modern, high-quality products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary">Shop</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/track-order" className="text-muted-foreground hover:text-primary">Track Order</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-headline font-semibold">Customer Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/support" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Nusa-Share Section */}
          <div>
            <h3 className="font-headline font-semibold">Nusa-Share</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Nusa-Share – Fitur donasi dan jual-beli pakaian bekas yang masih layak pakai. Pengguna dapat mendonasikan atau menjual pakaian bekas mereka melalui SeratNusantara, yang kemudian akan disaring dan dikurasi untuk memastikan kualitas bahan yang masih dapat diolah kembali. Pakaian yang memenuhi standar akan diproses menjadi produk baru bernilai lebih tinggi atau diberikan kepada mitra yang tepat.
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Serat Nusantara. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
