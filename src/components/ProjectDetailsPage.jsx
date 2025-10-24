"use client";
import { useState } from "react";
import Link from "next/link";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { check2, grid, loading1 } from "@/assets";
import { urlFor } from "@/lib/sanity";
import ButtonSvg from "@/components/svg/ButtonSvg";

// External Button component for live project links
const ExternalButton = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-1 ${className}`}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      {ButtonSvg(false)}
    </a>
  );
};

const ProjectDetailsPage = ({ project, relatedProjects = [] }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container text-center">
          <h1 className="h1 mb-6">Project Not Found</h1>
          <p className="body-1 mb-8 text-n-4">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </Section>
    );
  }

  const status =
    project.status === "done"
      ? "Completed"
      : project.status === "progress"
        ? "In Progress"
        : "Planning";

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      {/* Hero Section */}
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container">
          <div className="relative">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center text-n-4 hover:text-n-1 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Projects
              </Link>
            </div>

            {/* Project Header */}
            <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center px-4 py-2 bg-n-1 rounded text-n-8 mr-4">
                  <img
                    className="mr-2"
                    src={project.status === "done" ? check2 : loading1}
                    width={16}
                    height={16}
                    alt={status}
                  />
                  <div className="tagline">{status}</div>
                </div>
                <span className="tagline text-n-4">
                  {project.completionDate || project.client}
                </span>
              </div>

              <h1 className="h1 mb-6">{project.title}</h1>
              <p className="body-1 text-n-4 mb-6">{project.description}</p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="text-center">
                  <p className="caption text-n-4">Client</p>
                  <p className="body-2 text-n-1">{project.client}</p>
                </div>
                {project.currentStatus && (
                  <div className="text-center">
                    <p className="caption text-n-4">Status</p>
                    <p className="body-2 text-n-1">{project.currentStatus}</p>
                  </div>
                )}
              </div>

              {/* Live Links */}
              <div className="flex flex-wrap justify-center gap-4">
                {project.liveUrl && (
                  <ExternalButton href={project.liveUrl}>
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live Project
                  </ExternalButton>
                )}

                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-n-6 hover:bg-n-5 rounded-lg text-n-1 font-semibold transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </a>
                )}

                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-n-6 hover:bg-n-5 rounded-lg text-n-1 font-semibold transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </a>
                )}

                {project.chromeStoreUrl && (
                  <a
                    href={project.chromeStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-n-6 hover:bg-n-5 rounded-lg text-n-1 font-semibold transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,20L15.46,14H8.54L12,20M12,4C16.42,4 20,7.58 20,12H13L12,4M12,4L8.54,10H15.46L12,4M4,12C4,7.58 7.58,4 12,4V11L4,12Z" />
                    </svg>
                    Chrome Store
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-n-6 hover:bg-n-5 rounded-lg text-n-1 font-semibold transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                )}

                {!project.liveUrl &&
                  !project.appStoreUrl &&
                  !project.playStoreUrl &&
                  !project.chromeStoreUrl &&
                  !project.githubUrl && (
                    <div className="inline-flex items-center px-6 py-3 bg-n-7 rounded-lg text-n-4 font-semibold">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Coming Soon
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Screenshots Gallery */}
      <Section>
        <div className="container">
          <Heading
            title="Project Screenshots"
            text="Visual overview of the project interface and key features"
          />

          <div className="relative max-w-[62rem] mx-auto">
            {/* Main Image */}
            <div className="relative bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden mb-8">
              <div className="absolute top-0 left-0 max-w-full opacity-50">
                <img
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1 p-8">
                <img
                  className="w-full rounded-2xl"
                  src={
                    project.screenshots?.[selectedImage]?.asset
                      ? urlFor(project.screenshots[selectedImage])
                          .width(800)
                          .height(600)
                          .url()
                      : project.screenshots?.[selectedImage] ||
                        (project.mainImage?.asset
                          ? urlFor(project.mainImage)
                              .width(800)
                              .height(600)
                              .url()
                          : project.mainImage)
                  }
                  alt={`${project.title} Screenshot ${selectedImage + 1}`}
                />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {project.screenshots && project.screenshots.length > 1 && (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative p-2 rounded-xl transition-all duration-300 ${
                      selectedImage === index
                        ? "bg-conic-gradient"
                        : "bg-n-6 hover:bg-n-5"
                    }`}
                  >
                    <div className="relative bg-n-8 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-20 object-cover"
                        src={
                          screenshot?.asset
                            ? urlFor(screenshot).width(200).height(150).url()
                            : screenshot
                        }
                        alt={`Screenshot ${index + 1}`}
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Project Details */}
      <Section>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Problem & Solution */}
            <div className="space-y-8">
              {project.problem && (
                <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-8">
                  <h3 className="h4 mb-4">The Challenge</h3>
                  <p className="body-2 text-n-4">{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-8">
                  <h3 className="h4 mb-4">Our Solution</h3>
                  <p className="body-2 text-n-4">{project.solution}</p>
                </div>
              )}
            </div>

            {/* Technologies & Features */}
            <div className="space-y-8">
              {project.technologies && project.technologies.length > 0 && (
                <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-8">
                  <h3 className="h4 mb-6">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-n-6 rounded-full text-sm text-n-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.features && project.features.length > 0 && (
                <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-8">
                  <h3 className="h4 mb-6">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <img
                          className="mr-3 mt-1"
                          src={check2}
                          width={16}
                          height={16}
                          alt="Check"
                        />
                        <span className="body-2 text-n-4">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Results & Impact */}
      {project.results && project.results.length > 0 && (
        <Section>
          <div className="container">
            <Heading
              title="Results & Impact"
              text="Measurable outcomes and business impact achieved"
            />

            <div className="relative max-w-[62rem] mx-auto">
              <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-8 lg:p-16">
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
                  <div className="grid gap-8 md:grid-cols-2">
                    {project.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-conic-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                          <img
                            src={check2}
                            width={24}
                            height={24}
                            alt="Success"
                          />
                        </div>
                        <p className="body-1 text-n-1 font-semibold">
                          {result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section>
        <div className="container text-center">
          <div className="relative max-w-[50rem] mx-auto">
            <h2 className="h2 mb-6">Ready to Start Your Project?</h2>
            <p className="body-1 text-n-4 mb-8">
              Let's discuss how we can help you achieve similar results for your
              business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button>Get a Quote</Button>
              </Link>
              <Link href="/projects">
                <Button white>View More Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectDetailsPage;
