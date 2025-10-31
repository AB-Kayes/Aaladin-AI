import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import Section from "@/components/Section";

export const metadata = {
  title: "About Us - Aaladin AI",
  description:
    "Learn about our team and mission to build magical AI experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container text-center">
          <h1 className="h1 mb-6">About Aaladin AI</h1>
          <p className="body-1 text-n-4 mb-8">
            We are a team building magical AI experiences. This page is coming
            soon.
          </p>
        </div>
      </Section>
      <Footer />
      <ButtonGradient />
    </>
  );
}
