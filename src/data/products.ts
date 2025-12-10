import { Product } from '../types/content';

export const products: Product[] = [
  {
    id: 'flashcards-ne-hi-en',
    title: 'LumaLingo Flashcards Set – Nepali, Hindi & English',
    description: 'Durable Montessori-inspired cards with phonics, QR sound tags, and playful characters.',
    price: 59,
    badge: 'Bestseller',
    status: 'in-stock',
    image: '/assets/illustrations/category-flashcards.svg',
    tags: ['flashcards', 'multilingual', 'kids'],
    preorder: false
  },
  {
    id: 'coloring-book-nepali',
    title: 'Nepali Alphabet Coloring Book',
    description: 'Thick pages, bold strokes, and trace-friendly guides for little hands.',
    price: 24,
    badge: 'New',
    status: 'preorder',
    image: '/assets/illustrations/category-creative.svg',
    tags: ['coloring', 'printables'],
    preorder: true
  },
  {
    id: 'play-mat-transport',
    title: 'Multilingual Animal & Transport Mat',
    description: 'Floor-friendly play mat with Nepali, Hindi, and English labels.',
    price: 89,
    badge: 'Pre-order',
    status: 'preorder',
    image: '/assets/illustrations/category-mats.svg',
    tags: ['mat', 'blocks'],
    preorder: true
  }
];
