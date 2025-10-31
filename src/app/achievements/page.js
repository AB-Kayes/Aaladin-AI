import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import Section from "@/components/Section";

export const metadata = {
  title: "Achievements - Aaladin AI",
  description: "Milestones, press, and recognitions.",
};

export default function AchievementsPage() {
  return (
    <>
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container text-center">
          <h1 className="h1 mb-6">Achievements</h1>
          <p className="body-1 text-n-4 mb-8">
            Milestones, press, and recognitions. This page is coming soon.
          </p>
        </div>
      </Section>
      <Footer />
      <ButtonGradient />
    </>
  );
}
