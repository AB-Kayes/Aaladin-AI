import Link from "next/link";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import Button from "./Button";
import { grid } from "@/assets";
import { Gradient } from "./design/Roadmap";
import AnimatedSection from "./AnimatedSection";
// Removed Sanity import

const IncrementalProjectsPage = ({ projects = [] }) => {
  return (
    <Section className="overflow-hidden" id="incremental-projects">
      <div className="container md:pb-10">
        <Heading tag="SaaS & Growth Solutions" title="Incremental Projects" />

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="h4 mb-4">Incremental Projects Coming Soon</h3>
              <p className="body-1 text-n-4 mb-6 max-w-2xl mx-auto">
                We're building innovative SaaS applications and incremental
                improvements that drive continuous growth and enhance existing
                systems.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto mb-8">
              <div className="p-6 bg-n-8 rounded-2xl border border-n-6">
                <h4 className="h6 mb-3 text-color-1">SaaS Applications</h4>
                <p className="text-sm text-n-4">
                  Scalable software-as-a-service solutions for modern businesses
                </p>
              </div>
              <div className="p-6 bg-n-8 rounded-2xl border border-n-6">
                <h4 className="h6 mb-3 text-color-1">Progressive Web Apps</h4>
                <p className="text-sm text-n-4">
                  Cross-platform applications with native app-like experiences
                </p>
              </div>
              <div className="p-6 bg-n-8 rounded-2xl border border-n-6">
                <h4 className="h6 mb-3 text-color-1">API Integrations</h4>
                <p className="text-sm text-n-4">
                  Seamless connectivity between different systems and platforms
                </p>
              </div>
              <div className="p-6 bg-n-8 rounded-2xl border border-n-6">
                <h4 className="h6 mb-3 text-color-1">Feature Enhancements</h4>
                <p className="text-sm text-n-4">
                  Continuous improvements and new features for existing
                  applications
                </p>
              </div>
            </div>
            <Button href="/contact">Start Your SaaS Project</Button>
          </div>
        ) : (
          <>
            <div className="relative grid gap-12 md:grid-cols-2 md:gap-10 md:pb-[7rem]">
              {projects.map((project, index) => {
                return (
                  <Link
                    href={`/projects/incremental/${project.slug}`}
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
              <Button href="/contact">Start Your SaaS Project</Button>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default IncrementalProjectsPage;
