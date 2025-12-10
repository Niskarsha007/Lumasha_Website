import { Testimonial } from '../types/content';

export const testimonials: Testimonial[] = [
  {
    id: 'parent-1',
    name: 'Aarav’s Mom',
    role: 'Preschool Parent',
    quote:
      'My son now uses Nepali words at breakfast without me reminding him. Lumasha made it feel like a game instead of homework.',
    avatar: '/assets/illustrations/category-flashcards.svg',
    videoUrl: 'https://example.com/video1'
  },
  {
    id: 'parent-2',
    name: 'Maya’s Dad',
    role: 'Homeschooling Parent',
    quote: 'We bond over the memory flip game every evening and add new words together.',
    avatar: '/assets/illustrations/category-mats.svg',
    videoUrl: 'https://example.com/video2'
  },
  {
    id: 'parent-3',
    name: 'Nora',
    role: 'Teacher',
    quote: 'The multilingual flashcards help my students feel seen and excited to share their language.',
    avatar: '/assets/illustrations/category-creative.svg',
    videoUrl: 'https://example.com/video3'
  }
];
