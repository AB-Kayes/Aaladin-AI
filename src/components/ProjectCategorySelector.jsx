import Link from "next/link";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { check2, grid, loading1 } from "@/assets";
import { Gradient } from "./design/Roadmap";
import AnimatedSection from "./AnimatedSection";

const ProjectCategorySelector = () => {
  const categories = [
    {
      id: "fundamental",
      title: "Fundamental Projects",
      description:
        "Core AI solutions and foundational technology projects that form the backbone of digital transformation.",
      features: [
        "AI Model Development",
        "Machine Learning Solutions",
        "Data Analytics Platforms",
        "Core System Architecture",
      ],
      href: "/projects/fundamental",
    },
    {
      id: "incremental",
      title: "Incremental Projects",
      description:
        "SaaS applications and incremental improvements that build upon existing systems and drive continuous growth.",
      features: [
        "SaaS Applications",
        "Progressive Web Apps",
        "API Integrations",
        "Feature Enhancements",
      ],
      href: "/projects/incremental",
    },
  ];

  return (
    <Section className="overflow-hidden" id="project-categories">
      <div className="container md:pb-10">
        <Heading
          tag="Choose Your Project Type"
          title="Our Project Categories"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {categories.map((category, index) => (
            <AnimatedSection
              key={category.id}
              direction="scale"
              delay={index * 0.2}
              className="md:flex"
            >
              <Link href={category.href} className="block group cursor-pointer">
                <div className="p-0.25 rounded-[2.5rem] bg-n-6 group-hover:bg-conic-gradient transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="relative p-6 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-8 h-full group-hover:bg-n-7 transition-all duration-300">
                    <div className="absolute top-0 left-0 max-w-full opacity-50">
                      <img
                        className="w-full"
                        src={grid}
                        width={550}
                        height={550}
                        alt="Grid"
                      />
                    </div>
                    <div className="relative z-1">
                      <div className="flex items-center justify-between mb-6 md:mb-8">
                        <Tagline>
                          {category.icon} {category.title}
                        </Tagline>

                        <div className="flex items-center px-3 py-1 bg-n-1 rounded text-n-8">
                          <img
                            className="mr-2"
                            src={check2}
                            width={14}
                            height={14}
                            alt="Available"
                          />
                          <div className="text-xs font-semibold">Available</div>
                        </div>
                      </div>

                      <h4 className="h5 mb-3 group-hover:text-color-1 transition-colors duration-300">
                        {category.title}
                      </h4>

                      <p className="body-2 text-n-4 text-sm leading-relaxed group-hover:text-n-3 transition-colors duration-300 mb-4">
                        {category.description}
                      </p>

                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-n-2 mb-2">
                          Key Features:
                        </h5>
                        <ul className="space-y-1">
                          {category.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-n-4 flex items-center"
                            >
                              <span className="w-1.5 h-1.5 bg-color-1 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default ProjectCategorySelector;
