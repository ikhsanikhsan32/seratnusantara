export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  imageUrl: string;
  description: string;
  availability: 'In Stock' | 'Out of Stock';
  reviews: number;
  aiHint: string;
};

export const products: Product[] = [
  { id: '1', name: 'Classic Leather Jacket', price: 149.99, category: 'Apparel', rating: 4.5, imageUrl: 'https://placehold.co/600x600.png', description: 'A timeless leather jacket for any occasion.', availability: 'In Stock', reviews: 120, aiHint: 'leather jacket' },
  { id: '2', name: 'Wireless Noise-Cancelling Headphones', price: 249.99, category: 'Electronics', rating: 4.8, imageUrl: 'https://placehold.co/600x600.png', description: 'Immerse yourself in sound with these premium headphones.', availability: 'In Stock', reviews: 250, aiHint: 'headphones' },
  { id: '3', name: 'Modern Minimalist Watch', price: 99.99, category: 'Accessories', rating: 4.2, imageUrl: 'https://placehold.co/600x600.png', description: 'Elegant and simple, this watch complements any outfit.', availability: 'In Stock', reviews: 85, aiHint: 'watch' },
  { id: '4', name: 'Ergonomic Office Chair', price: 349.99, category: 'Home', rating: 4.9, imageUrl: 'https://placehold.co/600x600.png', description: 'Stay comfortable and productive with our ergonomic chair.', availability: 'In Stock', reviews: 300, aiHint: 'office chair' },
  { id: '5', name: 'Organic Cotton T-Shirt', price: 29.99, category: 'Apparel', rating: 4.6, imageUrl: 'https://placehold.co/600x600.png', description: 'Soft, breathable, and sustainably made.', availability: 'In Stock', reviews: 150, aiHint: 'tshirt' },
  { id: '6', name: 'Smart Home Hub', price: 129.99, category: 'Electronics', rating: 4.4, imageUrl: 'https://placehold.co/600x600.png', description: 'Control your smart devices with ease.', availability: 'Out of Stock', reviews: 95, aiHint: 'smart home' },
  { id: '7', name: 'Designer Sunglasses', price: 79.99, category: 'Accessories', rating: 4.3, imageUrl: 'https://placehold.co/600x600.png', description: 'Protect your eyes in style.', availability: 'In Stock', reviews: 70, aiHint: 'sunglasses' },
  { id: '8', name: 'Handcrafted Wooden Coffee Table', price: 299.99, category: 'Home', rating: 4.7, imageUrl: 'https://placehold.co/600x600.png', description: 'A beautiful centerpiece for your living room.', availability: 'In Stock', reviews: 110, aiHint: 'coffee table' },
];

export type Category = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  aiHint: string;
};

export const categories: Category[] = [
  { id: '1', name: 'Apparel', slug: 'apparel', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'clothing rack' },
  { id: '2', name: 'Electronics', slug: 'electronics', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'gadgets' },
  { id: '3', name: 'Accessories', slug: 'accessories', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'watches belts' },
  { id: '4', name: 'Home Goods', slug: 'home', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'home decor' },
];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  aiHint: string;
};

export const blogPosts: BlogPost[] = [
  { id: '1', slug: 'top-10-fashion-trends', title: 'Top 10 Fashion Trends for this Season', author: 'Jane Doe', date: 'October 26, 2023', excerpt: 'Discover the hottest looks and styles for the upcoming season. From vibrant colors to classic silhouettes, we cover it all.', content: '<p>Full blog post content goes here...</p>', imageUrl: 'https://placehold.co/800x600.png', aiHint: 'fashion model' },
  { id: '2', slug: 'smart-home-guide', title: 'A Beginner\'s Guide to a Smarter Home', author: 'John Smith', date: 'October 22, 2023', excerpt: 'Transform your living space with the latest smart home technology. Our guide will help you get started.', content: '<p>Full blog post content goes here...</p>', imageUrl: 'https://placehold.co/800x600.png', aiHint: 'smart home' },
  { id: '3', slug: 'accessorizing-101', title: 'Accessorizing 101: The Final Touch', author: 'Emily White', date: 'October 18, 2023', excerpt: 'Learn how the right accessories can elevate your entire look. Tips and tricks for perfect pairings.', content: '<p>Full blog post content goes here...</p>', imageUrl: 'https://placehold.co/800x600.png', aiHint: 'fashion accessories' },
];

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  { id: '1', question: 'What is your return policy?', answer: 'You can return any item within 30 days of purchase for a full refund or exchange. The item must be in its original condition with all tags attached.' },
  { id: '2', question: 'How do I track my order?', answer: 'Once your order has shipped, you will receive an email with a tracking number. You can use this number on our Track Order page or directly on the carrier\'s website.' },
  { id: '3', question: 'Do you ship internationally?', answer: 'Yes, we ship to over 100 countries. International shipping costs and delivery times vary by location.' },
  { id: '4', question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and CommerceHub gift cards.' },
];
