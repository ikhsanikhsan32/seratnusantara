
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
    imageUrl: 'https://i.ibb.co/k22cmDjV/Screenshot-2025-07-21-061412.png',
    imageUrls: [
        'https://i.ibb.co/k22cmDjV/Screenshot-2025-07-21-061412.png',
        'https://i.ibb.co/n8cVpGzx/1.png',
        'https://i.ibb.co/qYxkTL2B/2.png',
        'https://i.ibb.co/whc1DTLn/3.png',
    ],
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
  {
    id: '18',
    name: 'PUKA Bando Maury Payet Manik-manik Terumbu Karang Colorful Ocean Series Bando Satin Padded Wanita',
    price: 120000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/HLVCxBGL/DSC03997.jpg',
    imageUrls: [
      'https://i.ibb.co/HLVCxBGL/DSC03997.jpg',
      'https://i.ibb.co/BVn08qTN/DSC03990.jpg',
      'https://i.ibb.co/FqXKB5Y6/DSC04001.jpg',
      'https://i.ibb.co/nqL4JMK1/DSC04006.jpg',
    ],
    description: "So just like the ocean, we hope you find the comfie in our newest collection✨\n\nBando Maury dipayet berwarna-warni yang cantik bernuansa indahnya lautan\n\nMiliki Ocean Series: Coral Candy by Puka, berbagai aksesoris seperti Gelang, Anting, Bando, Tas, Bross, Kalung dan phone chain yang dibuat dengan beads cantik inspired by the ocean.\n\nCARA PERAWATAN : Cukup dilap tisue bagian payet jika terkena noda\n\nDISCLAIMER\nWarna produk pada gambar mungkin tidak 100% sama dengan produk fisik, karena proses pencahayaan pada pengambilan gambar atau kualitas layar gadget yang digunakan untuk melihat gambar.",
    availability: 'In Stock',
    reviews: 45,
    aiHint: 'beaded headband',
    vendorId: 'vendor-3',
    options: [{
      id: 'puka-bando-color',
      name: 'Warna',
      values: ['Pink', 'Purple', 'Grey'],
    }],
  },
  {
    id: '19',
    name: 'PUKA Bross Payet Ocean Series Bentuk Terumbu Karang Mutiara Coral Reefs',
    price: 95000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/ds2nYb55/DSC04024.jpg',
    imageUrls: [
      'https://i.ibb.co/ds2nYb55/DSC04024.jpg',
      'https://i.ibb.co/GvT4kbPq/DSC04021.jpg'
    ],
    description: 'So just like the ocean, we hope you find the comfie in our newest collection✨\n\nBross yang dipayet dengan nuansa lautan warna-warni, datang dengan stok terbatas!\n\nCARA PERAWATAN : Cukup dilap tisue bagian payet jika terkena noda\n\nDISCLAIMER\nWarna produk pada gambar mungkin tidak 100% sama dengan produk fisik, karena proses pencahayaan pada pengambilan gambar atau kualitas layar gadget yang digunakan untuk melihat gambar.',
    availability: 'In Stock',
    reviews: 52,
    aiHint: 'beaded brooch',
    vendorId: 'vendor-3'
  },
  {
    id: '20',
    name: 'PUKA Anting Moana Perhiasan Payet Colorful Beads Ocean Series Aksesoris Wanita',
    price: 85000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/Ld3Q2Cnf/DSC04040.jpg',
    imageUrls: [
      'https://i.ibb.co/Ld3Q2Cnf/DSC04040.jpg',
      'https://i.ibb.co/LDCsTH75/DSC04032.jpg'
    ],
    description: "So just like the ocean, we hope you find the comfie in our newest collection✨\n\nAnting tusuk dihias dengan sequins bernuansa terumbu karang di lautan yang indah. Spesial buatan teman-teman inklusif.\n\nMiliki Ocean Series: Coral Candy by Puka, berbagai aksesoris seperti Gelang, Anting, Bando, Tas, Bross, Kalung dan phone chain yang dibuat dengan beads cantik inspired by the ocean.\n\nDISCLAIMER\nWarna produk pada gambar mungkin tidak 100% sama dengan produk fisik, karena proses pencahayaan pada pengambilan gambar atau kualitas layar gadget yang digunakan untuk melihat gambar.",
    availability: 'In Stock',
    reviews: 38,
    aiHint: 'beaded earrings',
    vendorId: 'vendor-3'
  },
  {
    id: '21',
    name: 'PUKA Kalung Starsea Manik-manik Ocean Series Colorful',
    price: 110000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/27G1TVf2/DSC04045.jpg',
    imageUrls: [
      'https://i.ibb.co/27G1TVf2/DSC04045.jpg',
      'https://i.ibb.co/skNfykD/DSC04046.jpg',
      'https://i.ibb.co/MDf7Gbcv/DSC04050.jpg'
    ],
    description: "So just like the ocean, we hope you find the comfie in our newest collection✨\n\nKalung Starsea Manik-manik.\n\nMiliki Ocean Series: Coral Candy by Puka, berbagai aksesoris seperti Gelang, Anting, Bando, Tas, Bross, Kalung dan phone chain yang dibuat dengan beads cantik inspired by the ocean.\n\nCARA PERAWATAN : Cukup dilap tisue bagian payet jika terkena noda\n\nDISCLAIMER\nWarna produk pada gambar mungkin tidak 100% sama dengan produk fisik, karena proses pencahayaan pada pengambilan gambar atau kualitas layar gadget yang digunakan untuk melihat gambar.",
    availability: 'In Stock',
    reviews: 29,
    aiHint: 'beaded necklace',
    vendorId: 'vendor-3'
  },
  {
    id: '22',
    name: 'PUKA Keychain Lucu Jellyfish Ocean Series Colorful Gantungan Kunci Ubur-ubur',
    price: 75000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/bMDL3Vkn/DSC04052.jpg',
    imageUrls: [
      'https://i.ibb.co/bMDL3Vkn/DSC04052.jpg',
      'https://i.ibb.co/Fj6wN4n/DSC04055.jpg',
      'https://i.ibb.co/MDFH67mj/DSC04058.jpg'
    ],
    description: 'So just like the ocean, we hope you find the comfie in our newest collection✨\n\nKeychain Jellyfish lucu, imut dan warna-warni. Spesial buatan teman-teman inklusif.\n\nMiliki Ocean Series: Coral Candy by Puka, berbagai aksesoris seperti Gelang, Anting, Bando, Tas, Bross, Kalung dan phone chain yang dibuat dengan beads cantik inspired by the ocean.\n\nDISCLAIMER\nWarna produk pada gambar mungkin tidak 100% sama dengan produk fisik, karena proses pencahayaan pada pengambilan gambar atau kualitas layar gadget yang digunakan untuk melihat gambar.',
    availability: 'In Stock',
    reviews: 25,
    aiHint: 'jellyfish keychain',
    vendorId: 'vendor-3'
  },
  {
    id: '23',
    name: 'PUKA Gelang Manami Beads Terumbu Karang Manik-manik Colorful Ocean Series',
    price: 45000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/LhHbVjKv/DSC04062.jpg',
    imageUrls: [
        'https://i.ibb.co/LhHbVjKv/DSC04062.jpg',
        'https://i.ibb.co/kVz0qXgY/DSC04064.jpg',
        'https://i.ibb.co/Nnmr7c16/DSC04060.jpg',
    ],
    description: 'So just like the ocean, we hope you find the comfie in our newest collection✨\n\nGelang Manami lucu, imut dan warna-warni. Spesial buatan teman-teman inklusif.\n\nMiliki Ocean Series: Coral Candy by Puka, berbagai aksesoris seperti Gelang, Anting, Bando, Tas, Bross, Kalung dan phone chain yang dibuat dengan beads cantik inspired by the ocean.\n\nDISCLAIMER\nWarna produk pada gambar mungkin tidak 100% sama dengan produk fisik, karena proses pencahayaan pada pengambilan gambar atau kualitas layar gadget yang digunakan untuk melihat gambar.',
    availability: 'In Stock',
    reviews: 15,
    aiHint: 'beaded bracelet',
    vendorId: 'vendor-3'
  },
  {
    id: '24',
    name: 'PUKA Phone Strap Marina Mermaid Manik-manik Colorful Ocean Series Gantungan HP',
    price: 85000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/dsh9wHcB/DSC04072.jpg',
    imageUrls: [
      'https://i.ibb.co/dsh9wHcB/DSC04072.jpg',
      'https://i.ibb.co/9k1bx3PF/DSC04074.jpg',
      'https://i.ibb.co/N2Z9KQQq/DSC04075.jpg'
    ],
    description: 'So just like the ocean, we hope you find the comfie in our newest collection✨\n\nPhone Strap lucu, imut dan warna-warni. Spesial buatan teman-teman inklusif.\n\nMiliki Ocean Series: Coral Candy by Puka, berbagai aksesoris seperti Gelang, Anting, Bando, Tas, Bross, Kalung dan phone chain yang dibuat dengan beads cantik inspired by the ocean.\n\nDISCLAIMER\nWarna produk pada gambar mungkin tidak 100% sama dengan produk fisik, karena proses pencahayaan pada pengambilan gambar atau kualitas layar gadget yang digunakan untuk melihat gambar.',
    availability: 'In Stock',
    reviews: 21,
    aiHint: 'phone strap',
    vendorId: 'vendor-3'
  },
  {
    id: '25',
    name: 'PUKA Tas Jellyfish Rajut Crochet Slingbag Handbag Ocean Series',
    price: 305000,
    category: 'Bags',
    rating: 5.0,
    imageUrl: 'https://i.ibb.co/tTgc2FVG/DSC04190.jpg',
    imageUrls: [
      'https://i.ibb.co/tTgc2FVG/DSC04190.jpg',
      'https://i.ibb.co/tpW9hhYH/DSC04089.jpg',
      'https://i.ibb.co/Wh0bfP2/DSC04080.jpg',
      'https://i.ibb.co/LXtZ2pMg/DSC04100.jpg',
    ],
    description: 'UKURAN :\n- Diameter : 17cm\n- Handle : 35cm\n- Sling Bag bisa diatur maksimal 105cm\n\nPILIHAN WARNA :\n- Pink Blue\n- Yellow Purple\n- White Magenta\n\nSo just like the ocean, we hope you find the comfie in our newest collection✨\n\nTas Rajut Jellyfish dirajut dengan segenap hati oleh Ibu Dede seorang Crafter Disabilitas.',
    availability: 'In Stock',
    reviews: 12,
    aiHint: 'crochet jellyfish bag',
    vendorId: 'vendor-3',
    options: [{
      id: 'puka-jellyfish-color',
      name: 'Warna',
      values: ['Pink', 'Putih', 'Kuning'],
    }],
  },
  {
    id: '26',
    name: 'PUKA Tas Bucket Bag Neon Garden with Strap Bag Macrame',
    price: 205000,
    category: 'Bags',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/LXkwDpps/DSC08700.jpg',
    imageUrls: [
      'https://i.ibb.co/LXkwDpps/DSC08700.jpg',
      'https://i.ibb.co/n88S7Kp7/DSC08674.jpg',
      'https://i.ibb.co/jkcvG0Gr/DSC08633.jpg',
    ],
    description: 'Material: Bahan tas Kanvas sedang, bahan strap tas tali macrame\n\nUkuran:\npanjang 27 cm\ndiameter dasar 15 cm\npanjang tali 67 cm\n\nDESKRIPSI :\n\nTas playful yang cantik ini sangat cocok untuk menemani penampilan mu yang casual. Ukurannya yang pas untuk membawa kebutuhan sehari-hari mu seperti dompet, handphone, notebook, botol minum, dll. Illustrasinya khusus dibuat oleh Claudia, anak penyandang borderline yang hobinya menggambar keadaan sekitar dengan sangat menggemaskan. nEOn GArdeN adalah karya Claudia yang menggambarkan sebuah taman bunga yang ceria, terdapat berbagai jenis bunga, dedaunan, kebun jeruk, dan rerumputan yang gemas. Pelangi menghiasi taman menggoreskan rona yang indah.  selamat menikmati panorama di nEOn GArdeN. semoga membuat penampilanmu lebih ceria :D',
    availability: 'In Stock',
    reviews: 18,
    aiHint: 'bucket bag',
    vendorId: 'vendor-3',
    options: [{
      id: 'neon-garden-color',
      name: 'Warna',
      values: ['Night', 'Day'],
    }],
  },
  {
    id: '27',
    name: 'PUKA Joyful Bag 2-Way Slingbag Handbag',
    price: 185000,
    category: 'Bags',
    rating: 5.0,
    imageUrl: 'https://i.ibb.co/k2PbkBcf/DSC08707.jpg',
    imageUrls: [
      'https://i.ibb.co/k2PbkBcf/DSC08707.jpg',
      'https://i.ibb.co/TxJjPdmb/DSC08709.jpg',
      'https://i.ibb.co/Ng2wY1hy/DSC08712.jpg'
    ],
    description: 'SPESIFIKASI :\n- Material: Kanvas waterproof\n- Ukuran: 22 x 9 x 13 cm\nPanjang strap slingbag 100 cm dan dapat di atur\nCatatan: setiap tas memiliki aplikasi warna manik-manik yang berbeda (tidak akan selalu sesuai dengan yang difoto). Chat kami jika ingin melihat prduk yang dipilih, sebelum kirim akan kami fotokan terlebih dahulu.\n\nDESKRIPSI :\nJoyful bag merupakan 2 ways bag yang dapat digunakan sebagai handbag dan juga slingbag. Desain yang minimalis juga unik dengan gantungan manik manik lucu tersedia dalam 4 warna yaitu pink fushia, hijau, orange dan kuning. Joyful bag menambah kesan unik dan colorful pada outfitmu. Lengkapi penampilanmu dengan joyful bag',
    availability: 'In Stock',
    reviews: 10,
    aiHint: 'colorful handbag',
    vendorId: 'vendor-3',
    options: [{
      id: 'joyful-bag-color',
      name: 'Warna',
      values: ['Pink', 'Green', 'Orange', 'Yellow'],
    }],
  },
  {
    id: '28',
    name: 'PUKA Wonder Watch Jam Tangan Lucu Manik-manik Wanita handmade',
    price: 225000,
    category: 'Accessories',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/xK1Jdvfc/DSC02891.jpg',
    imageUrls: [
      'https://i.ibb.co/xK1Jdvfc/DSC02891.jpg',
      'https://i.ibb.co/GvP37cmQ/DSC02852.jpg',
      'https://i.ibb.co/tTTFmjxw/DSC02847.jpg',
      'https://i.ibb.co/hxrNrVJV/DSC02807.jpg',
    ],
    description: 'Tambahkan keceriaan pada setiap momen dengan Jam Tangan Manik-Manik ala Puka! Setiap jam tangan dirangkai dengan cermat oleh crafter spesial Puka, memadukan manik-manik berkualitas baik dalam berbagai bentuk dan warna yang menggemaskan.\n\nsize:\n-ukuran bisa di arrange/ diatur\n\nnote:\n•baiknya chat admin yahh untuk memberi tahu ukuran pergelangan tanggannya. \n•Sebelum kirim, team Puka akan mengirimkan preview melalui chat untuk memperlihatkan sambil dicek bahwa jam tangannya berfungsi dan dapat digunakan.',
    availability: 'In Stock',
    reviews: 15,
    aiHint: 'beaded watch',
    vendorId: 'vendor-3',
    options: [{
      id: 'wonder-watch-color',
      name: 'Warna',
      values: ['Ocean', 'Alice', 'Playfull', 'Lissi'],
    }],
  },
  {
    id: '29',
    name: 'PUKA Tas Laptop Ulin laptop bag banyak compartment unik penuh gaya',
    price: 385000,
    category: 'Bags',
    rating: 4.9,
    imageUrl: 'https://i.ibb.co/YBC3XmVM/DSC02920.jpg',
    imageUrls: [
      'https://i.ibb.co/YBC3XmVM/DSC02920.jpg',
      'https://i.ibb.co/hx3c1grS/DSC02933.jpg',
      'https://i.ibb.co/DcStXjT/DSC02944.jpg',
    ],
    description: 'Dirancang dengan banyak kompartemen, Ulin Laptop Bag adalah solusi modern yang menyatu dengan nilai tradisional. Dibuat dari kain goni yang kuat dan ramah lingkungan, tas ini dihias dengan statement embroidery bertema kaulinan barudak. Nostalgia, dan penuh gaya !\n\nUlin Laptop Bag adalah pertemuan antara masa lalu dan masa kini. Di satu sisi, ia membawa fungsi teknologi untuk mobilitas dan produktivitas. Di sisi lain, sulaman motif permainan anak tradisional menyelipkan nilai-nilai budaya yang seakan berkata: “Jangan lupa asal kita.” Setiap kali kamu membuka tas ini untuk bekerja atau belajar, kamu membuka ruang dialog antara memori dan masa depan. Produk ini adalah bukti bahwa modernitas dan tradisi bisa hidup berdampingan, dengan harmoni yang diciptakan melalui karya inklusif. Cocok untuk mahasiswa, pelajar, hingga pekerja kreatif yang ingin tampil beda!\n\nSpesifikasi produk:\n• Ukuran : 40 x 30 cm\n• Muat laptop hingga 14-15 inci.\n• Bahan luar: Denim premium.\n• Aksen depan: Kain goni dengan sulam dan frill kuning cerah.\n• Tali selempang adjustable (warna fushia)\n•Kompartemen dalam: Kantong jaring, saku warna-warni organizer, dan slop laptop dengan padding pelindung.',
    availability: 'In Stock',
    reviews: 14,
    aiHint: 'laptop bag',
    vendorId: 'vendor-3',
  }
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
