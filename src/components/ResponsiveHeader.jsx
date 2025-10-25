"use client";
import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const ResponsiveHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsLoading(false);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Show loading state to prevent hydration mismatch
  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 right-0 z-[80] h-20 lg:h-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <div className="flex items-center space-x-2">
              <div className="h-16 w-48 bg-n-7/20 rounded animate-pulse lg:h-12"></div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="h-4 w-16 bg-n-7/20 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-n-7/20 rounded animate-pulse"></div>
              <div className="h-4 w-16 bg-n-7/20 rounded animate-pulse"></div>
            </div>
            <div className="hidden lg:block">
              <div className="h-10 w-24 bg-n-7/20 rounded animate-pulse"></div>
            </div>
            <div className="lg:hidden">
              <div className="h-8 w-8 bg-n-7/20 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Conditionally render desktop or mobile header
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default ResponsiveHeader;
