// components/ClientLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/LandingComponents/Navbar";

import { Footer } from "@/components/LandingComponents/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
