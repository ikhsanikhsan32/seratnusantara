
export type Vendor = {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
};

export const vendors: Vendor[] = [
  { id: 'vendor-1', name: 'Lilu Embrace', logoUrl: 'https://placehold.co/100x100.png', description: 'Cutting-edge electronics and gadgets for the modern world.' },
  { id: 'vendor-2', name: 'Green Fast Sawit', logoUrl: 'https://placehold.co/100x100.png', description: 'Stylish and comfortable apparel for every occasion.' },
  { id: 'vendor-3', name: 'puka_id', logoUrl: 'https://placehold.co/100x100.png', description: 'Beautifully crafted goods to make your house a home.' },
  { id: 'vendor-4', name: 'SUSBAG', logoUrl: 'https://placehold.co/100x100.png', description: 'Fresh, organic, and locally sourced food products.' },
];

export type ProductVariant = {
  id: string;
  name: string;
  price: number;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  imageUrl: string;
  imageUrls?: string[];
  description: string;
  availability: 'In Stock' | 'Out of Stock';
  reviews: number;
  aiHint: string;
  vendorId: string;
  variants?: {
    name: string;
    options: ProductVariant[];
  };
  options?: ProductOption[];
};

export const products: Product[] = [
  { id: '2', name: 'Wireless Noise-Cancelling Headphones', price: 2499000, category: 'Accessories', rating: 4.8, imageUrl: 'https://placehold.co/600x600.png', description: 'Immerse yourself in sound with these premium headphones.', availability: 'In Stock', reviews: 250, aiHint: 'headphones', vendorId: 'vendor-1' },
  { id: '7', name: 'Leather Tote Bag', price: 799000, category: 'Bags', rating: 4.7, imageUrl: 'https://placehold.co/600x600.png', description: 'A stylish and spacious bag for your essentials.', availability: 'In Stock', reviews: 180, aiHint: 'leather bag', vendorId: 'vendor-4' },
  // Green Fast Sawit Products
  {
    id: '9',
    name: 'Pot Sawit',
    price: 20000,
    category: 'Home decor',
    rating: 4.8,
    imageUrl: 'https://placehold.co/600x600.png',
    imageUrls: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Pot sawit ramah lingkungan ini terbuat dari lembaran non-woven berbahan serat pendek TKKS. Biodegradable dan tersedia dalam dimensi custom, cocok untuk solusi tanam berkelanjutan.',
    availability: 'In Stock',
    reviews: 25,
    aiHint: 'plant pot',
    vendorId: 'vendor-2',
    variants: {
      name: 'Ukuran',
      options: [
        { id: 'pot-small', name: 'Kecil', price: 20000 },
        { id: 'pot-medium', name: 'Sedang', price: 35000 },
        { id: 'pot-large', name: 'Besar', price: 50000 },
      ],
    },
  },
  {
    id: '10',
    name: 'Bioball Sawit',
    price: 100000,
    category: 'Home decor',
    rating: 4.5,
    imageUrl: 'https://placehold.co/600x600.png',
    imageUrls: ['https://placehold.co/800x800.png'],
    description: 'Digunakan sebagai filter penjernih air pada budidaya ikan hias/tawar.',
    availability: 'In Stock',
    reviews: 15,
    aiHint: 'water filter bioball',
    vendorId: 'vendor-2',
  },
  {
    id: '11',
    name: 'Sandal Sawit Woven',
    price: 250000,
    category: 'Footwear',
    rating: 4.6,
    imageUrl: 'https://placehold.co/600x600.png',
    imageUrls: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Untuk male dan female terbuat dari kain sawit yang diproses dengan sistem tenun ATBM/woven.',
    availability: 'In Stock',
    reviews: 30,
    aiHint: 'woven sandals',
    vendorId: 'vendor-2',
    options: [{
      id: 'sandal-woven-size',
      name: 'Ukuran',
      values: ['37', '38', '39', '40', '41', '42', '43', '44'],
    }],
  },
  {
    id: '12',
    name: 'Sandal Sawit Non-Woven',
    price: 150000,
    category: 'Footwear',
    rating: 4.4,
    imageUrl: 'https://placehold.co/600x600.png',
    imageUrls: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Untuk male dan female terbuat dari kain sawit yang diproses dengan system non woven.',
    availability: 'In Stock',
    reviews: 22,
    aiHint: 'sandals',
    vendorId: 'vendor-2',
    options: [{
      id: 'sandal-nonwoven-size',
      name: 'Ukuran',
      values: ['37', '38', '39', '40', '41', '42', '43', '44'],
    }],
  },
  {
    id: '13',
    name: 'Tas Sawit',
    price: 300000,
    category: 'Bags',
    rating: 4.9,
    imageUrl: 'https://placehold.co/600x600.png',
    imageUrls: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Tas ini terbuat dari kain tenun berbahan serat tandan kosong kelapa sawit, ditenun secara handmade dengan ATBM (Alat Tenun Bukan Mesin). Hadir dalam beragam corak dan model, cocok untuk gaya ramah lingkungan yang unik dan berkelas.',
    availability: 'In Stock',
    reviews: 40,
    aiHint: 'woven bag',
    vendorId: 'vendor-2',
    variants: {
      name: 'Model',
      options: [
        { id: 'tas-tote', name: 'Tote Bag', price: 300000 },
        { id: 'tas-sling', name: 'Sling Bag', price: 2000000 },
        { id: 'tas-shoulder', name: 'Shoulder Bag', price: 2000000 },
      ],
    },
  },
  {
    id: '14',
    name: 'Sepatu Sawit',
    price: 750000,
    category: 'Footwear',
    rating: 4.7,
    imageUrl: 'https://placehold.co/600x600.png',
    imageUrls: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png', 'https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Terbuat dari kain tenun (woven) berbahan serat tandan kosong kelapa sawit. Kain tersebut ditenun secara handmade menggunakan ATBM (Alat Tenun Bukan Mesin).',
    availability: 'In Stock',
    reviews: 18,
    aiHint: 'woven shoes',
    vendorId: 'vendor-2',
    variants: {
      name: 'Model',
      options: [
        { id: 'sepatu-full', name: 'Full Sawit', price: 750000 },
        { id: 'sepatu-leather-pria', name: 'Setengah Leather Pria', price: 1500000 },
        { id: 'sepatu-leather-wanita', name: 'Setengah Leather Wanita', price: 1500000 },
      ],
    },
    options: [{
      id: 'sepatu-size',
      name: 'Ukuran',
      values: ['37', '38', '39', '40', '41', '42', '43', '44'],
    }],
  },
  {
    id: '15',
    name: 'Helm Sepeda Sawit',
    price: 250000,
    category: 'Accessories',
    rating: 4.8,
    imageUrl: 'https://placehold.co/600x600.png',
    imageUrls: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Terbuat dari biokomposit serat tandan kosong kelapa sawit dan polimer, helm ringan digunakan, dan cocok digunakan untuk bersepeda.',
    availability: 'In Stock',
    reviews: 35,
    aiHint: 'bicycle helmet',
    vendorId: 'vendor-2',
    options: [{
      id: 'helm-sepeda-model',
      name: 'Model',
      values: ['Model A', 'Model B', 'Model C'],
    }],
  },
  {
    id: '16',
    name: 'Helm Motor Sawit',
    price: 300000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://placehold.co/600x600.png',
    imageUrls: ['https://placehold.co/800x800.png', 'https://placehold.co/800x800.png'],
    description: 'Terbuat dari biokomposit serat tandan kosong kelapa sawit dan polimer, helm ringan digunakan, dan cocok digunakan untuk berkendara. Terdapat berbagai warna dan bisa custom.',
    availability: 'In Stock',
    reviews: 50,
    aiHint: 'motorcycle helmet',
    vendorId: 'vendor-2',
    variants: {
      name: 'Model',
      options: [
        { id: 'helm-motor-standar', name: 'Standar', price: 300000 },
        { id: 'helm-motor-bogo', name: 'Bogo', price: 350000 },
      ],
    },
  },
  // Puka ID products
  {
    id: '17',
    name: 'PUKA Binar Tas Wanita Payet Lucu Shoulder and Sling Bag Selempang Handmade',
    price: 340000,
    category: 'Bags',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/9HwBShKY/DSC09753.jpg',
    imageUrls: [
        'https://i.ibb.co/9HwBShKY/DSC09753.jpg',
        'https://iili.io/Fw8dIS4.md.jpg',
        'https://i.ibb.co/ZpjQpfnR/DSC09773.jpg',
        'https://i.ibb.co/WvjkHqjY/DSC09775.jpg',
    ],
    description: 'Tas puffy yang dihiasi sequins beading dengan tema Galaxy, Party, Garden, dan Animals adalah representasi kilau yang ada di dalam diri kita. Kombinasi tekstur bahan yang berbeda melambangkan perjalanan mencari jati diri—tidak selalu mulus, tetapi penuh warna dan makna. Yuk, jadikan Tas Binar teman setiamu dalam menjalani hari dalam merayakan makna dan keberkahan dalam hidup.',
    availability: 'In Stock',
    reviews: 88,
    aiHint: 'sequin bag',
    vendorId: 'vendor-3',
    options: [{
      id: 'puka-color',
      name: 'Warna',
      values: ['Hitam', 'Pink', 'Putih'],
    }],
  },
];

export type Category = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  aiHint: string;
};

export const categories: Category[] = [
  { id: '1', name: 'Clothing', slug: 'clothing', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'clothing rack' },
  { id: '2', name: 'Accessories', slug: 'accessories', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'watches belts' },
  { id: '3', name: 'Footwear', slug: 'footwear', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'sneakers shoes' },
  { id: '4', name: 'Bags', slug: 'bags', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'handbags' },
  { id: '5', name: 'Jewelry', slug: 'jewelry', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'necklaces rings' },
  { id: '6', name: 'Home decor', slug: 'home-decor', imageUrl: 'https://placehold.co/400x300.png', aiHint: 'home decor' },
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

export type NewsItem = {
  id: string;
  text: string;
  link?: string;
};

export const newsItems: NewsItem[] = [
    { id: '1', text: '🎉 Summer Sale! Get up to 50% off on selected items.', link: '/shop' },
    { id: '2', text: '🚚 Free shipping on all orders over $50.' },
    { id: '3', text: '✨ New collection just dropped! Check out the latest trends.', link: '/shop' },
    { id: '4', text: 'Join our loyalty program and earn points on every purchase.' },
];
