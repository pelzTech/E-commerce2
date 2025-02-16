
import sofaSlide from '../assets/images/sofarslide.jpg';
import phone08 from '../assets/images/phone08.png';
import wireless01 from '../assets/images/wireless01.png';
import watchSlide from '../assets/images/watchslide.png';
import jewelryProductImg03 from '../assets/images/jewelry.png';
import perfumeImg01 from '../assets/images/perfume.jpg';
import hairImg02 from '../assets/images/hair.jpg';
import mensWaresImg03 from '../assets/images/mensWares.jpg';
import femaleWaresImg04 from '../assets/images/femaleWares.jpg';
import cosmeticsImg05 from '../assets/images/cosmetics.jpg';
import performProductImg from '../assets/images/perfume2.jpg';
import hairCareImg from '../assets/images/hair2.jpg';
import perfume_02 from '../assets/images/perfume3.jpg';
import perfume_03 from '../assets/images/perfume4.jpg';
import perfume_04 from '../assets/images/perfume5.jpg';
import mensHoodieImg from '../assets/images/men2.jpg'; 
import mensChinosImg from '../assets/images/men3.jpg'; 
import femaleOutfitImg1 from '../assets/images/female2.jpg'; 
import femaleOutfitImg2 from '../assets/images/female3.jpg'; 
import cosmeticsTravelKitImg from '../assets/images/cosmetic2.jpg'; 
import cosmeticsSetImg from '../assets/images/cosmetic4.jpg';
import luxuryHairBrushSetImg from '../assets/images/hair3.jpg'; 
import hairCareSetImg from '../assets/images/hair4.jpg'; 






export const SliderData = [
  {
    id: 1,
    title: 'Upgrade Your Living Space',
    desc: 'Discover the perfect blend of comfort and style with our exclusive furniture collection. Shop now and transform your home.',
    cover: sofaSlide,
  },
  {
    id: 2,
    title: 'Smartphones for Every Lifestyle',
    desc: 'Stay connected and productive with our latest range of smartphones. Unmatched deals and cutting-edge technology await you.',
    cover: phone08,
  },
  {
    id: 3,
    title: 'Revolutionize Your Audio Experience',
    desc: 'Immerse yourself in crystal-clear sound with our premium wireless headphones. Perfect for work and play.',
    cover: wireless01,
  },
  {
    id: 4,
    title: 'Timeless Elegance, Modern Design',
    desc: 'Elevate your style with our premium collection of watches. Find the perfect piece for every occasion.',
    cover: watchSlide,
  },
];

// Service Data
export const serviceData = [
  {
    icon: <ion-icon name="rocket"></ion-icon>,
    title: 'Fast & Reliable Delivery',
    subtitle: 'Experience quick, reliable, and hassle-free delivery right to your door.',
    bg: '#f0f4f8', 
  },
  {
    icon: <ion-icon name="lock-closed"></ion-icon>,
    title: 'Secure Payments',
    subtitle: 'Your transactions are protected with industry-standard security measures.',
    bg: '#f3f6f8', 
  },
  {
    icon: <ion-icon name="star"></ion-icon>,
    title: 'Premium Quality',
    subtitle: 'Shop with confidence, knowing our products meet the highest standards of quality.',
    bg: '#e2f7e1', 
  },
  {
    icon: <ion-icon name="help-circle"></ion-icon>,
    title: 'Customer Support',
    subtitle: 'Our team is here to assist you 24/7. Get help whenever you need it.',
    bg: '#ffe9e9', 
  },
];

