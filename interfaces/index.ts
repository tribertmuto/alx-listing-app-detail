export interface PropertyProps {
  name: string;
  rating: number;
  image: string;
  description: string;
  category: string[];
  address: {
    city: string;
    country: string;
  };
  price: number;
  reviews?: ReviewProps[];
}

export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}