import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Luxury Villa with Pool",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    description: "Experience luxury at its finest in this stunning villa featuring a private pool, spacious living areas, and breathtaking views. Perfect for families and groups looking for an unforgettable vacation rental.",
    category: ["Pool", "WiFi", "Air Conditioning", "Kitchen", "Parking", "Garden"],
    address: {
      city: "Miami",
      country: "USA"
    },
    price: 250,
    reviews: [
      {
        name: "John Smith",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        rating: 5,
        comment: "Amazing property! The pool was perfect and the location was great. Highly recommend!"
      },
      {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
        rating: 4,
        comment: "Beautiful villa with excellent amenities. The host was very responsive and helpful."
      }
    ]
  },
  {
    name: "Cozy Mountain Cabin",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    description: "Escape to this charming mountain cabin surrounded by nature. Features a fireplace, full kitchen, and hiking trails right outside your door.",
    category: ["Fireplace", "Kitchen", "WiFi", "Hiking", "Mountain View"],
    address: {
      city: "Aspen",
      country: "USA"
    },
    price: 180,
    reviews: [
      {
        name: "Mike Wilson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        rating: 5,
        comment: "Perfect mountain getaway! Very peaceful and well-equipped."
      }
    ]
  },
  {
    name: "Beachfront Condo",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    description: "Wake up to ocean views in this modern beachfront condo. Steps from the beach with all modern amenities.",
    category: ["Beach Access", "Ocean View", "WiFi", "Air Conditioning", "Balcony"],
    address: {
      city: "San Diego",
      country: "USA"
    },
    price: 300,
    reviews: [
      {
        name: "Emily Davis",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        rating: 5,
        comment: "Incredible ocean views and perfect location. Would definitely stay again!"
      }
    ]
  }
];