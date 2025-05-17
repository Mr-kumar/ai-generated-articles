import React from "react";
import { Navbar } from "@/components/LandingComponents/Navbar";

import { Hero } from "@/components/LandingComponents/Hero";
import { Features } from "@/components/LandingComponents/Features";
import { HowItWorks } from "@/components/LandingComponents/HowItWorks";
import { Testimonials } from "@/components/LandingComponents/Testimonials";
import { Footer } from "@/components/LandingComponents/Footer";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
