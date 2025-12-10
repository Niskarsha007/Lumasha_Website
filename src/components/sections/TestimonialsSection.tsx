import { testimonials } from '../../data/testimonials';
import { motion } from 'framer-motion';

const TestimonialsSection = () => (
  <section className="section-shell py-12">
    <div className="text-center mb-6">
      <p className="text-sm text-rose-400 font-semibold">Real families, real languages, real giggles.</p>
      <h2 className="text-2xl md:text-3xl font-bold font-display">What Parents Are Saying</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, idx) => (
        <motion.div
          key={testimonial.id}
          className="bg-white rounded-3xl p-5 shadow-soft flex flex-col"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <img src={testimonial.avatar} alt="Family" className="w-12 h-12 rounded-full bg-rose-50" />
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-xs text-slate-500">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-sm text-slate-700 flex-1">“{testimonial.quote}”</p>
          <a href={testimonial.videoUrl} className="text-sm text-rose-500 font-semibold mt-3">
            Watch 20s video →
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
