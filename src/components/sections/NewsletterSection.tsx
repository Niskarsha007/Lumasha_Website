const NewsletterSection = () => (
  <section className="bg-[#E7D7FF] py-12">
    <div className="section-shell grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold font-display">Free Printables & Language Tips, Right in Your Inbox</h2>
        <p className="text-sm text-slate-700 mt-2">
          Get simple weekly ideas to use your home language—while cooking, driving, or playing.
        </p>
      </div>
      <div className="bg-white rounded-3xl p-6 shadow-soft space-y-3">
        <input type="email" placeholder="Your email" className="w-full border rounded-xl px-3 py-3 text-sm" />
        <select className="w-full border rounded-xl px-3 py-3 text-sm">
          <option>Age of child: 2–3</option>
          <option>Age of child: 4–6</option>
          <option>Age of child: 7–8</option>
        </select>
        <label className="flex items-center gap-2 text-xs text-slate-600">
          <input type="checkbox" /> Send me free printable worksheets too.
        </label>
        <button className="w-full px-4 py-3 rounded-xl bg-rose-500 text-white font-semibold shadow-playful">Send me ideas</button>
      </div>
    </div>
  </section>
);

export default NewsletterSection;
