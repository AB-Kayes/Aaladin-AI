import NewsletterPage from "@/components/NewsletterPage";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Newsletter - Aaladin AI | Stay Updated",
    description:
        "Subscribe to our newsletter and stay updated with the latest AI insights, project updates, and industry trends from Aaladin AI.",
};

export default function Newsletter() {
    return (
        <>
            <NewsletterPage />
            <Footer />
        </>
    );
}
