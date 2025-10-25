"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const CompanyLogos = () => {
  const Logos = [
    {
      name: "Jamuna TV",
      src: "/assets/logos/jamuna-tv.png",
      alt: "Jamuna TV Logo", // 0-100, where 100 is full grayscale
    },
    {
      name: "Fuel AI",
      src: "/assets/logos/fuelai-logo.png",
      alt: "Fuel AI Logo",
    },
    {
      name: "Fly Nepal",
      src: "/assets/logos/flynepal.png",
      alt: "Fly Nepal Logo",
    },
    {
      name: "Julfikar Steel",
      src: "/assets/logos/julfikar-steel.png",
      alt: "Julfikar Steel Logo",
      grayscaleIntensity: 100,
    },
    {
      name: "Ridge Park",
      src: "/assets/logos/ridge-park.png",
      alt: "Ridge Park Logo",
      grayscaleIntensity: 100,
    },
    {
      name: "My TV",
      src: "/assets/logos/my-tv.png",
      alt: "My TV Logo",
      grayscaleIntensity: 100,
    },
    {
      name: "MediGuru",
      src: "/assets/logos/mediguru.png",
      alt: "MediGuru Logo",
    },
    {
      name: "City Pass",
      src: "/assets/logos/city-pass.png",
      alt: "City Pass Logo",
    },
  ];

  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      ref={projectsRef}
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 xl:px-16 z-10"
    >
      <motion.div
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Logo Showcase */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-12">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-8">
              Trusted by industry leaders
            </h3>
          </div>
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center">
              {Logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 transition-all duration-300 hover:scale-105 group"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={80}
                    className={`w-full h-full object-contain transition-all duration-300
                    ${logo.grayscaleIntensity !== undefined ? "" : "filter grayscale"} 
                    opacity-60 group-hover:opacity-90 group-hover:grayscale
                    dark:brightness-0 dark:invert dark:opacity-70 dark:group-hover:opacity-95`}
                    style={{
                      minWidth: "80px",
                      minHeight: "40px",
                      ...(logo.grayscaleIntensity !== undefined && {
                        filter: `grayscale(${Math.min(logo.grayscaleIntensity + 20, 100)}%)`,
                      }),
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyLogos;
