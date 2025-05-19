import React from "react";
import { motion } from "framer-motion";
import './footer.css'

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-sans">
      {/* Main Content */}
      

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-6 text-xs md:text-sm">
        <p className="font-semibold">A proud venture by 9 Figures Club Private Limited</p>
        <p>Contact Us: <a href="mailto:learn@9figures.club" className="underline">learn@9figures.club</a></p>
        <p>CIN: U52399MH2022PTC381538 | GST: 27AABCD9503F1Z8</p>
        <p>
          Official Address: Shop 1 and 2, New Woodland Building, Shastri Nagar,
          Vasai West
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a href="#" className="underline">
            About Us
          </a>
          <a href="#" className="underline">
            Contact Us
          </a>
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Refund Policy
          </a>
        </div>
        <p className="mt-4">
          This site is not part of the Facebook website or Facebook Inc. Additionally,
          this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark
          of FACEBOOK, Inc.
        </p>
      </footer>
    </div>
  );
}