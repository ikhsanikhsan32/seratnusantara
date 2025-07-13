"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if the user has already seen the popup
      if (!sessionStorage.getItem("newsletterPopupSeen")) {
        setIsOpen(true);
        sessionStorage.setItem("newsletterPopupSeen", "true");
      }
    }, 5000); // 5-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] md:max-w-3xl p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8 flex flex-col justify-center">
                <DialogHeader>
                  <div className="flex justify-center md:justify-start">
                    <Mail className="h-10 w-10 text-primary mb-2" />
                  </div>
                    <DialogTitle className="font-headline text-2xl md:text-3xl font-bold text-center md:text-left">
                        Join Our Newsletter
                    </DialogTitle>
                    <DialogDescription className="text-center md:text-left">
                        Get 15% off your first order and stay up to date with our latest drops and exclusive offers.
                    </DialogDescription>
                </DialogHeader>
                <form className="mt-4 flex flex-col gap-2">
                    <Input id="email" placeholder="you@example.com" type="email" />
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
                </form>
                <p className="mt-2 text-xs text-muted-foreground text-center md:text-left">We respect your privacy. Unsubscribe at any time.</p>
            </div>
             <div className="hidden md:block relative">
                <Image
                    src="https://placehold.co/400x500.png"
                    alt="Newsletter promotion"
                    width={400}
                    height={500}
                    className="h-full w-full object-cover"
                    data-ai-hint="fashion style"
                />
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
