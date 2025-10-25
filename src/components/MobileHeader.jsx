"use client";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { aaladinLogoWhite } from "@/assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "@/components/svg/MenuSvg";

const MobileHeader = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openProjectsDropdown, setOpenProjectsDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  // Mobile dropdown handlers
  const handleMobileProjectsToggle = () => {
    setOpenProjectsDropdown(!openProjectsDropdown);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
        isScrolled || openNavigation
          ? "bg-n-8/95 backdrop-blur-md border-b border-n-6/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={aaladinLogoWhite}
              width={250}
              height={60}
              alt="Aaladin AI"
              className="h-16 w-auto lg:h-12"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleNavigation}
            className="lg:hidden p-2 rounded-lg hover:bg-n-7/50 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {openNavigation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bg-n-8/95 backdrop-blur-md z-[70] lg:hidden"
            onClick={handleClick}
            style={{
              position: "fixed",
              top: "5rem",
              left: 0,
              right: 0,
              bottom: 0,
              height: "calc(100vh - 5rem)",
            }}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 w-80 max-w-[85vw] bg-n-8 border-l border-n-6/50 z-[75]"
              style={{
                position: "absolute",
                right: 0,
                height: "calc(100vh - 5rem)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Navigation Links */}
                <div className="flex-1 px-6 space-y-2">
                  {navigation.map((item) => {
                    if (item.title === "Projects") {
                      return (
                        <div key={item.id} className="space-y-2">
                          <button
                            onClick={handleMobileProjectsToggle}
                            className="flex items-center justify-between w-full px-4 py-3 text-left text-n-1 hover:bg-n-7/50 rounded-lg transition-colors duration-200"
                          >
                            <span className="text-lg font-medium">
                              {item.title}
                            </span>
                            <svg
                              className={`w-5 h-5 transition-transform duration-200 ${
                                openProjectsDropdown ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {openProjectsDropdown && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 space-y-1">
                                  <Link
                                    href="/projects/fundamental"
                                    onClick={handleClick}
                                    className="block px-4 py-2 text-n-1/70 hover:text-n-1 hover:bg-n-7/50 rounded-lg transition-colors duration-200"
                                  >
                                    Fundamental Projects
                                  </Link>
                                  <Link
                                    href="/projects/incremental"
                                    onClick={handleClick}
                                    className="block px-4 py-2 text-n-1/70 hover:text-n-1 hover:bg-n-7/50 rounded-lg transition-colors duration-200"
                                  >
                                    Incremental Projects
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.id}
                        href={item.url}
                        onClick={handleClick}
                        className="block px-4 py-3 text-lg font-medium text-n-1 hover:bg-n-7/50 rounded-lg transition-colors duration-200"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA Button */}
                <div className="p-6 border-t border-n-6/50">
                  <Button
                    href="/contact"
                    onClick={handleClick}
                    className="w-full text-center font-semibold py-3"
                  >
                    Get a quote
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default MobileHeader;
