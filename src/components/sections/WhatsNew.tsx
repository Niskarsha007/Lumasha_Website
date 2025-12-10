import { newsFeed } from '../../data/news';

const WhatsNew = () => (
  <section className="bg-[#FFF9E7] py-12">
    <div className="section-shell grid md:grid-cols-3 gap-10">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4 font-display">What’s New at Lumasha?</h2>
        <div className="space-y-3 text-sm">
          {newsFeed.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-4 shadow-soft">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold">{item.title}</p>
                <span className="text-[11px] text-slate-500">{item.date}</span>
              </div>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 shadow-soft">
        <h3 className="font-semibold mb-2">Be the first to know</h3>
        <p className="text-xs text-slate-600 mb-3">
          Get early access to new languages, games and launch discounts.
        </p>
        <input type="email" placeholder="Your email" className="w-full border rounded-xl px-3 py-2 text-sm mb-2" />
        <select className="w-full border rounded-xl px-3 py-2 text-sm mb-2">
          <option>Age 2–3</option>
          <option>Age 4–6</option>
          <option>Age 7–8</option>
        </select>
        <label className="flex items-center gap-2 text-xs text-slate-600 mb-3">
          <input type="checkbox" /> Send me free printable worksheets too.
        </label>
        <button className="w-full px-3 py-2 rounded-xl bg-rose-500 text-white text-sm font-semibold shadow-playful">Notify me</button>
      </div>
    </div>
  </section>
);

export default WhatsNew;
