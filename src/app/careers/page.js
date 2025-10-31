import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import Section from "@/components/Section";

export const metadata = {
  title: "Careers - Aaladin AI",
  description: "Join our team building magical AI experiences.",
};

export default function CareersPage() {
  return (
    <>
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container text-center">
          <h1 className="h1 mb-6">Careers</h1>
          <p className="body-1 text-n-4 mb-8">
            We're hiring — roles coming soon.
          </p>
        </div>
      </Section>
      <Footer />
      <ButtonGradient />
    </>
  );
}
