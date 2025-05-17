// app/components/Hero.tsx
"use client";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Text */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Unlock the Power of AI-Generated Articles
          </h1>
          <p className="mt-6 text-lg md:text-xl text-indigo-100 drop-shadow-md">
            Instantly create high-quality, engaging, and SEO-optimized articles
            with our AI-powered platform. Save time, boost productivity, and
            captivate your audience.
          </p>
        </div>
      </div>
    </section>
  );
}
