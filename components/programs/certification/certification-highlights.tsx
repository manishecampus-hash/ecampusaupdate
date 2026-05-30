export default function CertificationHighlights() {
  return (
    <section className="py-20 bg-zinc-950 text-white px-6">
      {/* Key highlights section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Key Highlights</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">Live Online Sessions</div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            Industry Expert Faculty
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">Real-World Projects</div>
        </div>
      </div>
    </section>
  );
}
