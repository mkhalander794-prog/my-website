// Mock data for Gorur Mart website

export const businessInfo = {
  name: "Gorur Mart",
  tagline: "Best Quality. Best Price. Best Service.",
  rating: 4.8,
  totalReviews: 61,
  phone: "089708 12509",
  address: "S R Road, Jail Road, Opposite Ganapati Temple, Gandhi Nagar, Shivamogga, Karnataka – 577201",
  plusCode: "WHQ9+GR, Shivamogga, Karnataka",
  landmark: "Near Dr. Ambedkar Circle (Jail Circle)",
  branches: 3,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.2!2d76.76!3d13.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba95a8053e795%3A0xf3510e655c6b6de1!2sGorur%20Mart%20Jail%20Road!5e0!3m2!1sen!2sin!4v1234567890",
  storeImages: [
    "https://customer-assets.emergentagent.com/job_8d6d55fe-56b2-43e9-a6c9-1786d9a4e219/artifacts/rjfnvvqt_WhatsApp%20Image%202026-01-13%20at%2012.11.43%20PM%20%282%29.jpeg",
    "https://customer-assets.emergentagent.com/job_8d6d55fe-56b2-43e9-a6c9-1786d9a4e219/artifacts/cygkhs8e_WhatsApp%20Image%202026-01-13%20at%2012.11.43%20PM.jpeg"
  ]
};

export const aboutContent = {
  title: "About Gorur Mart",
  description: "Gorur Mart is one of the best-rated supermarkets in Shivamogga, known for high-quality products, low prices, excellent customer service, frequent discounts, and Buy One Get One offers. We are committed to providing our customers with the best shopping experience.",
  mission: "Our mission is to make quality shopping affordable for everyone in Shivamogga and surrounding areas.",
  highlights: [
    "Best quality at best price",
    "Attractive discounts and offers",
    "Wide product variety",
    "Clean, well-organized store",
    "Trusted by local customers",
    "Strong customer reviews and testimonials"
  ]
};

export const productCategories = [
  {
    id: 1,
    name: "Groceries",
    description: "Fresh vegetables, fruits, rice, pulses, and daily essentials",
    icon: "ShoppingBasket",
    image: null
  },
  {
    id: 2,
    name: "Clothing",
    description: "Affordable fashion for the entire family",
    icon: "Shirt",
    images: [
      "https://customer-assets.emergentagent.com/job_8d6d55fe-56b2-43e9-a6c9-1786d9a4e219/artifacts/em67l4j7_WhatsApp%20Image%202026-01-13%20at%2012.16.23%20PM%20%281%29.jpeg",
      "https://customer-assets.emergentagent.com/job_8d6d55fe-56b2-43e9-a6c9-1786d9a4e219/artifacts/pjaicgyw_WhatsApp%20Image%202026-01-13%20at%2012.16.21%20PM.jpeg",
      "https://customer-assets.emergentagent.com/job_8d6d55fe-56b2-43e9-a6c9-1786d9a4e219/artifacts/4wf3dxjp_WhatsApp%20Image%202026-01-13%20at%2012.16.23%20PM%20%282%29.jpeg"
    ]
  },
  {
    id: 3,
    name: "Home Décor",
    description: "Beautiful items to enhance your living space",
    icon: "Home",
    image: null
  },
  {
    id: 4,
    name: "Footwear",
    description: "Comfortable and stylish shoes for all occasions",
    icon: "Footprints",
    image: null
  },
  {
    id: 5,
    name: "Stationery",
    description: "School and office supplies at great prices",
    icon: "PenTool",
    image: null
  },
  {
    id: 6,
    name: "Fragrances",
    description: "Premium perfumes and deodorants",
    icon: "Sparkles",
    image: null
  },
  {
    id: 7,
    name: "Household Essentials",
    description: "Cleaning supplies, kitchen items, and more",
    icon: "Package",
    image: null
  }
];

export const offers = [
  {
    id: 1,
    title: "Buy One Get One",
    description: "Special BOGO offers on selected items every week",
    validUntil: "Valid throughout the month",
    badge: "Popular"
  },
  {
    id: 2,
    title: "Seasonal Discounts",
    description: "Up to 30% off on various product categories",
    validUntil: "Limited time offer",
    badge: "Hot Deal"
  },
  {
    id: 3,
    title: "Festival Special",
    description: "Extra savings during festival seasons",
    validUntil: "Check in-store for details",
    badge: "New"
  }
];

export const customerReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    date: "2 weeks ago",
    comment: "Excellent supermarket with great variety and competitive prices. Staff is very helpful and courteous."
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    date: "1 month ago",
    comment: "Best place for grocery shopping in Shivamogga! Always fresh products and amazing discounts."
  },
  {
    id: 3,
    name: "Manjunath B",
    rating: 5,
    date: "3 weeks ago",
    comment: "Very clean and well-organized store. The Buy One Get One offers are fantastic!"
  },
  {
    id: 4,
    name: "Kavitha Reddy",
    rating: 4,
    date: "1 week ago",
    comment: "Good quality products at reasonable prices. Convenient location near Jail Circle."
  },
  {
    id: 5,
    name: "Suresh Gowda",
    rating: 5,
    date: "2 months ago",
    comment: "One of the best supermarkets in town. Wide range of products and excellent customer service."
  },
  {
    id: 6,
    name: "Anitha M",
    rating: 5,
    date: "3 days ago",
    comment: "Love shopping here! Fresh vegetables, great deals, and friendly staff. Highly recommended!"
  }
];

export const branches = [
  {
    id: 1,
    name: "Gorur Mart - Jail Road (Main Branch)",
    address: "S R Road, Jail Road, Opposite Ganapati Temple, Gandhi Nagar, Shivamogga",
    isMain: true
  },
  {
    id: 2,
    name: "Gorur Mart - Branch 2",
    address: "Coming Soon - New Location in Shivamogga",
    isMain: false
  },
  {
    id: 3,
    name: "Gorur Mart - Branch 3",
    address: "Recently Opened - Contact us for details",
    isMain: false
  }
];
