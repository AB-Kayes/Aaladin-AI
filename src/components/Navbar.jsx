"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-6xl backdrop-blur-md bg-white/5 border border-white/6 rounded-xl z-40"
    >
      <div className="mx-6 my-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary/80 to-cyan-400 flex items-center justify-center text-white">
            💫
          </div>
          <span className="font-orbitron text-lg">Aaladin AI</span>
        </Link>
        <div className="hidden sm:flex gap-6 items-center text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/our-universe">Our Universe</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
}
