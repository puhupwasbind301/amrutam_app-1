export const products = [
  {
    id: "1",
    name: "Amrutam Kuntal Care Hair Spa",
    description: "Do-it yourself Hair Treatment",
    price: 649.00,
    rating: 5,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
    size: "200 ml",
    category: "hair"
  },
  {
    id: "2",
    name: "Amrutam Kuntal Care Herbal Shampoo",
    description: "Healthy, Natural and Dynamic Hair",
    price: 649.00,
    rating: 5,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    size: "200 ml",
    category: "hair"
  },
  {
    id: "3",
    name: "Amrutam Nari Sondarya Malt",
    description: "Complete Care For Women's Health And Beauty",
    price: 649.00,
    rating: 5,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop",
    size: "200 ml",
    category: "skin"
  },
  {
    id: "4",
    name: "Amrutam Digestive Care Churna",
    description: "Natural Digestive Support Formula",
    price: 449.00,
    rating: 4,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=400&h=400&fit=crop",
    size: "100 g",
    category: "digestion"
  },
  {
    id: "5",
    name: "Amrutam Joint Care Oil",
    description: "Ayurvedic Pain Relief Formula",
    price: 549.00,
    rating: 5,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=400&fit=crop",
    size: "100 ml",
    category: "bones"
  },
  {
    id: "6",
    name: "Amrutam Immunity Booster",
    description: "Traditional Chyawanprash Formula",
    price: 799.00,
    rating: 5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop",
    size: "500 g",
    category: "immunity"
  }
];

export const categories = [
  { id: "all", name: "All", icon: "grid" },
  { id: "hair", name: "Hair", icon: "sparkles" },
  { id: "skin", name: "Skin", icon: "flower" },
  { id: "digestion", name: "Digestion", icon: "leaf" },
  { id: "bones", name: "Bones", icon: "bone" },
  { id: "immunity", name: "Immunity", icon: "shield" },
];

export const ingredients = [
  {
    id: "gokhru",
    name: "Gokhru",
    scientificName: "Tribulus terrestris",
    sanskritName: "गोक्षुर",
    description: "Also known as Tribulus, it's used to prevent infections and manage diabetes. It's known for its potential to boost testosterone levels and improve reproductive health.",
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&h=400&fit=crop",
    benefits: [
      "Lowers Blood Sugar",
      "Boosts Digestion",
      "Reduces Anxiety",
      "Wound Healing"
    ],
    products: ["1", "2", "3", "4"]
  },
  {
    id: "chitrak",
    name: "Chitrak",
    scientificName: "Plumbago zeylanica",
    sanskritName: "चित्रक",
    description: "Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb valued for its ability to improve digestion, reduce inflammation, and detoxify the body.",
    image: "https://images.unsplash.com/photo-1542223616-9de9adb5f3e8?w=400&h=400&fit=crop",
    benefits: [
      "Lowers Blood Sugar",
      "Boosts Digestion",
      "Reduces Anxiety",
      "Wound Healing"
    ],
    products: ["1", "2"]
  }
];

export const doctors = [
  {
    id: "1",
    name: "Dr. Vaishali Sharma",
    specialty: "Ayurvedic Medicine & Wellness",
    experience: 12,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
    languages: ["Hindi", "English"],
    consultationFee: 500
  },
  {
    id: "2",
    name: "Dr. Mathew Adams",
    specialty: "Panchakarma Specialist",
    experience: 15,
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
    languages: ["English"],
    consultationFee: 600
  },
  {
    id: "3",
    name: "Dr. Priya Singh",
    specialty: "Women's Health & Fertility",
    experience: 10,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop",
    languages: ["Hindi", "English", "Marathi"],
    consultationFee: 550
  }
];

export const forumPosts = [
  {
    id: "1",
    author: "Anonymous",
    date: "5 days ago",
    question: "Can Ayurveda help with stress and mental health issues?",
    description: "Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.",
    replies: 10,
    likes: 23,
    saves: 3,
    doctorReply: {
      name: "Dr. Mathew Adams",
      date: "5 days ago",
      answer: "Ayurveda offers holistic approaches like herbal remedies, lifestyle adjustments, and relaxation techniques to alleviate stress and support mental well-being. It emphasizes personalized care and natural methods to address the root causes of mental health challenges, promoting balance and harmony in mind and body.",
      likes: 2,
      comments: 2
    }
  },
  {
    id: "2",
    author: "Anonymous",
    date: "5 days ago",
    question: "What are the best herbs for improving digestion?",
    description: "Looking for natural Ayurvedic solutions to improve digestive health and reduce bloating.",
    replies: 8,
    likes: 18,
    saves: 5,
    doctorReply: {
      name: "Dr. Priya Singh",
      date: "4 days ago",
      answer: "For digestive health, I recommend Triphala, Ginger, and Fennel. These herbs work synergistically to improve gut motility, reduce inflammation, and enhance nutrient absorption.",
      likes: 5,
      comments: 3
    }
  }
];
