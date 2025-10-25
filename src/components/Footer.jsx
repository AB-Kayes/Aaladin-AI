import React from "react";
import Link from "next/link";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container">
        {/* Office Information */}
        <div className="grid gap-8 md:grid-cols-3 mb-10 pb-8 border-b border-n-6">
          {/* Office Location */}
          <div className="text-center md:text-left">
            <h6 className="h6 mb-4 text-n-1">Our Office</h6>
            <div className="space-y-2">
              <p className="body-2 text-n-4">Gulshan 1, Dhaka</p>
              <p className="body-2 text-n-4">
                13th Floor, Crystal Palace,
                <br />
                Gulshan 1, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h6 className="h6 mb-4 text-n-1">Contact Info</h6>
            <div className="space-y-2">
              <p className="body-2 text-n-4">
                <a
                  href="tel:+8801798043626"
                  className="hover:text-n-1 transition-colors"
                >
                  +880-01798043626
                </a>
              </p>
              <p className="body-2 text-n-4">
                <a
                  href="mailto:contact@aaladinai.com"
                  className="hover:text-n-1 transition-colors"
                >
                  contact@aaladinai.com
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-center md:text-left">
            <h6 className="h6 mb-4 text-n-1">Business Hours</h6>
            <div className="space-y-2">
              <p className="body-2 text-n-4">Sun - Thu</p>
              <p className="body-2 text-n-4">9:00 AM - 6:00 PM PST</p>
            </div>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()} Aaladin. All rights reserved.
          </p>

          <div className="w-full sm:w-auto">
            <div className="flex justify-center sm:justify-end gap-4 sm:gap-6">
              <Link
                href="https://www.linkedin.com/company/aaladinai"
                target="_blank"
                aria-label="LinkedIn"
              >
                <svg
                  className="size-5 sm:size-6 fill-n-4 hover:fill-blue-500 duration-150 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
              <Link
                href="https://www.upwork.com/agencies/1884661209697720120/"
                target="_blank"
                aria-label="Upwork"
              >
                <svg
                  className="size-6 sm:size-7 fill-n-4 hover:fill-purple-500 duration-150 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/aaladinai"
                target="_blank"
                aria-label="Facebook"
              >
                <svg
                  className="size-5 sm:size-6 fill-n-4 hover:fill-blue-500 duration-150 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z" />
                </svg>
              </Link>
              {/* <Link
                href="https://twitter.com/aaladinai"
                target="_blank"
                aria-label="Twitter"
              >
                <svg
                  className="size-5 sm:size-6 fill-n-4 hover:fill-green-500 duration-150 transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
