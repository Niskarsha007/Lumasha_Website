const MissionSection = () => (
  <section className="section-shell py-12 grid md:grid-cols-2 gap-10 items-center">
    <div className="space-y-4">
      <p className="text-sm text-rose-400 font-semibold">The Lumasha Story</p>
      <h2 className="text-2xl md:text-3xl font-bold font-display">Why We Built Lumasha</h2>
      <p className="text-slate-700">
        We started Lumasha as parents who worried our kids would lose their language and culture while growing up abroad.
        Today, Lumasha brings together playful design, research-backed methods, and multilingual content so families around the
        world can keep their stories, songs, and words alive.
      </p>
      <ul className="space-y-2 text-sm text-midnight">
        <li>🌱 Encourage curiosity, not pressure</li>
        <li>🌍 Celebrate every language equally</li>
        <li>🧠 Align with early childhood development</li>
      </ul>
    </div>
    <div className="bg-white rounded-3xl shadow-playful p-6 text-center">
      <img src="/assets/illustrations/category-mats.svg" alt="Kids playing" className="mx-auto h-48 object-contain" />
      <p className="mt-3 text-sm text-slate-600">Illustration placeholder for multicultural kids playing with flashcards.</p>
    </div>
  </section>
);

export default MissionSection;
