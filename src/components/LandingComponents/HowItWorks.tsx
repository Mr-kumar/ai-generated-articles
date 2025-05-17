// app/components/HowItWorks.tsx
"use client";

export function HowItWorks() {
  return (
    <section className="py-20 bg-indigo-50 text-indigo-900">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold mb-12">How It Works</h2>
        <ol className="list-decimal list-inside space-y-6 text-lg leading-relaxed">
          <li>Enter your topic or keywords.</li>
          <li>Choose tone, length, and style preferences.</li>
          <li>
            Our AI instantly generates a unique article tailored to your needs.
          </li>
          <li>Review, edit if needed, and publish!</li>
        </ol>
      </div>
    </section>
  );
}
