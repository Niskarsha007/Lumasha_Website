import { Category } from '../types/content';

export const categories: Category[] = [
  {
    id: 'flashcards',
    title: 'Interactive Flashcards',
    description: 'Picture + word + sound for joyful learning.',
    image: '/assets/illustrations/category-flashcards.svg'
  },
  {
    id: 'pdfs',
    title: 'Educational PDFs & Books',
    description: 'Printable worksheets, stories & coloring pages.',
    image: '/assets/illustrations/category-pdfs.svg'
  },
  {
    id: 'mats',
    title: 'Physical Mats & Blocks',
    description: 'Big, durable tools for floor-time learning.',
    image: '/assets/illustrations/category-mats.svg'
  },
  {
    id: 'creative',
    title: 'Creative Activities',
    description: 'Coloring books and story-based crafts.',
    image: '/assets/illustrations/category-creative.svg'
  }
];
