import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import ProjectsPage from "@/components/ProjectsPage";
import { getProjects } from "@/lib/sanity";

export const metadata = {
  title: "Projects - Aaladin AI | Our Portfolio",
  description:
    "Explore our portfolio of innovative AI solutions and web development projects. See how we've helped businesses transform digitally.",
};

const Projects = async () => {
  const projects = await getProjects();

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ProjectsPage projects={projects} />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Projects;
