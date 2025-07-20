
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Megaphone } from 'lucide-react';
import { newsItems } from '@/lib/mock-data';

export function NewsTicker() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const duplicatedNews = [...newsItems, ...newsItems];

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="relative flex h-10 items-center overflow-hidden">
          <div className="flex-shrink-0 pr-4">
            <Megaphone className="h-5 w-5" />
          </div>
          <div className="flex min-w-0 flex-1">
            {isClient && (
              <div className="flex animate-scroll group-hover:animation-pause-state:paused whitespace-nowrap">
                {duplicatedNews.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mx-4 text-sm font-medium">{item.text}</span>
                    {item.link && (
                      <Link href={item.link} className="ml-1 text-sm font-bold underline">
                        Learn More
                      </Link>
                    )}
                    <span className="mx-4 text-muted-foreground/50">|</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
