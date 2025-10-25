import ResponsiveHeader from "@/components/ResponsiveHeader";
import ButtonGradient from "@/components/svg/ButtonGradient";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSections";
import ProcessSection from "@/components/ProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialSection from "@/components/TestimonialSection";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";
import BlogPreview from "@/components/BlogPreview";
import { getFeaturedProjects } from "@/data/projects";

export const metadata = {
  title: "Aaladin AI - Premium AI & Web Development Services",
  description:
    "Transform your business with cutting-edge AI solutions and premium web development. Expert team delivering innovative digital experiences.",
};

const App = () => {
  // Get featured projects from direct data
  const projects = getFeaturedProjects();

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <ResponsiveHeader />
        <AnimatedSection direction="fade" duration={0.8}>
          <Hero />
        </AnimatedSection>
        {/* <AnimatedSection direction="up" delay={0.2}>
          <ServicesSection />
        </AnimatedSection> */}
        <AnimatedSection direction="up" delay={0.2}>
          <ProjectsSection projects={projects} />
        </AnimatedSection>
        <AnimatedSection direction="left" delay={0.1}>
          <ProcessSection />
        </AnimatedSection>
        {/* <AnimatedSection direction="right" delay={0.1}>
          <TestimonialSection testimonials={[]} />
        </AnimatedSection> */}
        <AnimatedSection direction="scale" delay={0.2}>
          <Contact />
        </AnimatedSection>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
