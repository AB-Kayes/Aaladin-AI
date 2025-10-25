import NewsletterPage from "@/components/NewsletterPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Newsletter - Aaladin AI | Stay Updated",
    description:
        "Subscribe to our newsletter and stay updated with the latest AI insights, project updates, and industry trends from Aaladin AI.",
};

export default function Newsletter() {
    return (
        <>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <NewsletterPage />
                <Footer />
            </div>
        </>
    );
}
