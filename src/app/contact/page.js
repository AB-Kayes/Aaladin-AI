import Footer from "@/components/Footer";
import ButtonGradient from "@/components/svg/ButtonGradient";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us - Aaladin AI | Get a Quote",
  description:
    "Get in touch with Aaladin AI for your next AI project. Contact us for a free consultation and quote.",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
      <Footer />
      <ButtonGradient />
    </>
  );
};

export default ContactPage;