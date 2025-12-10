import { motion } from 'framer-motion';
import { categories } from '../../data/categories';
import { usePlayfulSound } from '../../hooks/usePlayfulSound';

const Categories = () => {
  const { playTone } = usePlayfulSound();

  return (
    <section className="section-shell py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold font-display">Explore Learning with Lumasha</h2>
        <p className="text-sm md:text-base text-slate-600 mt-2">
          Choose a path that matches your child’s mood today—play, read, color, or explore.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className="bg-white rounded-3xl p-4 shadow-soft hover:shadow-playful text-left focus:outline-none"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 180 }}
            onMouseEnter={playTone}
          >
            <img src={category.image} alt={category.title} className="w-full h-32 object-cover rounded-2xl mb-3" />
            <h3 className="font-semibold mb-1 text-base">{category.title}</h3>
            <p className="text-xs text-slate-600">{category.description}</p>
            <div className="mt-3 text-rose-500 font-semibold text-sm">View all →</div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
