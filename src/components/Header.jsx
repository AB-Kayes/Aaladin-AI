// useLocation replaced with window.location.hash for Next.js compatibility
"use client";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Link from "next/link";

import { aaladinLogoMain, aaladinLogoWhite } from "@/assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "@/components/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  // get current hash for active nav highlighting
  const pathname = {
    hash: typeof window !== "undefined" ? window.location.hash : "",
  };
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openProjectsDropdown, setOpenProjectsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

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

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setOpenProjectsDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenProjectsDropdown(false);
    }, 150); // Small delay to prevent accidental closing
  };

  // Close dropdown when clicking outside (only on mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Only close on mobile devices or when explicitly clicking outside
        if (window.innerWidth < 1024) {
          setOpenProjectsDropdown(false);
        }
      }
    };

    if (openProjectsDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openProjectsDropdown]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-5 z-50 w-full">
      <div className="container flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Glassy centered pill that matches .container width on large screens */}
        <div
          className="mx-auto w-full flex items-center gap-4 lg:gap-4 lg:bg-n-8/70 lg:backdrop-blur-md lg:rounded-[1rem] lg:px-3 py-1 lg:border lg:border-n-6"
          style={{ minHeight: "var(--header-height)" }}
        >
          <Link className="block w-[12rem] xl:mr-2" href="/">
            <img
              src={aaladinLogoWhite}
              width={190}
              height={40}
              alt="Your agency logo"
            />
          </Link>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:items-center lg:ml-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:gap-4">
              {navigation.map((item) => {
                // Handle Projects dropdown
                if (item.title === "Projects") {
                  return (
                    <div
                      key={item.id}
                      className="relative group"
                      ref={dropdownRef}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                          item.onlyMobile ? "lg:hidden" : ""
                        } px-6 py-6 md:py-4 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                          item.url === pathname.hash
                            ? "z-2 lg:text-n-1"
                            : "lg:text-n-1/50"
                        } lg:leading-5 lg:hover:text-n-1 xl:px-4 flex items-center`}
                      >
                        {item.title}
                        <svg
                          className={`w-4 h-4 ml-1 transition-transform ${
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

                      {/* Dropdown Menu */}
                      {openProjectsDropdown && (
                        <>
                          {/* Invisible bridge to prevent gap issues */}
                          <div className="absolute top-full left-0 right-0 h-2 bg-transparent z-40"></div>
                          <div className="absolute top-full left-0 mt-2 w-64 bg-n-8 border border-n-6 rounded-xl shadow-xl z-50">
                            <div className="p-2">
                              <Link
                                href="/projects/fundamental"
                                onClick={handleClick}
                                className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-4 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-4 hover:bg-n-7 rounded-lg"
                              >
                                Fundamental Projects
                              </Link>

                              <Link
                                href="/projects/incremental"
                                onClick={handleClick}
                                className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-4 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-4 hover:bg-n-7 rounded-lg"
                              >
                                Incremental Projects
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                }

                // Regular navigation items
                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    onClick={handleClick}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-4 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                      item.url === pathname.hash
                        ? "z-2 lg:text-n-1"
                        : "lg:text-n-1/50"
                    } lg:leading-5 lg:hover:text-n-1 xl:px-4`}
                  >
                    {item.title}
                  </Link>
                );
              })}

              {/* Get in touch button */}
              <div className="mt-6 lg:mt-0 lg:ml-4">
                <Button
                  href="/contact"
                  onClick={handleClick}
                  className="text-xs font-semibold"
                  px="px-4"
                >
                  Get a quote
                </Button>
              </div>
            </div>

            <HamburgerMenu />
          </nav>

          {/* CTA buttons removed, navigation now sits to the right of the logo */}
        </div>

        {/* Mobile hamburger on the right */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
