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
                  href="tel:+8801798777566"
                  className="hover:text-n-1 transition-colors"
                >
                  +880-01798777566
                </a>
              </p>
              <p className="body-2 text-n-4">
                <a
                  href="tel:+8801875490002"
                  className="hover:text-n-1 transition-colors"
                >
                  +880 1875-490002
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
              <p className="body-2 text-n-4">Mon-Fri:</p>
              <p className="body-2 text-n-4">9:00 AM - 6:00 PM PST</p>
            </div>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()} Aaladin. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
