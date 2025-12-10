import { motion } from 'framer-motion';
import { highlights } from '../../data/highlights';

const HighlightsStrip = () => (
  <section className="bg-[#FFF5D9] py-8">
    <div className="section-shell grid md:grid-cols-4 gap-6 text-sm">
      {highlights.map((item, index) => (
        <motion.div
          key={item.title}
          className="bg-white rounded-2xl p-4 shadow-soft"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <h3 className="font-semibold mb-1">{item.title}</h3>
          <p className="text-xs text-slate-600">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HighlightsStrip;
