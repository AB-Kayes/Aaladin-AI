import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import FundamentalProjectsPage from "@/components/FundamentalProjectsPage";
import { getFundamentalProjects } from "@/data/projects";

export const metadata = {
    title: "Fundamental Projects - Aaladin AI | Core AI Solutions",
    description:
        "Explore our fundamental AI projects including machine learning solutions, data analytics platforms, and core system architecture.",
};

const FundamentalProjects = () => {
    const projects = getFundamentalProjects();

    return (
        <>
            <FundamentalProjectsPage projects={projects} />
            <Footer />
            <ButtonGradient />
        </>
    );
};

export default FundamentalProjects;
