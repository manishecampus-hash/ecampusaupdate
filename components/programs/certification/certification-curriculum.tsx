export default function CertificationCurriculum() {
  return (
    <section className="py-20 bg-zinc-950 text-white px-6">
      {/* Curriculum section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Curriculum</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            HR Analytics Fundamentals
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">Workforce Planning</div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            People Management Strategies
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            Data-Driven HR Decision Making
          </div>
        </div>
      </div>
    </section>
  );
}
