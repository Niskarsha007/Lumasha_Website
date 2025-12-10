export type ProductStatus = 'in-stock' | 'preorder' | 'sold-out';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  badge?: string;
  status: ProductStatus;
  image: string;
  tags?: string[];
  preorder?: boolean;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GameTile {
  id: string;
  title: string;
  description: string;
  badge: string;
  label: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  videoUrl: string;
}
