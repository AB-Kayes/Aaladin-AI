"use client";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { aaladinLogoMain, aaladinLogoWhite } from "@/assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "@/components/svg/MenuSvg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openProjectsDropdown, setOpenProjectsDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Handle scroll effect and screen size
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial mobile state
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
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

  // Desktop dropdown handlers
  const handleDesktopProjectsToggle = () => {
    if (!isMobile) {
      setOpenProjectsDropdown(!openProjectsDropdown);
    }
  };

  // Mobile dropdown handlers
  const handleMobileProjectsToggle = () => {
    if (isMobile) {
      setOpenProjectsDropdown(!openProjectsDropdown);
    }
  };

  // Desktop hover handlers (only for desktop)
  const handleMouseEnter = () => {
    if (!isMobile) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setOpenProjectsDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      hoverTimeoutRef.current = setTimeout(() => {
        setOpenProjectsDropdown(false);
      }, 150);
    }
  };

  // Close dropdown when clicking outside (only on desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Only close on desktop, not on mobile
        if (!isMobile) {
          setOpenProjectsDropdown(false);
        }
      }
    };

    if (openProjectsDropdown && !isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openProjectsDropdown, isMobile]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Desktop Navigation Component
  const DesktopNavigation = () => (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigation.map((item) => {
        if (item.title === "Projects") {
          return (
            <div
              key={item.id}
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={handleDesktopProjectsToggle}
                className="flex items-center space-x-1 text-n-1/70 hover:text-n-1 transition-colors duration-200 font-medium"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
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
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-n-8/95 backdrop-blur-md border border-n-6/50 rounded-xl shadow-xl z-50"
                  >
                    <div className="p-2">
                      <Link
                        href="/projects/fundamental"
                        className="block px-4 py-3 text-n-1/70 hover:text-n-1 hover:bg-n-7/50 rounded-lg transition-all duration-200"
                      >
                        Fundamental Projects
                      </Link>
                      <Link
                        href="/projects/incremental"
                        className="block px-4 py-3 text-n-1/70 hover:text-n-1 hover:bg-n-7/50 rounded-lg transition-all duration-200"
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
            className="text-n-1/70 hover:text-n-1 transition-colors duration-200 font-medium"
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );

  // Mobile Navigation Component
  const MobileNavigation = () => (
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
            className="absolute right-0 top-20 w-80 max-w-[85vw] bg-n-8 border-l border-n-6/50 z-[75]"
            style={{
              position: "absolute",
              top: "5rem",
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
  );

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

          {/* Desktop Navigation */}
          <DesktopNavigation />

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              href="/contact"
              className="text-sm font-semibold px-6 py-2.5"
            >
              Get a quote
            </Button>
          </div>

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

      {/* Mobile Navigation */}
      <MobileNavigation />
    </motion.header>
  );
};

export default Header;
