import { motion } from 'framer-motion';
import { products } from '../../data/products';
import { useLumashaStore } from '../../store/useLumashaStore';

const FeaturedProducts = () => {
  const addToCart = useLumashaStore((s) => s.addToCart);

  return (
    <section className="section-shell py-12">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-display">Featured Learning Kits</h2>
          <p className="text-sm text-slate-600 mt-1">High-quality tools created for tiny hands and big imaginations.</p>
        </div>
        <button className="text-sm text-rose-500 font-semibold">View all products →</button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-3xl shadow-soft p-4 flex flex-col"
            whileHover={{ y: -6 }}
          >
            <div className="relative">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-2xl mb-3" />
              {product.badge && (
                <span className="absolute top-2 left-2 text-xs bg-white px-3 py-1 rounded-full shadow-playful text-rose-500 font-semibold">
                  {product.badge}
                </span>
              )}
            </div>
            <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
            <p className="text-sm text-slate-600 flex-1">{product.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">${product.price}</p>
                {product.preorder && <p className="text-[11px] text-amber-600 font-semibold">Pre-order ships soon</p>}
              </div>
              <button
                className="px-4 py-2 rounded-full bg-rose-500 text-white text-sm font-semibold shadow-playful"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
