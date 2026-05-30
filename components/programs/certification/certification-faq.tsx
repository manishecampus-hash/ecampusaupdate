export default function CertificationFAQ() {
  return (
    <section className="py-20 px-6 bg-white">
      {/* FAQ section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">What is the course duration?</h3>
            <p className="mt-2 text-zinc-600">The duration is 8 months.</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Is the certification online?</h3>
            <p className="mt-2 text-zinc-600">Yes, it is fully online.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
