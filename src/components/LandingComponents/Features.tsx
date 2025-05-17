// app/components/Features.tsx
"use client";

export function Features() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">
        <h2 className="text-3xl font-extrabold mb-12">
          Why Choose Our AI Article Generator?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Save Time</h3>
            <p>
              Generate well-researched, engaging articles in seconds instead of
              hours.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">SEO Optimized</h3>
            <p>
              AI-crafted content designed to rank higher in search engines
              effortlessly.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Customizable</h3>
            <p>
              Fine-tune the tone and style to fit your brand and audience
              perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
