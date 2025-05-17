// app/components/Testimonials.tsx
"use client";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  photo: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    role: "Content Manager",
    photo: "/users/sarah.jpg",
    feedback:
      "This AI article generator saved us so much time and improved our content quality drastically!",
  },
  {
    id: 2,
    name: "James L.",
    role: "SEO Specialist",
    photo: "/users/james.jpg",
    feedback:
      "The SEO optimization built into the articles helped our site climb the search rankings fast.",
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Freelance Writer",
    photo: "/users/emily.jpg",
    feedback:
      "I love how customizable the tone and style options are. It really feels like my own writing.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
        <h2 className="text-3xl font-extrabold mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map(({ id, name, role, photo, feedback }) => (
            <div
              key={id}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition text-left"
            >
              <p className="mb-4 italic">"{feedback}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={photo}
                  alt={`${name} photo`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-gray-600">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
