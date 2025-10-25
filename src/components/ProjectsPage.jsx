import Link from "next/link";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import Button from "./Button";
import { allProjects } from "../constants";
import { check2, grid, loading1 } from "@/assets";
import { Gradient } from "./design/Roadmap";

const ProjectsPage = () => (
  <Section className="overflow-hidden" id="all-projects">
    <div className="container md:pb-10">
      <Heading tag="Complete Portfolio" title="All Our Projects" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {allProjects.map((item, index) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <Link
              href={`/projects/${item.id}`}
              className={`block group cursor-pointer md:flex even:md:translate-y-[7rem]`}
              key={item.id}
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
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-3 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2"
                          src={item.status === "done" ? check2 : loading1}
                          width={14}
                          height={14}
                          alt={status}
                        />
                        <div className="text-xs font-semibold">{status}</div>
                      </div>
                    </div>

                    <div className="mb-6 -mx-6 xl:-mx-8 overflow-hidden rounded-lg">
                      <img
                        className="w-full rounded-lg group-hover:scale-110 transition-transform duration-300"
                        src={item.imageUrl}
                        width={400}
                        height={250}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h5 mb-3 group-hover:text-color-1 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="body-2 text-n-4 text-sm leading-relaxed group-hover:text-n-3 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}

        <Gradient />
      </div>

      <div className="text-center mt-12">
        <p className="body-2 text-n-4 mb-6">
          Interested in working with us? Let's discuss your next project.
        </p>
        <Button href="/contact">Get in touch</Button>
      </div>
    </div>
  </Section>
);

export default ProjectsPage;
