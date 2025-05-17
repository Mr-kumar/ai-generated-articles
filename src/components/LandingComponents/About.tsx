// app/components/About.tsx
"use client";

export function About() {
  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center mb-6">About Us</h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
          We're on a mission to revolutionize content creation through the power
          of artificial intelligence. Our platform empowers writers, marketers,
          and businesses to generate high-quality, engaging articles in seconds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 space-y-4">
            <h3 className="text-2xl font-semibold">Who We Are</h3>
            <p>
              We are a team of AI enthusiasts, developers, and content creators
              who believe that writing should be easier, faster, and smarter.
              Our technology blends natural language processing with creativity
              to help bring your ideas to life.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 space-y-4">
            <h3 className="text-2xl font-semibold">What We Offer</h3>
            <p>
              From blog posts and newsletters to SEO-rich content, our AI
              article generator handles it all. Tailored to your tone and style
              preferences, our tools help you stay consistent and productive.
            </p>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-extrabold text-center mb-6">
            Our Mission
          </h3>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
            Our mission is to empower individuals and organizations to harness
            the full potential of AI in content creation. We strive to make
            high-quality writing accessible to everyone, regardless of their
            background or expertise.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-extrabold text-center mb-6">
            Our Values
          </h3>
          <ul className="list-disc list-inside max-w-3xl mx-auto mb-10">
            <li className="text-lg">
              Innovation: We embrace new technologies and ideas.
            </li>
            <li className="text-lg">
              Quality: We prioritize high-quality content generation.
            </li>
            <li className="text-lg">
              Accessibility: We make our tools user-friendly for everyone.
            </li>
            <li className="text-lg">
              Collaboration: We believe in the power of teamwork and community.
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-extrabold text-center mb-6">
            Testimonials
          </h3>
          <blockquote className="bg-white rounded-lg shadow-lg p-6 text-center">
            <p className="text-lg italic mb-4">
              "This platform has transformed the way I create content. It's
              fast, efficient, and the quality is outstanding!"
            </p>
            <cite className="font-semibold">- Jane Doe, Content Marketer</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
