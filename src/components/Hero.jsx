"use client";
import { curve, heroBackground, robot } from "@/assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { motion } from "framer-motion";

import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      id="hero"
      customPaddings="pt-[4.75rem] pb-16 lg:pt-[5.25rem] lg:pb-24"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[64rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <motion.h1
            className="h1 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Simplify Complexity, So You Can Focus on Growth – {` `}
            <span className="inline-block relative">
              AaladinAI{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>{" "}
          </motion.h1>
          <motion.p
            className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unleash the power of AI with Aaladin. We craft generative, adaptive
            AI solutions that make your product feel like magic.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button href="/pricing">Book a schedule</Button>
          </motion.div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
              {/* <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" /> */}

              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full h-full object-cover"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}
                <div>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-20 top-10 xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -left-20 top-10 xl:flex"
                    title="AI Model Training"
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-40 top-48 xl:flex"
                    title="Data Processing"
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -left-40 top-48 xl:flex"
                    title="API Integration"
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-20 top-[22rem] xl:flex"
                    title="Neural Networks"
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -left-20 top-[22rem] xl:flex"
                    title="Cloud Deployment"
                  />
                </ScrollParallax>
                </div>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-1 mt-20 mb-20 lg:block" />
      </div>

      {/* BottomLine intentionally removed earlier */}
    </Section>
  );
};

export default Hero;
