import { appFeatures } from '../../data/appFeatures';

const AppPromo = () => (
  <section className="bg-white py-12">
    <div className="section-shell grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold font-display">Learning Continues in the Lumasha App</h2>
        <ul className="space-y-2 text-sm text-slate-700">
          {appFeatures.map((feature) => (
            <li key={feature}>✅ {feature}</li>
          ))}
        </ul>
        <div className="flex gap-3">
          <button className="bg-midnight text-white px-4 py-3 rounded-xl font-semibold">App Store</button>
          <button className="bg-green-500 text-white px-4 py-3 rounded-xl font-semibold">Google Play</button>
        </div>
        <p className="text-xs text-slate-500">Available on iOS & Android.</p>
      </div>
      <div className="bg-[#FFF5D9] rounded-3xl shadow-soft p-6">
        <div className="aspect-[3/4] bg-white rounded-[28px] shadow-playful flex items-center justify-center text-rose-400 text-xl font-display">
          App mockup placeholder
        </div>
      </div>
    </div>
  </section>
);

export default AppPromo;
