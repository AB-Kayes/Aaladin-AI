import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import IncrementalProjectsPage from "@/components/IncrementalProjectsPage";
import { getIncrementalProjects } from "@/data/projects";

export const metadata = {
    title: "Incremental Projects - Aaladin AI | SaaS & Growth Solutions",
    description:
        "Explore our incremental projects including SaaS applications, progressive web apps, API integrations, and feature enhancements.",
};

const IncrementalProjects = () => {
    const projects = getIncrementalProjects();

    return (
        <>
            <IncrementalProjectsPage projects={projects} />
            <Footer />
            <ButtonGradient />
        </>
    );
};

export default IncrementalProjects;
