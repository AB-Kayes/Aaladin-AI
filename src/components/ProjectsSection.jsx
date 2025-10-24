import Link from "next/link";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { check2, grid, loading1 } from "@/assets";
import { Gradient } from "./design/Roadmap";
import AnimatedSection from "./AnimatedSection";
import { urlFor } from "@/lib/sanity";

const ProjectsSection = ({ projects = [] }) => {
  // If no projects from Sanity, show empty state
  if (!projects || projects.length === 0) {
    return (
      <Section className="overflow-hidden" id="projects">
        <div className="container md:pb-10">
          <Heading
            tag="Crafted with Innovation & Passion"
            title="Our Featured Projects"
          />
          <div className="text-center py-20">
            <p className="body-1 text-n-4 mb-6">
              We're working on showcasing our amazing projects. Check back soon!
            </p>
            <Button href="/#contact">Get in touch</Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="overflow-hidden" id="projects">
      <div className="container md:pb-10">
        <Heading
          tag="Crafted with Innovation & Passion"
          title="Our Featured Projects"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {projects.slice(0, 4).map((project, index) => {
            const status =
              project.status === "done"
                ? "Completed"
                : project.status === "progress"
                  ? "In Progress"
                  : "Planning";

            return (
              <AnimatedSection
                key={project._id}
                direction="scale"
                delay={index * 0.2}
                className="md:flex"
              >
                <Link
                  href={`/projects/${project.slug.current}`}
                  className="block group cursor-pointer"
                >
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
                            {project.completionDate || project.client}
                          </Tagline>

                          <div className="flex items-center px-3 py-1 bg-n-1 rounded text-n-8">
                            <img
                              className="mr-2"
                              src={
                                project.status === "done" ? check2 : loading1
                              }
                              width={14}
                              height={14}
                              alt={status}
                            />
                            <div className="text-xs font-semibold">
                              {status}
                            </div>
                          </div>
                        </div>

                        <div className="mb-6 -mx-6 xl:-mx-8 overflow-hidden rounded-lg">
                          <img
                            className="w-full rounded-lg group-hover:scale-110 transition-transform duration-300"
                            src={
                              project.mainImage?.asset
                                ? urlFor(project.mainImage)
                                    .width(600)
                                    .height(400)
                                    .url()
                                : project.mainImage
                            }
                            width={400}
                            height={250}
                            alt={project.title}
                          />
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
              </AnimatedSection>
            );
          })}

          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/projects">View all projects</Button>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
