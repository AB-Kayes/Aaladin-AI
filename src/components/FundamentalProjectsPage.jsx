import Link from "next/link";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import Button from "./Button";
import { grid } from "@/assets";
import { Gradient } from "./design/Roadmap";
import AnimatedSection from "./AnimatedSection";
// Removed Sanity import

const FundamentalProjectsPage = ({ projects = [] }) => {
  return (
    <Section className="overflow-hidden" id="fundamental-projects">
      <div className="container md:pb-10">
        <Heading tag="Core AI Solutions" title="Fundamental Projects" />

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="h4 mb-4">Fundamental Projects Coming Soon</h3>
              <p className="body-1 text-n-4 mb-6 max-w-2xl mx-auto">
                We're developing cutting-edge AI solutions and foundational
                technology projects. These core systems form the backbone of
                digital transformation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto mb-8">
              <div className="p-6 bg-n-8 rounded-2xl border border-n-6">
                <h4 className="h6 mb-3 text-color-1">AI Model Development</h4>
                <p className="text-sm text-n-4">
                  Custom machine learning models tailored to your business needs
                </p>
              </div>
              <div className="p-6 bg-n-8 rounded-2xl border border-n-6">
                <h4 className="h6 mb-3 text-color-1">
                  Data Analytics Platforms
                </h4>
                <p className="text-sm text-n-4">
                  Comprehensive data processing and visualization solutions
                </p>
              </div>
              <div className="p-6 bg-n-8 rounded-2xl border border-n-6">
                <h4 className="h6 mb-3 text-color-1">
                  Core System Architecture
                </h4>
                <p className="text-sm text-n-4">
                  Robust, scalable infrastructure for enterprise applications
                </p>
              </div>
              <div className="p-6 bg-n-8 rounded-2xl border border-n-6">
                <h4 className="h6 mb-3 text-color-1">
                  Machine Learning Solutions
                </h4>
                <p className="text-sm text-n-4">
                  Advanced ML algorithms for predictive analytics and automation
                </p>
              </div>
            </div>
            <Button href="/contact">Get Started with AI</Button>
          </div>
        ) : (
          <>
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
              {projects.map((project, index) => {
                return (
                  <Link
                    href={`/projects/fundamental/${project.slug}`}
                    className={`block group cursor-pointer md:flex even:md:translate-y-[7rem]`}
                    key={project.id}
                  >
                    <div className="p-0.25 rounded-[2.5rem] bg-n-6 group-hover:bg-conic-gradient transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                      <div className="relative bg-n-8 rounded-[2.4375rem] overflow-hidden h-full group-hover:bg-n-7 transition-all duration-300">
                        <div className="absolute top-0 left-0 max-w-full opacity-50">
                          <img
                            className="w-full"
                            src={grid}
                            width={550}
                            height={550}
                            alt="Grid"
                          />
                        </div>
                        <div className="overflow-hidden rounded-t-[2.4375rem] relative z-1">
                          <img
                            className="w-full group-hover:scale-110 transition-transform duration-300"
                            src={project.mainImage}
                            width={400}
                            height={250}
                            alt={project.title}
                          />
                        </div>
                        <div className="relative z-1 p-6 xl:p-8">
                          <div className="flex items-center justify-between mb-6 md:mb-8">
                            <Tagline>
                              {project.completionDate || project.client}
                            </Tagline>
                          </div>
                          <h4 className="h5 mb-3 group-hover:text-color-1 transition-colors duration-300">
                            {project.title}
                          </h4>
                          <p className="body-2 text-n-4 text-sm leading-relaxed group-hover:text-n-3 transition-colors duration-300">
                            {project.shortDescription || project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}

              <Gradient />
            </div>

            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
              <Button href="/contact">Start Your AI Project</Button>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default FundamentalProjectsPage;
