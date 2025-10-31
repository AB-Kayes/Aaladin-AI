import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import Section from "@/components/Section";

export const metadata = {
  title: "Our Universe - Aaladin AI",
  description: "Explore the worlds we're building.",
};

export default function OurUniversePage() {
  return (
    <>
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container text-center">
          <h1 className="h1 mb-6">Our Universe</h1>
          <p className="body-1 text-n-4 mb-8">
            Explore the worlds we're building. This page is coming soon.
          </p>
        </div>
      </Section>
      <Footer />
      <ButtonGradient />
    </>
  );
}
