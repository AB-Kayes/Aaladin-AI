import { notFound } from "next/navigation";
import ProjectDetailsPage from "@/components/ProjectDetailsPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import { getProjectBySlug, getIncrementalProjects } from "@/data/projects";

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found - Aaladin AI",
    };
  }

  return {
    title: `${project.title} - Aaladin AI Projects`,
    description: project.shortDescription || project.description,
    openGraph: {
      title: project.title,
      description: project.shortDescription || project.description,
      images: project.mainImage ? [project.mainImage] : [],
    },
  };
}

export default function ProjectDetails({ params }) {
  const project = getProjectBySlug(params.slug);
  const allProjects = getIncrementalProjects();

  if (!project) {
    notFound();
  }

  // Get related projects (same status or technologies, excluding current project)
  const relatedProjects = allProjects
    .filter(
      (p) =>
        p.id !== project.id &&
        (p.status === project.status ||
          p.technologies?.some((tech) => project.technologies?.includes(tech)))
    )
    .slice(0, 3);

  // If no related projects by criteria, get latest projects
  const finalRelatedProjects =
    relatedProjects.length > 0
      ? relatedProjects
      : allProjects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ProjectDetailsPage
          project={project}
          relatedProjects={finalRelatedProjects}
        />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}