export const discoutProducts = [
  {
    id: '01',
    productName: 'Luxury Brazilian Human Hair',
    imgUrl: hairImg02,
    category: 'hair',
    price: 250,
    discount: 20,
    shortDesc: 'Premium Brazilian human hair that blends seamlessly with your natural hair.',
    description:
      'Achieve flawless looks with our 100% unprocessed Brazilian human hair. Soft, silky, and long-lasting, perfect for any occasion.',
    reviews: [
      {
        rating: 4.9,
        text: 'Excellent quality, feels very natural and worth every penny!',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '02',
    productName: 'Elegant Jewelry Set',
    imgUrl: jewelryProductImg03,
    category: 'jewelry',
    price: 150,
    discount: 15,
    shortDesc: 'Add a touch of elegance with our premium jewelry sets.',
    description:
      'Crafted with precision, our jewelry sets combine timeless designs with modern craftsmanship. Perfect for any occasion.',
    reviews: [
      {
        rating: 4.7,
        text: 'Beautiful design and very high quality.',
      },
    ],
    avgRating: 4.7,
  },
  {
    id: '03',
    productName: 'Luxury Perfume',
    imgUrl: perfumeImg01,
    category: 'perfume',
    price: 120,
    discount: 10,
    shortDesc: 'Exquisite fragrance for every occasion.',
    description:
      'Discover the essence of elegance with our luxury perfume. Long-lasting and available in various scents.',
    reviews: [
      {
        rating: 4.8,
        text: 'Smells amazing and lasts all day. Highly recommend!',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '04',
    productName: 'Organic Hair Growth Serum',
    imgUrl: hairCareImg,
    category: 'hair',
    price: 90,
    discount: 25,
    shortDesc: 'Boost hair growth with our organic serum.',
    description:
      'Formulated with natural ingredients, this hair growth serum promotes healthy hair development and improves scalp health.',
    reviews: [
      {
        rating: 4.6,
        text: 'I noticed hair growth after just a few weeks of use.',
      },
    ],
    avgRating: 4.6,
  },
  {
    id: '05',
    productName: 'Men’s Premium Leather Wallet',
    imgUrl: mensWaresImg03,
    category: 'mens wares',
    price: 55,
    discount: 18,
    shortDesc: 'Stylish and durable leather wallet for men.',
    description:
      'Crafted from high-quality leather, this wallet combines elegance with functionality. A must-have accessory for every man.',
    reviews: [
      {
        rating: 4.7,
        text: 'Very stylish and durable wallet. Worth every penny!',
      },
    ],
    avgRating: 4.7,
  },
];


export const products = [
  {
    id: '01',
    productName: 'Men’s Stylish Wear',
    imgUrl: mensWaresImg03,
    category: 'mens wares',
    price: 80,
    discount: 5,
    shortDesc: 'Trendy and comfortable wear for men.',
    description:
      'Our stylish men’s wear collection offers the perfect blend of comfort and modern design. Suitable for any occasion.',
    reviews: [
      {
        rating: 4.5,
        text: 'Fits perfectly and looks great!',
      },
    ],
    avgRating: 4.5,
  },

  {
    id: '02',
    productName: 'Casual Men’s Hoodie',
    imgUrl: mensHoodieImg, 
    category: 'mens wares',
    price: 60,
    discount: 10,
    shortDesc: 'Stay warm and stylish with our comfortable men’s hoodie.',
    description:
      'Our Casual Men’s Hoodie offers ultimate comfort and warmth without compromising on style. Made with premium fabric, it’s perfect for casual outings or lounging at home.',
    reviews: [
      {
        rating: 4.6,
        text: 'Comfortable and soft. Great for cooler days!',
      },
    ],
    avgRating: 4.6,
  },

  {
    id: '03',
    productName: 'Men’s Slim Fit Chinos',
    imgUrl: mensChinosImg, 
    category: 'mens wares',
    price: 85,
    discount: 12,
    shortDesc: 'Stylish and versatile slim-fit chinos for modern men.',
    description:
      'These Men’s Slim Fit Chinos provide a tailored fit that is perfect for both casual and semi-formal occasions. The lightweight fabric ensures comfort while keeping you looking sharp.',
    reviews: [
      {
        rating: 4.7,
        text: 'Love the fit and quality of these chinos. Highly recommend!',
      },
    ],
    avgRating: 4.7,
  }, 

  {
    id: '02',
    productName: 'Women’s Trendy Outfit',
    imgUrl: femaleWaresImg04,
    category: 'female wares',
    price: 100,
    discount: 8,
    shortDesc: 'Stay ahead in fashion with our women’s trendy outfits.',
    description:
      'Crafted with high-quality materials, our women’s trendy outfits bring elegance and style to your wardrobe.',
    reviews: [
      {
        rating: 4.6,
        text: 'Stylish and very comfortable!',
      },
    ],
    avgRating: 4.6,
  },

  {
    id: '03',
    productName: 'Elegant Evening Dress',
    imgUrl: femaleOutfitImg1, 
    category: 'female wares',
    price: 120,
    discount: 10,
    shortDesc: 'A stunning dress for any special occasion.',
    description:
      'This elegant evening dress features a flattering silhouette and intricate details, perfect for a night out or a formal event.',
    reviews: [
      {
        rating: 4.8,
        text: 'Beautiful design, fits perfectly and feels amazing!',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '04',
    productName: 'Casual Chic Jumpsuit',
    imgUrl: femaleOutfitImg2, 
    category: 'female wares',
    price: 85,
    discount: 15,
    shortDesc: 'A comfortable and chic jumpsuit for everyday wear.',
    description:
      'Our Casual Chic Jumpsuit combines comfort and style, perfect for both casual outings and more formal occasions. Featuring a tailored fit and modern design.',
    reviews: [
      {
        rating: 4.7,
        text: 'Super comfortable and stylish! Perfect for casual hangouts.',
      },
    ],
    avgRating: 4.7,
  },
  {
    id: '03',
    productName: 'Cosmetics Set',
    imgUrl: cosmeticsImg05,
    category: 'cosmetics',
    price: 70,
    discount: 12,
    shortDesc: 'Complete your look with our premium cosmetics set.',
    description:
      'Our cosmetics set includes everything you need for a flawless look. Made from skin-friendly ingredients.',
    reviews: [
      {
        rating: 4.7,
        text: 'Great quality and safe for my skin.',
      },
    ],
    avgRating: 4.7,
  },
  {
    id: '04',
    productName: 'Perfume - Signature Fragrance',
    imgUrl: performProductImg,
    category: 'perfume',
    price: 80,
    discount: 10,
    shortDesc: 'Signature fragrance with a luxurious blend of scents.',
    description:
      'Our signature fragrance is a perfect mix of floral and woody notes, designed to make a lasting impression.',
    reviews: [
      {
        rating: 4.9,
        text: 'I get so many compliments on this perfume!',
      },
    ],
    avgRating: 4.9,
  },

  {
    id: '05',
    productName: 'Eternal Elegance Perfume',
    imgUrl: perfume_02, 
    category: 'perfume',
    price: 95,
    discount: 15,
    shortDesc: 'A timeless fragrance that embodies sophistication and charm.',
    description:
      'Eternal Elegance combines fresh citrus with a warm, musky base. This elegant fragrance is perfect for both day and evening wear, offering a lasting, memorable impression.',
    reviews: [
      {
        rating: 4.8,
        text: 'Such a sophisticated fragrance, it lasts all day long!',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '06',
    productName: 'Velvet Rose Perfume',
    imgUrl: perfume_03, 
    category: 'perfume',
    price: 75,
    discount: 12,
    shortDesc: 'A deep, floral fragrance with a touch of mystery.',
    description:
      'Velvet Rose captures the essence of rich floral notes with hints of sweet vanilla and musk. This luxurious scent is perfect for special occasions and evenings out.',
    reviews: [
      {
        rating: 4.7,
        text: 'I absolutely love this scent, it’s deep and rich!',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '07',
    productName: 'Mystic Night Perfume',
    imgUrl: perfume_04, 
    category: 'perfume',
    price: 110,
    discount: 20,
    shortDesc: 'An enigmatic fragrance with an intoxicating blend of spices and woods.',
    description:
      'Mystic Night combines exotic spices with deep woody notes, creating a mysterious, alluring fragrance. This perfume is perfect for evening wear or a night out on the town.',
    reviews: [
      {
        rating: 4.9,
        text: 'Such a captivating fragrance! It’s become my go-to for nights out.',
      },
    ],
    avgRating: 4.9,
  },
  {
    id: '05',
    productName: 'Hair Repair Treatment Kit',
    imgUrl: hairCareImg,
    category: 'hair',
    price: 60,
    discount: 15,
    shortDesc: 'Nourish and repair your hair with this complete treatment kit.',
    description:
      'This kit contains everything needed to restore your hair’s natural shine and strength, perfect for damaged hair.',
    reviews: [
      {
        rating: 4.8,
        text: 'My hair feels stronger and healthier after using this kit.',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '06',
    productName: 'Luxury Hair Brush Set',
    imgUrl: hairImg02,
    category: 'hair',
    price: 45,
    discount: 10,
    shortDesc: 'Treat your hair to a premium brushing experience.',
    description:
      'This luxury hair brush set is designed to minimize breakage while promoting healthy hair growth.',
    reviews: [
      {
        rating: 4.6,
        text: 'Love these brushes. My hair feels smoother than ever!',
      },
    ],
    avgRating: 4.6,
  },

  {
    id: '07',
    productName: 'Professional Hair Straightener',
    imgUrl: luxuryHairBrushSetImg, 
    category: 'hair',
    price: 70,
    discount: 15,
    shortDesc: 'Achieve sleek, smooth hair with this professional-grade straightener.',
    description:
      'Our Professional Hair Straightener features advanced technology to give you long-lasting, smooth, and frizz-free hair. Ideal for all hair types.',
    reviews: [
      {
        rating: 4.8,
        text: 'This straightener is amazing! It heats up quickly and leaves my hair super smooth.',
      },
    ],
    avgRating: 4.8,
  },

  {
    id: '08',
    productName: 'Ultimate Hair Care Set',
    imgUrl: hairCareSetImg, 
    category: 'hair',
    price: 85,
    discount: 20,
    shortDesc: 'Complete hair care set for nourishment and growth.',
    description:
      'This Ultimate Hair Care Set includes nourishing shampoo, conditioner, and a hair mask that helps promote healthy hair growth and reduce split ends.',
    reviews: [
      {
        rating: 4.7,
        text: 'My hair has never felt healthier, and it looks shinier too!',
      },
    ],
    avgRating: 4.7,
  },
  {
    id: '07',
    productName: 'Women’s Luxury Watch',
    imgUrl: watchSlide,
    category: 'female wares',
    price: 200,
    discount: 18,
    shortDesc: 'Elegant and stylish watch to match your every look.',
    description:
      'This luxury women’s watch combines elegance with modern features, making it the perfect accessory for any occasion.',
    reviews: [
      {
        rating: 4.9,
        text: 'Absolutely love this watch! Stylish and comfortable.',
      },
    ],
    avgRating: 4.9,
  },
  {
    id: '08',
    productName: 'Cosmetics Travel Kit',
    imgUrl: cosmeticsImg05,
    category: 'cosmetics',
    price: 40,
    discount: 10,
    shortDesc: 'Compact and travel-friendly cosmetic set.',
    description:
      'Our travel kit contains essentials for a flawless look on the go, including skincare and makeup products.',
    reviews: [
      {
        rating: 4.7,
        text: 'Perfect size for traveling, and all the essentials are included.',
      },
    ],
    avgRating: 4.7,
  },

  {
    id: '09',
    productName: 'Premium Skincare Set',
    imgUrl: cosmeticsSetImg, 
    category: 'cosmetics',
    price: 60,
    discount: 15,
    shortDesc: 'Nourish your skin with this premium skincare set.',
    description:
      'Our Premium Skincare Set is designed to keep your skin glowing and hydrated. Includes cleanser, toner, moisturizer, and serum for a complete skincare routine.',
    reviews: [
      {
        rating: 4.8,
        text: 'My skin has never felt so soft and hydrated. Highly recommend!',
      },
    ],
    avgRating: 4.8,
  },
  {
    id: '10',
    productName: 'Luxury Makeup Kit',
    imgUrl: cosmeticsTravelKitImg, 
    category: 'cosmetics',
    price: 80,
    discount: 20,
    shortDesc: 'A luxurious set of makeup essentials.',
    description:
      'This luxury makeup kit includes everything you need to create a flawless look, from foundation to lip gloss. Perfect for special occasions or daily wear.',
    reviews: [
      {
        rating: 4.9,
        text: 'The quality of the makeup products is amazing! Great for everyday use.',
      },
    ],
    avgRating: 4.9,
  },
];
