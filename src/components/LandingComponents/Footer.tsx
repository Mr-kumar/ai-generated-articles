// app/components/Footer.tsx
"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-200 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Article Generator. All rights
          reserved.
        </p>
        <div className="space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
